import { useEffect, useState } from "preact/hooks";

export const Params = {
  PAGE: "p",
  HOME_VIEW: "v",
} as const;

export type Params = (typeof Params)[keyof typeof Params];

export const getParamFromUrl = (param: Params): string | null => {
  if (typeof window === "undefined") {
    return null; // Return null if not in a browser environment
  }
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) ?? null;
};

export function useParamFromUrl(param: Params): string | null {
  const [value, setValue] = useState<string | null>(() => getParamFromUrl(param));

  useEffect(() => {
    // Update the value when the hook is first called
    setValue(getParamFromUrl(param));

    // Define the event handler
    const handleUrlChange = () => {
      setValue(getParamFromUrl(param));
    };

    // Add event listeners for URL changes
    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("urlchange", handleUrlChange);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("urlchange", handleUrlChange);
    };
  }, [param]);

  return value;
}

export function setParamInUrl(param: string, value: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(param, value);
  window.history.pushState({}, "", url.toString());
  
  // Dispatch a custom event to notify hooks of the URL change
  window.dispatchEvent(new CustomEvent("urlchange"));
}
