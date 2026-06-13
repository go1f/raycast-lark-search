import { LarkSearchType, SearchScope, SearchScopeFilter } from "./types";

const defaultSearchScopes: SearchScopeFilter = [
  "contact",
  "chat",
  "doc",
  "message",
];
const scopeOrder: SearchScopeFilter = [
  "contact",
  "chat",
  "message",
  "doc",
  "wiki",
  "sheet",
];

const prefixScopes: Record<string, SearchScopeFilter> = {
  all: defaultSearchScopes,
  doc: ["doc"],
  docs: ["doc"],
  file: ["doc"],
  msg: ["message"],
  msgs: ["message"],
  message: ["message"],
  messages: ["message"],
  im: ["contact", "chat"],
  chat: ["chat"],
  group: ["chat"],
  qun: ["chat"],
  q: ["chat"],
  ren: ["contact"],
  r: ["contact"],
  user: ["contact"],
  contact: ["contact"],
  people: ["contact"],
  person: ["contact"],
  wiki: ["wiki"],
  sheet: ["sheet"],
  table: ["sheet"],
};

export function parseSearchPrefix(input: string, selectedScope: SearchScope) {
  let trimmed = input.trim();
  let scopes = expandScope(selectedScope);
  let hasTypeFilters = false;

  const suffixMatch = /(?:\s+\/[a-z]+)+\s*$/i.exec(trimmed);
  if (suffixMatch) {
    const parsedScopes = suffixMatch[0]
      .match(/\/([a-z]+)/gi)
      ?.flatMap((token) => prefixScopes[token.slice(1).toLowerCase()] ?? []);

    if (parsedScopes?.length) {
      scopes = dedupeScopes(parsedScopes);
      hasTypeFilters = true;
    }
    trimmed = trimmed.slice(0, suffixMatch.index).trimEnd();
  }

  const match = /^f\s+([a-z]+)\s+(.+)$/i.exec(trimmed);

  if (!match) {
    return {
      query: trimmed,
      scopes,
      scopeKey: scopeKey(scopes),
      hasTypeFilters,
    };
  }

  const prefixMatch = prefixScopes[match[1].toLowerCase()];
  if (prefixMatch?.length) {
    scopes = dedupeScopes(prefixMatch);
    hasTypeFilters = true;
  }

  return {
    query: match[2].trimStart(),
    scopes,
    scopeKey: scopeKey(scopes),
    hasTypeFilters,
  };
}

export function expandScope(scope: SearchScope): SearchScopeFilter {
  return scope === "all" ? defaultSearchScopes : [scope];
}

export function scopeKey(scopes: SearchScopeFilter) {
  return dedupeScopes(scopes).join(",");
}

function dedupeScopes(scopes: LarkSearchType[]) {
  return scopeOrder.filter((scope) => scopes.includes(scope));
}
