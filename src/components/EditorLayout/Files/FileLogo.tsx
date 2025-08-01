import { FileContentName } from "#/FileContent/types";
import { FC } from "preact/compat";

export const FileExtensions = {
  ts: ".ts",
  json: ".json",
  html: ".html",
  js: ".js",
};

export type FileExtension = keyof typeof FileExtensions;

const getExtension = (fileName: FileContentName): FileExtension => {
  const extension = fileName.split(".").pop();
  return extension as FileExtension;
};

import { TypescriptLogo } from "#/components/Logos/typescript";
import { JSONFileLogo } from "#/components/Logos/json-file";
import { HtmlLogo } from "#/components/Logos/html";
import { JavascriptLogo } from "#/components/Logos/javascript";

const logoMap: Record<FileExtension, React.ComponentType> = {
  ts: TypescriptLogo,
  json: JSONFileLogo,
  html: HtmlLogo,
  js: JavascriptLogo,
};

interface FileLogoProps {
  fileName: FileContentName;
}
export const FileLogo: FC<FileLogoProps> = ({ fileName }) => {
  const extension = getExtension(fileName);
  const LogoComponent = logoMap[extension];
  return LogoComponent && <LogoComponent />;
};
