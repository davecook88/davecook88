import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
        <a href="/about-me" class={url == "/about-me" && "active"}>
          About Me
        </a>
      </nav>
    </header>
  );
}
