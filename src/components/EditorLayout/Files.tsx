import { JSONFileLogo } from "#/components/Logos/json-file";
import { useContentStore } from "#/store/content-store";
import { HtmlLogo } from "#/components/Logos/html";
import { MenuSection } from "./MenuSection";

export const FilesSection = () => {
  const { setCurrentContent } = useContentStore();
  return (
    <MenuSection title="Dave Cook">
      <div className="p-2 flex flex-col space-y-2 text-sm">
        <div
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition cursor-pointer"
          aria-label="me.json"
          onClick={() => setCurrentContent("me.json")}
        >
          <JSONFileLogo />
          <span>me.json</span>
        </div>
        <div
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition cursor-pointer"
          aria-label="about.html"
          onClick={() => setCurrentContent("about.html")}
        >
          <HtmlLogo />
          <span>about.html</span>
        </div>
      </div>
    </MenuSection>
  );
};
