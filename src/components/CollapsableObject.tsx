import { FC, useState } from "preact/compat";
import { CollapsibleArray } from "./CollapsibleArray";

interface CollapsableObjectProps {
  title: string;
  data: Record<string, any>;
  defaultOpen?: boolean;
}

export const CollapsableObject: FC<CollapsableObjectProps> = ({
  title,
  data,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const renderValue = (key: string, value: any) => {
    if (typeof value === "string") {
      return <span className="text-green-400">"{value}"</span>;
    } else if (typeof value === "number") {
      return <span className="text-blue-400">{value}</span>;
    } else if (typeof value === "boolean") {
      return <span className="text-purple-400">{value.toString()}</span>;
    } else if (value === null) {
      return <span className="text-gray-400">null</span>;
    } else if (Array.isArray(value)) {
      return (
        <CollapsibleArray
          title={key}
          items={value}
          renderItem={(item, index) => {
            if (typeof item === "object" && item !== null) {
              return (
                <CollapsableObject
                  title={`${key}[${index}]`}
                  data={item}
                  defaultOpen={false}
                />
              );
            } else {
              return (
                <div className="py-1">
                  {typeof item === "string" && (
                    <span className="text-green-400">"{item}"</span>
                  )}
                  {typeof item === "number" && (
                    <span className="text-blue-400">{item}</span>
                  )}
                  {typeof item === "boolean" && (
                    <span className="text-purple-400">{item.toString()}</span>
                  )}
                  {item === null && <span className="text-gray-400">null</span>}
                </div>
              );
            }
          }}
        />
      );
    } else if (typeof value === "object") {
      return <CollapsableObject title={key} data={value} defaultOpen={false} />;
    }
    return <span className="text-gray-400">{String(value)}</span>;
  };

  return (
    <div className="mb-1">
      <div
        className="flex items-center cursor-pointer  hover:bg-gray-800 pl-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2 text-gray-400">{isOpen ? "▼" : "▶"}</span>
        <span className="text-cyan-400">{title}</span>
        <span className="text-gray-400 ml-2">Object</span>
      </div>
      {isOpen && (
        <div className="ml-6 border-l border-gray-700 pl-2 py-1">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex">
              {typeof value === "string" && (
                <span className="text-amber-300 mr-2">{key}:</span>
              )}
              {renderValue(key, value)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
