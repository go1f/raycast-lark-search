/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Application Target - Choose which desktop app Lark Search should use. */
  "appTarget": "lark" | "feishu" | "both",
  /** Lark-cli Path - Path to the lark-cli executable. */
  "larkCliPath": string,
  /** Lark-cli Identity - Identity passed to lark-cli --as when searching Lark. */
  "larkCliIdentity": string,
  /** Feishu Lark-cli Identity - Identity passed to lark-cli --as when searching Feishu. */
  "feishuCliIdentity": string,
  /** Root Search Shortcut Folder - Choose where Lark Search writes shortcut files for Raycast Root Search. */
  "hotIndexDirectory": string,
  /** Root Search Shortcut Limit - Maximum number of local shortcuts shown in Raycast Root Search. */
  "hotIndexLimit": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-lark` command */
  export type SearchLark = ExtensionPreferences & {}
  /** Preferences accessible in the `refresh-hot-index` command */
  export type RefreshHotIndex = ExtensionPreferences & {}
  /** Preferences accessible in the `setup-hot-index` command */
  export type SetupHotIndex = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-lark` command */
  export type SearchLark = {}
  /** Arguments passed to the `refresh-hot-index` command */
  export type RefreshHotIndex = {}
  /** Arguments passed to the `setup-hot-index` command */
  export type SetupHotIndex = {}
}

