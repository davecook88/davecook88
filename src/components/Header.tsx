import { useState, useEffect } from "preact/hooks";

export function Header() {
  const [currentPage, setCurrentPage] = useState("home");

  // Get the base path for GitHub Pages
  const basePath = import.meta.env.PROD ? "/davecook88" : "";

  useEffect(() => {
    // Function to read URL parameters
    const getPageFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const page = urlParams.get("p");
      return page || "home";
    };

    // Set initial page
    setCurrentPage(getPageFromUrl());

    // Listen for URL changes
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigation = (page: string, event: Event) => {
    event.preventDefault();

    const url = page === "home" ? `${basePath}/` : `${basePath}/?p=${page}`;

    // Update URL without page reload
    window.history.pushState({}, "", url);

    // Update current page state
    setCurrentPage(page);

    // Dispatch custom event to notify PageRouter
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <header>
      <nav class="font-mono text-gray-400 glass-effect uppercase">
        <a
          href={`${basePath}/`}
          class={currentPage === "home" ? "active" : ""}
          onClick={(e) => handleNavigation("home", e)}
        >
          Home
        </a>
        <a
          href={`${basePath}/?p=404`}
          class={currentPage === "404" ? "active" : ""}
          onClick={(e) => handleNavigation("404", e)}
        >
          404
        </a>
        <a
          href={`${basePath}/?p=about-me`}
          class={currentPage === "about-me" ? "active" : ""}
          onClick={(e) => handleNavigation("about-me", e)}
        >
          About Me
        </a>
      </nav>
    </header>
  );
}
