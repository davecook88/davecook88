import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";

// Set router base depending on environment
const routerBase = import.meta.env.PROD ? "/davecook88/" : "/";

export function App() {
  return (
    <LocationProvider scope={routerBase}>
      <Header />
      <main class={"container mx-auto p-4"}>
        <Router>
          <Route default component={Home} />
          <Route path="/404" component={NotFound} />
        </Router>
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
