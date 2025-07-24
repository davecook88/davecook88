import { FC, Children } from "preact/compat";

export const BaseSection: FC<{
  className?: string;
}> = ({ className = "", children }) => {
  return <div className={`w-full h-screen ${className}`}>{children}</div>;
};
