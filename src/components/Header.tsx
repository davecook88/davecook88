import { FC, useEffect } from "preact/compat";
import { useParamFromUrl, Params } from "#/utils/url";
import { Views } from "#/pages/Home/HomeContent/constants";
import { SocialLinks } from "./SocialLinks";
import { useRef, useState } from "preact/hooks";

interface HeaderProps {
  className?: string;
}

const getScrollPercentage = (event: Event) => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  // percentage of screenheight scrolled
  const screenHeight = window.innerHeight;
  const scrolledPercentage = (scrollTop / screenHeight) * 100;
  console.log("Scroll position:", scrollTop);
  console.log("Scrolled percentage:", scrolledPercentage);
  return scrolledPercentage;
};

const MAX_FONT_SIZE = 50; // Maximum font size in pixels
const MIN_FONT_SIZE = 20; // Minimum font size in pixels

// Debounce utility (leading edge: run immediately, then wait)
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeout: number | undefined;
  let canRun = true;
  return (...args: Parameters<T>) => {
    if (canRun) {
      fn(...args);
      canRun = false;
      timeout = window.setTimeout(() => {
        canRun = true;
      }, delay);
    }
  };
}

export const Header: FC<HeaderProps> = ({ className = "" }) => {
  const currentView = useParamFromUrl(Params.HOME_VIEW) || Views.BUTTONS;

  const [isSticky, setIsSticky] = useState(false);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateFontSize = (event: Event) => {
      const scrolledPercentage = getScrollPercentage(event);
      const headerElement = document.querySelector("#header-name");
      if (headerElement && headerElement instanceof HTMLElement) {
        const newFontSize = Math.max(
          MIN_FONT_SIZE,
          Math.min(
            MAX_FONT_SIZE,
            (1 - scrolledPercentage / 100) * MAX_FONT_SIZE
          )
        );
        headerElement.style.setProperty("font-size", `${newFontSize}px`);
      }
      const headerNameContainer =
        document.querySelectorAll(".header-name-other");
      if (headerNameContainer) {
        headerNameContainer.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.setProperty(
              "opacity",
              `${0.5 - scrolledPercentage / 100}`
            );
          }
        });
      }

      // Sticky logic
      const rect = nameRef.current?.getBoundingClientRect();
      if (rect) {
        console.log("Header rect:", rect.top);
        if (rect.top <= 0 && !isSticky) {
          console.log("Header is sticky now");
          setIsSticky(true);
        } else if (rect.top > 0 && isSticky) {
          console.log("Header is no longer sticky");
          setIsSticky(false);
        }
      }
    };
    const debouncedUpdateFontSize = debounce(updateFontSize, 50);

    window.addEventListener("scroll", debouncedUpdateFontSize);
    return () => {
      window.removeEventListener("scroll", debouncedUpdateFontSize);
    };
  }, [isSticky]);

  return (
    <div
      className={
        "w-max font-sans flex items-center transition-all duration-300 ease-in-out h-full"
      }
    >
      <div className="flex flex-col h-full text-white text-2xl font-mono">
        <div
          style={{
            opacity: 1,
          }}
          className={`text-sans text-left animate-fade-in flex-grow w-full flex flex-col justify-center tracking-tighter transition-opacity duration-300`}
        >
          <span className="header-name-other">My name is</span>

          <span
            ref={nameRef}
            id="header-name"
            style={{
              fontSize: "50px",
              opacity: isSticky ? 0 : 1,
              transition: "font-size 0.3s cubic-bezier(0.4,0,0.2,1)",
              top: isSticky ? 0 : undefined,
              left: isSticky ? 0 : undefined,
              width: isSticky ? "100vw" : undefined,
              zIndex: isSticky ? 1000 : undefined,
              padding: isSticky ? "0.5rem 1rem" : undefined,
              textAlign: isSticky ? "left" : undefined,
              boxShadow: isSticky ? "0 2px 8px 0 rgba(0,0,0,0.08)" : undefined,
            }}
            className={`font-bold font-sans text-accent-500 tracking-tighter uppercase transition-all duration-300`}
          >
            Dave Cook
          </span>
          <span className="header-name-other">
            and I'm a full-stack developer
          </span>
        </div>
        {/* Sticky header (only visible when sticky) */}

        <div
          id="header-name-sticky"
          className={`font-bold font-sans text-accent-500 tracking-tighter uppercase w-full transition-all duration-300 fixed top-0 ${
            isSticky ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Dave Cook
        </div>
      </div>
    </div>
  );
};
