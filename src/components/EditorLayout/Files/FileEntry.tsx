import { FileContentName } from "#/FileContent/types";
import { useContentStore } from "#/store/content-store";
import { JSX } from "preact";
import { FC } from "preact/compat";

export const FileEntry: FC<{
  logo: JSX.Element;
  fileName: string;
  currentContent: FileContentName;
}> = ({ fileName, currentContent, logo }) => {
  const { setCurrentContent } = useContentStore();
  return (
    <div
      class="flex items-center space-x-2 text-gray-400 hover:text-white transition cursor-pointer"
      aria-label={fileName}
      onClick={() => setCurrentContent(currentContent)}
    >
      {logo}
      <span>{fileName}</span>
    </div>
  );
};
