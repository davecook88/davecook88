import { SocialLinks } from "#/components/SocialLinks";
import { HomeContent } from "./HomeContent";
import { useEffect, useState } from "preact/hooks";
import { useParamFromUrl, Params } from "#/utils/url";
import { Views } from "./HomeContent/constants";
import { Header } from "#/components/Header";

export function Home() {
  const currentView = useParamFromUrl(Params.HOME_VIEW);
  const [isPageSelected, setIsPageSelected] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const checkPageSelection = () => {
      const newPageSelected = !!currentView && currentView !== Views.BUTTONS;

      if (newPageSelected !== isPageSelected) {
        // Start transition
        setIsTransitioning(true);

        // Allow transition to complete before showing content
        setTimeout(() => {
          setIsPageSelected(newPageSelected);
          setIsTransitioning(false);
        }, 300); // Match the CSS transition duration
      }
    };

    checkPageSelection();

    const handlePopState = () => {
      checkPageSelection();
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [currentView, isPageSelected]);

  return (
    <div
      class={`home w-full min-h-screen transition-all duration-300 ease-in-out`}
    >
      <div
        class={`flex flex-wrap w-full text-gray-400 transition-all duration-300 ease-in-out ${
          isPageSelected ? "md:h-min" : "h-screen md:h-screen"
        }`}
      >
        {/* Centered text content with enhanced typography */}
        <div
          class={`md:basis-2/6 min-w-0 md:w-1/3 tracking-tight p-4 transition-all duration-300 ease-in-out`}
        >
          <Header />
        </div>

        <div
          class={`${
            isPageSelected
              ? "w-full min-w-0 md:w-full md:h-auto"
              : "w-full min-w-0 md:w-2/3 md:h-full flex items-center"
          } transition-all duration-300 ease-in-out ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {!isTransitioning && <HomeContent />}
        </div>
      </div>
    </div>
  );
}
