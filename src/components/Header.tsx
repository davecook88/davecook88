import { FC } from "preact/compat";
import { useParamFromUrl, Params } from "#/utils/url";
import { Views } from "#/pages/Home/HomeContent/constants";
import { SocialLinks } from "./SocialLinks";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className = "" }) => {
  const currentView = useParamFromUrl(Params.HOME_VIEW) || Views.BUTTONS;
  const isPageSelected = currentView !== Views.BUTTONS;

  return (
    <div
      className={
        "w-max uppercase flex items-center transition-all duration-300 ease-in-out h-full"
      }
    >
      <div className="flex flex-col h-full">
        <div className="text-sans text-left animate-fade-in flex-grow">
          <div
            class={`font-mono ${
              isPageSelected ? "text-lg md:text-xl" : "text-2xl md:text-6xl"
            } font-bold leading-none flex gap-2 md:gap-4 transition-all duration-300 ease-in-out`}
          >
            <span class="block font-black">Dave</span>
            <span class="block font-black">Cook</span>
          </div>
          <div
            class={`mt-1 md:mt-2 text-xs md:text-base font-mono tracking-wider uppercase animate-fade-in transition-all duration-300 ease-in-out ${
              isPageSelected ? "hidden md:block" : "block"
            }`}
          >
            <span class="relative select-none pointer-events-none">
              Senior Full Stack Engineer
            </span>
          </div>
        </div>
        {!isPageSelected && (
          <div className="w-full p-4 flex items-center justify-between mt-auto">
            <SocialLinks />
          </div>
        )}
      </div>
    </div>
  );
};
