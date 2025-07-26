import { FolderLogo } from "#/components/Logos/folder";
import { FileContentName } from "#/FileContent/types";
import { useContentStore } from "#/store/content-store";
import { JSX } from "preact";
import { FC, useState } from "preact/compat";

export const FolderEntry: FC<{
  folderName: string;
  children: JSX.Element;
}> = ({ folderName, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div>
      <div
        class="flex items-center space-x-2 text-gray-400 hover:text-white transition cursor-pointer"
        aria-label={folderName}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <button
          onClick={toggleCollapse}
          className="font-bold w-min  cursor-pointer flex justify-between items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`w-4 h-4 transition-transform duration-200 ease-in-out ${
              !isCollapsed ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <FolderLogo />
        <span>{folderName}</span>
      </div>
      <div
        class={`overflow-hidden transition-all duration-300 ease-in-out  pl-8 ${
          isCollapsed ? "max-h-0 py-0" : "h-full py-2"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
