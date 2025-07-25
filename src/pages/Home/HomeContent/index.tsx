import { useEffect, useReducer } from "preact/hooks";
import { useParamFromUrl, setParamInUrl, Params } from "#/utils/url";
import { View, Views } from "./constants";
import { GlassHolder } from "./GlassHolder";
import { AboutMeContent } from "./AboutMe";
import { ProjectsContent } from "./Projects";
import { Resume } from "./Resume";
import { ContactContent } from "./Contact";

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

  const currentView = useParamFromUrl(Params.HOME_VIEW) || Views.BUTTONS;

  switch (currentView) {
    case Views.BUTTONS:
      // Instead of showing buttons, we'll show the JSON explorer in the header
      return <div></div>;
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
      return (
        <GlassHolder onBackClick={() => setCurrentView(Views.BUTTONS)}>
          <ContactContent />
        </GlassHolder>
      );
  }
};
