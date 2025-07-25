import { FC, useState } from "preact/compat";
import { CollapsableObject } from "./CollapsableObject";
import { CollapsibleArray } from "./CollapsibleArray";
import { JsonObject } from "../utils/jsonTypes";

interface JsonExplorerProps {
  data: JsonObject;
  parentKey?: string; // Track the parent key to identify the contact section
  defaultOpen?: boolean; // For testing purposes
}

export const JsonExplorer: FC<JsonExplorerProps> = ({
  data,
  parentKey,
  defaultOpen = true,
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

  return (
    <div className="font-mono text-sm bg-gray-900 text-gray-300 p-4 rounded-lg">
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
              console.log("Rendering collapsible array for key:", key);
              return <CollapsibleArray key={key} title={key} items={value} />;
            } else if (typeof value === "object" && value !== null) {
              console.log("Rendering collapsable object for key:", key);
              return (
                <CollapsableObject
                  key={key}
                  title={key}
                  data={value as JsonObject}
                  defaultOpen={defaultOpen}
                  parentKey={key} // Pass the key as parentKey for nested objects
                />
              );
            } else {
              console.log("Rendering simple value for key:", key);
              return (
                <div key={key} className="flex py-1 pl-2">
                  <span className="text-amber-300 mr-2">{key}:</span>
                  {typeof value === "string" &&
                    (typeof data._link === "string" && key !== "_link" ? (
                      <a
                        href={data._link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline cursor-pointer"
                      >
                        "{value ?? data._value}"
                      </a>
                    ) : parentKey === "contact" ? (
                      isValidUrl(value) ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:underline cursor-pointer"
                        >
                          "{value}"
                        </a>
                      ) : isValidEmail(value) ? (
                        <a
                          href={`mailto:${value}`}
                          className="text-green-400 hover:underline cursor-pointer"
                        >
                          "{value}"
                        </a>
                      ) : (
                        <span className="text-green-400">"{value}"</span>
                      )
                    ) : (
                      <span className="text-green-400">"{value}"</span>
                    ))}
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
