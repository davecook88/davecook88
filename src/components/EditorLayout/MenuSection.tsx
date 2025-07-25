import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

interface MenuSectionProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const MenuSection = ({ title, children }: MenuSectionProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <div class="border-b border-gray-700 overflow-scroll">
      <button
        onClick={toggleCollapse}
        className="font-bold w-full bg-gray-800 py-1 px-2 cursor-pointer hover:bg-gray-700 flex justify-between items-center"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={`w-4 h-4 transition-transform duration-200 ease-in-out ${
            !collapsed ? "rotate-90" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          collapsed ? "max-h-0" : "h-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
