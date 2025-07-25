import { JSONFileLogo } from "#/components/Logos/json-file";
import { useContentStore } from "#/store/content-store";
import { HtmlLogo } from "#/components/Logos/html";
import { MenuSection } from "../MenuSection";
import { FileEntry } from "./FileEntry";
import { FolderEntry } from "./FolderEntry";

export const FilesSection = () => {
  const { setCurrentContent } = useContentStore();
  return (
    <MenuSection title="Dave Cook">
      <div className="p-2 flex flex-col space-y-2 text-sm">
        <FileEntry
          logo={<JSONFileLogo />}
          fileName="me.json"
          currentContent="me.json"
        />
        <FileEntry
          logo={<HtmlLogo />}
          fileName="about.html"
          currentContent="about.html"
        />
        <FolderEntry folderName="Projects">
          <FileEntry
            logo={<HtmlLogo />}
            fileName="project1.html"
            currentContent="about.html"
          />
        </FolderEntry>
      </div>
    </MenuSection>
  );
};
