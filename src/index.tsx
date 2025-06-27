import { LocationProvider, hydrate, prerender as ssr } from "preact-iso";
import { useState, useEffect, lazy, Suspense } from "preact/compat";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import "./style.css";

// Lazy load components
const AboutMe = lazy(() =>
  import("./pages/AboutMe/index.jsx").then((m) => ({ default: m.AboutMe }))
);
const NotFound = lazy(() =>
  import("./pages/_404.jsx").then((m) => ({ default: m.NotFound }))
);

// Set router base depending on environment
const routerBase = import.meta.env.PROD ? "/davecook88/" : "/";

function PageRouter() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Function to read URL parameters
    const getPageFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("p");
      return page || "home";
    };

    // Set initial page
    setCurrentPage(getPageFromUrl());

    // Listen for URL changes (back/forward buttons)
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "about-me":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutMe />
          </Suspense>
        );
      case "404":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        );
      case "home":
      default:
        return <Home />;
    }
  };

  return renderPage();
}

export function App() {
  return (
    <LocationProvider scope={routerBase}>
      <Header />
      <main class={"container mx-auto p-4"}>
        <PageRouter />
      </main>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
