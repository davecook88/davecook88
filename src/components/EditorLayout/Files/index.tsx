import { MenuSection } from "../MenuSection";
import { FileEntry } from "./FileEntry";
import { FolderEntry } from "./FolderEntry";
import { FileContentNames } from "#/FileContent/types";

export const FilesSection = () => {
  return (
    <MenuSection title="Dave Cook">
      <div className="p-2 flex flex-col space-y-2 text-sm">
        <FileEntry fileName="me.json" currentContent="me.json" />
        <FileEntry fileName="about.html" currentContent="about.html" />
        <FolderEntry folderName="Projects">
          <FileEntry
            fileName={FileContentNames.PROJECT_MIRUNI}
            currentContent={FileContentNames.PROJECT_MIRUNI}
            key={FileContentNames.PROJECT_MIRUNI}
          />
          <FileEntry
            fileName={FileContentNames.PROJECT_THRIVE_CALENDAR}
            currentContent={FileContentNames.PROJECT_THRIVE_CALENDAR}
            key={FileContentNames.PROJECT_THRIVE_CALENDAR}
          />
        </FolderEntry>
      </div>
    </MenuSection>
  );
};
