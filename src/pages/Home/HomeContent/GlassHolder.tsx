import { FC } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { Header } from "#/components/Header";

interface GlassHolderProps {
  onBackClick?: () => void;
}

export const GlassHolder: FC<GlassHolderProps> = ({
  children,
  onBackClick,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`text-sans relative w-full max-h-full rounded-3xl z-20 transition-all duration-500 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Content */}
      <div className="md:max-h-[85vh] relative z-10 glass-effect glass-highlight rounded-3xl p-4 md:p-6 flex-col gap-4 justify-left overflow-scroll mt-4 md:mt-6">
        <button
          onClick={onBackClick}
          className="text-accent-500 mb-4 font-mono cursor-pointer hover:scale-105 transition-transform"
        >
          {"<--- BACK"}
        </button>
        <div className="text-gray-400 font-sans h-full">{children}</div>
      </div>
    </div>
  );
};
