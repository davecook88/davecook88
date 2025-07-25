import { debounce } from "#/utils/debounce";
import { FC, useRef, useState, useEffect } from "preact/compat";
import { ContactSection } from "./ContactSection";
import { FilesSection } from "./Files";

interface EditorLayoutProps {
  rightPanel?: React.ReactNode;
  leftPanel?: React.ReactNode;
}

const DEBOUNCE_MS = 1;

export const EditorLayout: FC<EditorLayoutProps> = ({
  rightPanel,
  leftPanel,
}) => {
  const resizeBoundryRef = useRef<HTMLDivElement>(null);
  const [leftPanelWidth, setLeftPanelWidth] = useState(30); // Default width in percentage
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = debounce((e: MouseEvent) => {
      if (!isDragging) return;

      e.preventDefault();
      const draggedPercentage = (e.clientX / window.innerWidth) * 100;
      const normalizedPercentage =
        Math.round(Math.max(10, Math.min(90, draggedPercentage)) * 10) / 10;
      if (normalizedPercentage === leftPanelWidth) return; // No change
      setLeftPanelWidth(normalizedPercentage);
    }, DEBOUNCE_MS);

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    if (isDragging) {
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div
      className={`flex w-full h-full text-gray-400 ${
        isDragging ? "select-none" : ""
      }`}
    >
      {/* Left Panel */}
      <div
        className="h-screen flex flex-col"
        style={{ width: `${leftPanelWidth}%` }}
      >
        <div className="overflow-scroll">{leftPanel}</div>

        <FilesSection />

        <ContactSection />
      </div>

      {/* Resize Handle */}
      <div
        ref={resizeBoundryRef}
        className={`h-screen w-1 cursor-col-resize flex-shrink-0 transition-colors ${
          isDragging ? "bg-accent-500" : "bg-gray-500 hover:bg-accent-500"
        }`}
        onMouseDown={handleMouseDown}
      />

      {/* Right Panel */}
      <div
        className="h-full overflow-scroll flex-1 transition-none"
        style={{ width: `${100 - leftPanelWidth}%` }}
      >
        {rightPanel}
      </div>
    </div>
  );
};
