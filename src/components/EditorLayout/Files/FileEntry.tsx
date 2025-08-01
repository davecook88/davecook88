import { FileContentName } from "#/FileContent/types";
import { useContentStore } from "#/store/content-store";
import { JSX } from "preact";
import { FC } from "preact/compat";
import { FileLogo } from "./FileLogo";

export const FileEntry: FC<{
  fileName: FileContentName;
  currentContent: FileContentName;
}> = ({ fileName, currentContent }) => {
  const { setCurrentContent } = useContentStore();
  return (
    <div
      class="flex items-center space-x-2 text-gray-400 hover:text-white transition cursor-pointer overflow-hidden"
      aria-label={fileName}
      onClick={() => setCurrentContent(currentContent)}
    >
      <FileLogo fileName={fileName} />
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {fileName}
      </span>
    </div>
  );
};
