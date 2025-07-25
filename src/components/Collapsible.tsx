import { FC, useState } from "preact/compat";

interface CollapsibleProps {
  title: string;
  children: any;
  defaultOpen?: boolean;
  type?: "object" | "array";
  length?: number;
}

export const Collapsible: FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
  type = "object",
  length = 0,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-1">
      <div
        className="flex items-center cursor-pointer hover:bg-gray-800 pl-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2 text-gray-400">{isOpen ? "▼" : "▶"}</span>
        <span className="text-violet-400">{title}</span>
        <span className="text-gray-400 ml-2">
          {type === "array" ? `Array[${length}]` : "Object"}
        </span>
      </div>
      {isOpen && (
        <div className="ml-6 border-l border-gray-700 pl-2">{children}</div>
      )}
    </div>
  );
};
