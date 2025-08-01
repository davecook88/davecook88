import { useContentStore } from "#/store/content-store";
import { ComponentType, JSX } from "preact";
import { FileContentName, FileContentNames } from "./types";
import { MeJson } from "./MeJson";
import { AboutMeContent } from "./AboutHtml";
import { MiruniProject } from "./MiruniProject";
import { ThriveCalendarProjectContent } from "./ThriveCalendarProject";

const FileContentComponents: Record<FileContentName, ComponentType> = {
  [FileContentNames.ME_JSON]: MeJson,
  [FileContentNames.ABOUT]: AboutMeContent,
  [FileContentNames.PROJECT_MIRUNI]: MiruniProject,
  [FileContentNames.PROJECT_THRIVE_CALENDAR]: ThriveCalendarProjectContent,
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
