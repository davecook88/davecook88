import { FileExtension } from "#/components/EditorLayout/Files/FileLogo";

// FileContentName is a string that must end with a valid file extension
type FileContentNameWithExt = `${string}${FileExtension}`;

export const FileContentNames: Record<string, FileContentNameWithExt> = {
  ME_JSON: "me.json",
  ABOUT: "about.html",
  PROJECT_MIRUNI: "miruni-project.ts",
} as const;

export type FileContentName =
  (typeof FileContentNames)[keyof typeof FileContentNames];
