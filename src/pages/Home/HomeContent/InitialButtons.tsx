import { FC, JSX } from "preact/compat";

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

export const HomeContentInitialButtons = () => {
  return (
    <div className=" h-full flex items-center justify-center">
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
        <InitialButton>About Me</InitialButton>
        <InitialButton>My Stack</InitialButton>
        <InitialButton>Resume</InitialButton>
      </div>
    </div>
  );
};
