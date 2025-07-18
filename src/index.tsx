import { LocationProvider, hydrate, prerender as ssr } from "preact-iso";
import { useState, useEffect, lazy, Suspense } from "preact/compat";

import { Home } from "./pages/Home/index.jsx";
import "./style.css";
import NetworkGraph from "./components/NetworkGraph/index.js";
import { Footer } from "./components/Footer.js";
import { getParamFromUrl, Params } from "./utils/url.js";

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
    // Set initial page
    setCurrentPage(getParamFromUrl(Params.PAGE) || "home");

    // Listen for URL changes (back/forward buttons)
    const handlePopState = () => {
      setCurrentPage(getParamFromUrl(Params.PAGE) || "home");
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
      <div class="fixed inset-0 max-h-dvh pointer-events-none z-[-1]">
        <NetworkGraph
          nodeCount={60}
          maxConnections={5}
          connectionDistance={140}
          nodeSpeed={0.001}
          nodeSize={4}
          connectionOpacity={0.8}
          nodeOpacity={0.9}
          mouseRadius={1}
          energyParticleCount={25}
          growthRate={0.0008}
          maxNodes={20}
          colors={{
            nodes: "#ffffff",
            connections: "#ffffff",
            highlight: "#ffffff",
            energy: "#0891b2",
            clusters: [
              "#64748b", // primary-500
              "#475569", // primary-600
              "#334155", // primary-700
              "#1e293b", // primary-800
              "#06b6d4", // accent-500
              "#0891b2", // accent-600
            ],
          }}
        />
      </div>
      <main class="container-lg mx-auto z-10 pointer-events-auto">
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
