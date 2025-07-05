import { useEffect, useReducer } from "preact/hooks";
import { getParamFromUrl, setParamInUrl, Params } from "#/utils/url";
import { HomeContentInitialButtons } from "./InitialButtons";
import { View, Views } from "./constants";
import { GlassHolder } from "./GlassHolder";
import { AboutMeContent } from "./AboutMe";
import { ProjectsContent } from "./Projects";
import { Resume } from "./Resume";

export const HomeContent = () => {
  // Dummy state to force re-render
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // setCurrentView updates the URL param and forces a re-render
  const setCurrentView = (view: View) => {
    setParamInUrl(Params.HOME_VIEW, view);
    forceUpdate(0); // force re-render
  };

  useEffect(() => {
    const handlePopState = () => {
      forceUpdate(0);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const currentView = getParamFromUrl(Params.HOME_VIEW) || Views.BUTTONS;

  switch (currentView) {
    case Views.BUTTONS:
      return <HomeContentInitialButtons redirect={setCurrentView} />;
    case Views.ABOUT_ME:
      return (
        <GlassHolder onBackClick={() => setCurrentView(Views.BUTTONS)}>
          <AboutMeContent />
        </GlassHolder>
      );
    case Views.PROJECTS:
      return (
        <GlassHolder onBackClick={() => setCurrentView(Views.BUTTONS)}>
          <ProjectsContent />
        </GlassHolder>
      );
    case Views.RESUME:
      return (
        <GlassHolder onBackClick={() => setCurrentView(Views.BUTTONS)}>
          <Resume />
        </GlassHolder>
      );
    case Views.CONTACT:
      return;
  }
};
