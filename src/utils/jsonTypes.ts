export interface JsonMetaAttributes {
  _link?: string;
  _val?: string; // Used for displaying values in a special way
  _type?: "string" | "number"; // Used to indicate the type of the value (e.g., "string", "number", etc.)
  // Add other meta attributes here as needed
}

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray
  | (string | number | boolean | null | JsonObject | JsonArray)[];

export interface JsonObject extends JsonMetaAttributes {
  [key: string]: JsonValue;
}

export type JsonArray = JsonValue[];
