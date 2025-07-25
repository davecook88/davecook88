export const FileContentNames = {
  ME_JSON: "me.json",
  ABOUT: "about.html",
} as const;

export type FileContentName =
  (typeof FileContentNames)[keyof typeof FileContentNames];
