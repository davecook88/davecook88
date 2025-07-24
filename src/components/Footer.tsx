import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer class="fixed left-0 right-0 bottom-0 w-full bg-transparent text-center p-4  z-20">
      <div className="w-full flex items-center justify-start gap-4 mt-auto">
        <SocialLinks />
      </div>
    </footer>
  );
};
