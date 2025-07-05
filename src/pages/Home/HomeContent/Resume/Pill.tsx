import { VNode } from "preact";

interface PillProps {
  children: VNode | VNode[] | string;
}

export const Pill = ({ children }: PillProps) => (
  <div className="bg-accent-800 text-accent-200 text-sm font-medium px-3 py-1 rounded-full">
    {children}
  </div>
);
