import { useContentStore } from "#/store/content-store";
import { FileLogo } from "./Files/FileLogo";

export const FileTabs = () => {
  const { currentContent } = useContentStore();
  return (
    <div className="w-full bg-gray-800  ">
      <div className="flex items-center h-full">
        <div className="flex gap-1 items-center justify-center text-white text-sm border-t border-accent-500 px-4 py-1 bg-gray-900">
          <FileLogo fileName={currentContent} />
          {currentContent}
        </div>
      </div>
    </div>
  );
};
