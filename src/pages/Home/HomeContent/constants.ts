export const Views = {
  BUTTONS: "buttons",
  ABOUT_ME: "about-me",
  PROJECTS: "projects",
  RESUME: "resume",
  CONTACT: "contact",
};

export type View = (typeof Views)[keyof typeof Views];
