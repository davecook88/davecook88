import { SocialLinks } from "#/components/SocialLinks";
import { HomeContent } from "./HomeContent";
import { useEffect, useState } from "preact/hooks";
import { useParamFromUrl, Params } from "#/utils/url";
import { Views } from "./HomeContent/constants";
import { Header } from "#/components/Header";
import { BaseSection } from "./Sections/base";
import { Footer } from "#/components/Footer";
import { AboutMeSection } from "./Sections/AboutMe";

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
      class={`home w-full min-h-screen transition-all duration-300 ease-in-out bg-gray-900`}
    >
      <div
        class={`flex flex-wrap w-full text-gray-400 transition-all duration-300 ease-in-out h-screen`}
      >
        {/* Centered text content with enhanced typography */}
        <div
          class={`md:basis-2/6 min-w-0 md:w-1/3 tracking-tight p-4 transition-all duration-300 ease-in-out`}
        >
          <Header />
        </div>
      </div>
      <BaseSection>
        <AboutMeSection />
      </BaseSection>
      <Footer />
    </div>
  );
}
