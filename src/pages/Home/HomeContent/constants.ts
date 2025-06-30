export const Views = {
  BUTTONS: "buttons",
  ABOUT_ME: "about-me",
};

export type View = (typeof Views)[keyof typeof Views];
