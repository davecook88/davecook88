import { FC, JSX } from "preact/compat";
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
    text-gray-300
      font-sans
      uppercase
      text-xl
      py-4
      px-4
      w-full
      rounded
      cursor-pointer
      hover:text-gray-200` + (props.className || "")
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
  return (
    <div className=" md:h-full flex items-center justify-center">
      <div
        className={`
        flex
        flex-col
        items-center
        justify-center
        gap-4
        p-4
        w-3/6
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
