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
