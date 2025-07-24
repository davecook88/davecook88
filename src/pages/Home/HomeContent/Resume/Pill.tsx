import { VNode } from "preact";

interface PillProps {
  children: VNode | VNode[] | string;
}

export const Pill = ({ children }: PillProps) => (
  <div className="bg-accent-900/40 text-accent-300 text-sm font-medium px-3 py-1 rounded-full hover:bg-accent-800 transition-colors duration-200">
    {children}
  </div>
);
