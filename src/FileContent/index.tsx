import { useContentStore } from "#/store/content-store";
import { ComponentType, JSX } from "preact";
import { FileContentName, FileContentNames } from "./types";
import { MeJson } from "./MeJson";
import { AboutFileContent } from "./AboutHtml";

const FileContentComponents: Record<FileContentName, ComponentType> = {
  [FileContentNames.ME_JSON]: MeJson,
  [FileContentNames.ABOUT]: AboutFileContent,
};

export const FileContentDisplay = () => {
  const { currentContent } = useContentStore();

  const ContentComponent = currentContent
    ? FileContentComponents[currentContent]
    : null;

  return (
    <div>
      {ContentComponent ? <ContentComponent /> : <p>No content available</p>}
    </div>
  );
};
