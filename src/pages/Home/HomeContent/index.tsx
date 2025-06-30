import { useEffect, useState } from "preact/hooks";
import { getParamFromUrl, Params } from "#/utils/url";
import { HomeContentInitialButtons } from "./InitialButtons";

const Views = {
  BUTTONS: "buttons",
};

type View = (typeof Views)[keyof typeof Views];

export const HomeContent = () => {
  const [currentView, setCurrentView] = useState<View>(Views.BUTTONS);

  useEffect(() => {
    // Set initial page
    setCurrentView(getParamFromUrl(Params.HOME_VIEW) || Views.BUTTONS);

    // Listen for URL changes (back/forward buttons)
    const handlePopState = () => {
      setCurrentView(getParamFromUrl(Params.HOME_VIEW) || Views.BUTTONS);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  switch (currentView) {
    case Views.BUTTONS:
      return <HomeContentInitialButtons />;
  }
};
