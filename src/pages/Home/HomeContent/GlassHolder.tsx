import { FC } from "preact/compat";

export const GlassHolder: FC = ({ children }) => {
  return (
    <div class="relative w-full h-full rounded-3xl overflow-hidden z-20 transition-transform duration-300 ease-in-out">
      {/* Background blur layer */}
      <div class="absolute inset-0 glass-effect rounded-3xl"></div>
      {/* Highlight layer*/}
      <div class="absolute inset-0 glass-highlight rounded-3xl"></div>
      {/* Content */}
      <div class="relative z-10 flex items-center justify-center h-full p-6">
        <div class="text-center text-white">{children}</div>
      </div>
    </div>
  );
};
