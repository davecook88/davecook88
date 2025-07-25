import { FC, useState } from "preact/compat";
import { CollapsibleArray } from "./CollapsibleArray";
import { JsonObject } from "../utils/jsonTypes";
import { JsonExplorer } from "./JsonExplorer";

interface CollapsableObjectProps {
  title: string;
  data: JsonObject;
  defaultOpen?: boolean;
  parentKey?: string; // Track the parent key to identify the contact section
}

export const CollapsableObject: FC<CollapsableObjectProps> = ({
  title,
  data,
  defaultOpen = false,
  parentKey,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Filter out meta attributes (starting with _)
  const getDisplayEntries = (obj: JsonObject) => {
    return Object.entries(obj).filter(([key]) => !key.startsWith("_"));
  };

  // Check if a string is a valid URL
  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Check if a string is an email
  const isValidEmail = (string: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(string);
  };

  const renderValue = (key: string, value: JsonObject) => {
    const _value = value._val ?? value;
    console.log("Rendering value for key:", key, "value:", _value);
    if (typeof _value === "string") {
      // Check if the parent object has a _link meta attribute
      if (data._link) {
        return (
          <a
            href={data._link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline cursor-pointer"
          >
            "{value}"
          </a>
        );
      } else if (parentKey === "contact") {
        // Special handling for contact section
        if (isValidUrl(_value)) {
          return (
            <a
              href={_value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline cursor-pointer"
            >
              "{value}"
            </a>
          );
        } else if (isValidEmail(_value)) {
          return (
            <a
              href={`mailto:${_value}`}
              className="text-green-400 hover:underline cursor-pointer"
            >
              "{_value}"
            </a>
          );
        } else {
          return <span className="text-green-400">"{_value}"</span>;
        }
      } else {
        return <span className="text-green-400">"{_value}"</span>;
      }
    } else if (typeof _value === "number") {
      return <span className="text-blue-400">{_value}</span>;
    } else if (typeof _value === "boolean") {
      return <span className="text-purple-400">{_value}</span>;
    } else if (_value === null) {
      return <span className="text-gray-400">null</span>;
    } else if (Array.isArray(_value)) {
      return (
        <CollapsibleArray
          title={key}
          items={_value}
          renderItem={(item, index) => {
            if (typeof item === "object" && item !== null) {
              return (
                <CollapsableObject
                  title={`${key}[${index}]`}
                  data={item as JsonObject}
                  defaultOpen={defaultOpen}
                  parentKey={parentKey}
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
      return (
        <CollapsableObject
          title={key}
          data={value as JsonObject}
          defaultOpen={defaultOpen}
          parentKey={title}
        />
      );
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
          {getDisplayEntries(data).map(([key, value]) => (
            <div key={key} className="flex">
              {typeof value === "string" && (
                <span className="text-amber-300 mr-2">{key}:</span>
              )}
              {renderValue(key, value as JsonObject)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
