/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** lark-cli Path - Path to the lark-cli executable. */
  "larkCliPath": string,
  /** Quicklink Export Limit - Maximum number of recently opened items to export as Quicklinks. */
  "quicklinkLimit": string,
  /** Lark Application - Enable Lark as a desktop app target for opening chats, contacts, and messages. */
  "enableLarkApplication": boolean,
  /** Lark App - Lark application used for Raycast Quicklinks. */
  "larkApplicationName"?: import("@raycast/api").Application,
  /** Lark Bundle ID - Bundle identifier used to open Lark links directly in the desktop app. */
  "larkBundleId": string,
  /** Lark lark-cli Identity - lark-cli identity passed to --as when Lark is the selected target. */
  "larkCliIdentity": string,
  /** Feishu Application - Enable Feishu/飞书 as a desktop app target for opening chats, contacts, and messages. */
  "enableFeishuApplication": boolean,
  /** Feishu App - Feishu/飞书 application used for Raycast Quicklinks. */
  "feishuApplicationName"?: import("@raycast/api").Application,
  /** Feishu Bundle ID - Bundle identifier used to open Feishu/飞书 links directly in the desktop app. */
  "feishuBundleId": string,
  /** Feishu lark-cli Identity - lark-cli identity passed to --as when Feishu is the selected target. */
  "feishuCliIdentity": string,
  /** Hot Index Limit - Maximum number of Script Commands generated for Raycast root search. */
  "hotIndexLimit": string,
  /** Hot Index Script Commands Directory - Folder containing generated Lark Script Commands. Add this folder to Raycast Script Commands once. */
  "hotIndexDirectory": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-lark` command */
  export type SearchLark = ExtensionPreferences & {}
  /** Preferences accessible in the `sync-quicklinks` command */
  export type SyncQuicklinks = ExtensionPreferences & {}
  /** Preferences accessible in the `refresh-hot-index` command */
  export type RefreshHotIndex = ExtensionPreferences & {}
  /** Preferences accessible in the `setup-hot-index` command */
  export type SetupHotIndex = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-lark` command */
  export type SearchLark = {}
  /** Arguments passed to the `sync-quicklinks` command */
  export type SyncQuicklinks = {}
  /** Arguments passed to the `refresh-hot-index` command */
  export type RefreshHotIndex = {}
  /** Arguments passed to the `setup-hot-index` command */
  export type SetupHotIndex = {}
}

