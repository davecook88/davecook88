import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
  useLocation,
} from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";

// Set router base depending on environment
const routerBase = import.meta.env.PROD ? "/davecook88/" : "/";

function NormalizePath({ children }) {
  const { path } = useLocation();
  // Only run in browser
  if (typeof window !== "undefined") {
    // If path starts with /davecook88/ (but not just /davecook88), strip it
    if (path.startsWith("/davecook88/") && path !== "/davecook88/") {
      const newPath = path.replace(/^\/davecook88/, "");
      window.history.replaceState({}, "", newPath);
    }
  }
  return children;
}

function AppRoutes() {
  const { path } = useLocation();
  // If on /404 or /davecook88/404, show NotFound
  if (path === "/404" || path === `${routerBase}404`) {
    return <NotFound />;
  }
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route default component={NotFound} />
    </Router>
  );
}

export function App() {
  return (
    <LocationProvider scope={routerBase}>
      <NormalizePath>
        <Header />
        <main class={"container mx-auto p-4"}>
          <AppRoutes />
        </main>
      </NormalizePath>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
