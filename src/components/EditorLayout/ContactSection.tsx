import { useState } from "preact/hooks";
import { MenuSection } from "./MenuSection";
import { LinkedInLogo } from "#/components/Logos/linked-in";
import { GithubLogo } from "#/components/Logos/github";
import { EmailLogo } from "../Logos/email";

export const ContactSection = () => {
  return (
    <MenuSection title="Contact">
      <div className="p-2 flex flex-col space-y-2 text-sm">
        {/* GitHub */}
        <a
          href="https://github.com/davecook88"
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo />
          <span>github</span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/david-cook-a1549ba2/"
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogo />
          <span>linkedin</span>
        </a>
        {/* Email */}
        <a
          href="mailto:dave@mamalon.dev"
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailLogo />
          <span>email</span>
        </a>
      </div>
    </MenuSection>
  );
};
