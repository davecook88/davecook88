import { FC } from "preact/compat";

interface EditorLayoutProps {
  rightPanel?: React.ReactNode;
  leftPanel?: React.ReactNode;
}

export const EditorLayout: FC<EditorLayoutProps> = ({
  rightPanel,
  leftPanel,
}) => {
  return (
    <div class={`flex flex-wrap w-full text-gray-400`}>
      {/* Centered text content with enhanced typography */}
      <div class={`w-[30vw] flex flex-row`}>
        <div className="overflow-scroll w-full h-full">{rightPanel}</div>
        <div className="h-full w-1 bg-gray-500 cursor-col-resize hover:bg-accent-500" />
      </div>
      <div
        class={`w-[65vw] flex flex-col items-center justify-center text-center p-4 md:p-8 lg:p-12`}
      >
        {leftPanel}
      </div>
    </div>
  );
};
