import { JSX } from "preact";
import { FC } from "preact/compat";
import { useState } from "preact/hooks";

interface TSTypeHoverProps {
  typeName: string;
}
export const TSTypeHover: FC<TSTypeHoverProps> = ({ typeName, children }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setDisplayTooltip(true)}
      onMouseLeave={() => setDisplayTooltip(false)}
    >
      <span className="hover:border-b hover:border-dashed hover:border-primary-400 cursor-pointer text-syntax-type">
        {typeName}
      </span>
      {displayTooltip && (
        <div className="absolute z-10 mt-2 p-3 border border-primary-700 bg-primary-900 rounded-md shadow-lg text-sm font-mono w-max">
          {children}
        </div>
      )}
    </div>
  );
};
