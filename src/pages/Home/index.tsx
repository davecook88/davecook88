import { SocialLinks } from "#/components/SocialLinks";
import { useEffect, useState } from "preact/hooks";
import { useParamFromUrl, Params } from "#/utils/url";
import { Views } from "./HomeContent/constants";
import { Header } from "#/components/Header";
import { BaseSection } from "./Sections/base";
import { Footer } from "#/components/Footer";
import { AboutMeSection } from "./Sections/AboutMe";
import { EditorLayout } from "#/components/EditorLayout";

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
    <div class={`w-full min-h-screen bg-gray-900`}>
      <EditorLayout
        leftPanel={<Header />}
        rightPanel={
          <BaseSection>
            <AboutMeSection />
          </BaseSection>
        }
      />
    </div>
  );
}
