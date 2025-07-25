import { FC, useState } from "preact/compat";
import { CollapsableObject } from "./CollapsableObject";
import { CollapsibleArray } from "./CollapsibleArray";

interface JsonExplorerProps {
  data: Record<string, any>;
}

export const JsonExplorer: FC<JsonExplorerProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="font-mono text-sm bg-gray-900 text-gray-300 p-4 rounded-lg ">
      <div
        className="flex items-center cursor-pointer mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2 text-gray-400">{isOpen ? "▼" : "▶"}</span>
        <span className="text-amber-300">root</span>
        <span className="text-gray-400 ml-2">Object</span>
      </div>
      {isOpen && (
        <div className="ml-4">
          {Object.entries(data).map(([key, value]) => {
            if (Array.isArray(value)) {
              return <CollapsibleArray key={key} title={key} items={value} />;
            } else if (typeof value === "object" && value !== null) {
              return (
                <CollapsableObject
                  key={key}
                  title={key}
                  data={value}
                  defaultOpen={false}
                />
              );
            } else {
              return (
                <div key={key} className="flex py-1 pl-2">
                  <span className="text-amber-300 mr-2">{key}:</span>
                  {typeof value === "string" && (
                    <span className="text-green-400">"{value}"</span>
                  )}
                  {typeof value === "number" && (
                    <span className="text-blue-400">{value}</span>
                  )}
                  {typeof value === "boolean" && (
                    <span className="text-purple-400">{value.toString()}</span>
                  )}
                  {value === null && (
                    <span className="text-gray-400">null</span>
                  )}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
