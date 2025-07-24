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
        "w-max font-sans flex items-center transition-all duration-300 ease-in-out h-full"
      }
    >
      <div className="flex flex-col h-full text-white text-4xl">
        <div className="text-sans text-left animate-fade-in flex-grow w-full h-full flex flex-col justify-center">
          <div>
            I'm <span className="font-bold text-accent-500">Dave Cook</span> and
            I'm a full-stack developer.
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
