import { FC, JSX } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { Views } from "./constants";

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {}
const InitialButton: FC<ButtonProps> = ({ ...props }) => (
  <button
    className={
      `
      btn
      glass-effect
      glass-highlight
      shimmer-hover
      text-gray-200
      font-sans
      font-semibold
      uppercase
      text-lg
      md:text-xl
      py-5
      px-6
      w-full
      rounded-xl
      cursor-pointer
      hover:text-white
      transition-all
      duration-300
      ease-in-out
      tracking-wide
      shadow-lg` + (props.className || "")
    }
    {...props}
  >
    {props.children}
  </button>
);

interface HomeContentInitialButtonsProps {
  redirect: (page: string) => void;
}

export const HomeContentInitialButtons: FC<HomeContentInitialButtonsProps> = ({
  redirect,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility to ensure all transitions have completed
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 350); // Slightly longer than CSS transition duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        className={`
        flex
        flex-col
        items-center
        justify-center
        gap-5
        p-6
        w-full
        md:w-2/5
        transition-all
        duration-300
        ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <InitialButton onClick={() => redirect(Views.ABOUT_ME)}>
          About Me
        </InitialButton>
        <InitialButton onClick={() => redirect(Views.PROJECTS)}>
          Projects
        </InitialButton>
        <InitialButton onClick={() => redirect(Views.RESUME)}>
          Resume
        </InitialButton>
        <InitialButton onClick={() => redirect(Views.CONTACT)}>
          Contact
        </InitialButton>
      </div>
    </div>
  );
};
