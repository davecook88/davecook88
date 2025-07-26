import { JSONFileLogo } from "#/components/Logos/json-file";
import { useContentStore } from "#/store/content-store";
import { HtmlLogo } from "#/components/Logos/html";
import { MenuSection } from "../MenuSection";
import { FileEntry } from "./FileEntry";
import { FolderEntry } from "./FolderEntry";
import { FileContentNames } from "#/FileContent/types";
import { TypescriptLogo } from "#/components/Logos/typescript";

export const FilesSection = () => {
  const { setCurrentContent } = useContentStore();
  return (
    <MenuSection title="Dave Cook">
      <div className="p-2 flex flex-col space-y-2 text-sm">
        <FileEntry fileName="me.json" currentContent="me.json" />
        <FileEntry fileName="about.html" currentContent="about.html" />
        <FolderEntry folderName="Projects">
          <FileEntry
            fileName={FileContentNames.PROJECT_MIRUNI}
            currentContent={FileContentNames.PROJECT_MIRUNI}
          />
        </FolderEntry>
      </div>
    </MenuSection>
  );
};
