export const FileContentNames = {
  ME_JSON: "me.json",
  ABOUT: "about.html",
  PROJECT_MIRUNI: "miruni-project.ts",
} as const;

export type FileContentName =
  (typeof FileContentNames)[keyof typeof FileContentNames];
