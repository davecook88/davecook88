import { JSONFileLogo } from "#/components/Logos/json-file";
import { MenuSection } from "./MenuSection";

export const FilesSection = () => {
  return (
    <MenuSection title="Dave Cook">
      <div className="p-2 flex flex-col space-y-2 text-sm">
        <a
          href="https://github.com/davecook88"
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <JSONFileLogo />
          <span>me.json</span>
        </a>
      </div>
    </MenuSection>
  );
};
