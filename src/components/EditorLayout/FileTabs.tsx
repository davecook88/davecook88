import { useContentStore } from "#/store/content-store";

export const FileTabs = () => {
  const { currentContent } = useContentStore();
  return (
    <div className="w-full bg-gray-800  ">
      <div className="flex items-center h-full">
        <span className="text-white text-sm border-t border-accent-500 px-4 py-1 bg-gray-900">
          {currentContent}
        </span>
      </div>
    </div>
  );
};
