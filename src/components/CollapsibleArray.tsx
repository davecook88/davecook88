import { FC, JSX, useState } from "preact/compat";
import { CollapsableObject } from "./CollapsableObject";
import { JsonObject } from "../utils/jsonTypes";

interface CollapsibleArrayProps {
  title: string;
  items: any[];
  defaultOpen?: boolean;
  renderItem?: (item: any, index: number) => JSX.Element;
}

export const CollapsibleArray: FC<CollapsibleArrayProps> = ({
  title,
  items,
  defaultOpen = false,
  renderItem,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const defaultRenderItem = (item: any, index: number) => {
    if (
      typeof item === "object" &&
      item !== null &&
      !Array.isArray(item) &&
      !item._type
    ) {
      return (
        <CollapsableObject
          title={`${title}[${index}]`}
          data={item as JsonObject}
          defaultOpen={false}
        />
      );
    } else if (Array.isArray(item)) {
      return (
        <CollapsibleArray
          title={`${title}[${index}]`}
          items={item}
          defaultOpen={false}
        />
      );
    } else {
      item = item._val ?? item;
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
  };

  return (
    <div>
      <div
        className="flex items-center cursor-pointer hover:bg-gray-800 pl-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2 mb-1 text-gray-400">{isOpen ? "▼" : "▶"}</span>
        <span className="text-amber-300">{title}</span>
        <span className="text-gray-400 ml-2">Array[{items.length}]</span>
      </div>
      {isOpen && (
        <div className="ml-6 border-l border-gray-700 pl-2">
          {items.map((item, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 mr-2">{index}:</span>
              {renderItem
                ? renderItem(item, index)
                : defaultRenderItem(item, index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
