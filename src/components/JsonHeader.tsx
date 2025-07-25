import { FC, useEffect, useState } from "preact/compat";
import { Collapsible } from "./Collapsible";

interface JsonHeaderProps {
  onAnimationComplete?: () => void;
}

const JsonHeader: FC<JsonHeaderProps> = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  return (
    <div
      className={`font-mono text-white text-2xl transition-all duration-300 ease-in-out ${
        isFading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
      style={{
        fontFamily:
          "'JetBrains Mono', 'Fira Code', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      }}
    >
      <div className="mb-2">{"{"}</div>
      <div className="ml-6">
        <span className="text-accent-500">"name"</span>
        <span className="text-white">: </span>
        <span className="text-green-400">"David Cook"</span>
        <span className="text-white">,</span>
      </div>
      <div className="ml-6">
        <span className="text-accent-500">"role"</span>
        <span className="text-white">: </span>
        <span className="text-green-400">"Senior Full Stack Developer"</span>
        <span className="text-white">,</span>
      </div>

      <Collapsible title="Skills" defaultOpen={true}>
        <div className="ml-6">
          <span className="text-accent-500">"skills"</span>
          <span className="text-white">: [</span>
        </div>
        <div className="ml-10">
          <span className="text-green-400">"JavaScript"</span>
          <span className="text-white">,</span>
        </div>
        <div className="ml-10">
          <span className="text-green-400">"TypeScript"</span>
          <span className="text-white">,</span>
        </div>
        <div className="ml-10">
          <span className="text-green-400">"React"</span>
          <span className="text-white">,</span>
        </div>
        <div className="ml-10">
          <span className="text-green-400">"Node.js"</span>
        </div>
        <div className="ml-6">
          <span className="text-white">],</span>
        </div>
      </Collapsible>
      <div className="ml-6">
        <span className="text-accent-500">"experience"</span>
        <span className="text-white">: </span>
        <span className="text-green-400">"8+ years"</span>
      </div>
      <div className="mt-2">{"}"}</div>
    </div>
  );
};

export default JsonHeader;
