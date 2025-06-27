import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  // Get the base path for GitHub Pages
  const basePath = import.meta.env.PROD ? "/davecook88" : "";

  return (
    <header>
      <nav>
        <a href={`${basePath}/`} class={url == "/" && "active"}>
          Home
        </a>
        <a href={`${basePath}/404`} class={url == "/404" && "active"}>
          404
        </a>
        <a href={`${basePath}/about-me`} class={url == "/about-me" && "active"}>
          About Me
        </a>
      </nav>
    </header>
  );
}
