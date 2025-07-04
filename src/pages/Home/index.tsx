import { SocialLinks } from "#/components/NetworkGraph/SocialLinks";
import { HomeContent } from "./HomeContent";

export function Home() {
  return (
    <div class="home w-full h-max-screen">
      <div class="flex flex-wrap p-4 h-screen w-full text-gray-400">
        {/* Centered text content with enhanced typography */}
        <div class="md:basis-2/6 min-w-0 md:w-1/3 tracking-tight p-4">
          <div class="md:h-full flex items-center justify-left uppercase select-none pointer-events-none">
            <div class="text-sans text-left animate-fade-in ">
              <div class="font-mono text-2xl md:text-6xl font-bold leading-none flex gap-4 ">
                <span class="block  font-black">Dave</span>
                <span class="block  font-black">Cook</span>
              </div>
              <div class="mt-2 text-sm md:text-base  font-mono tracking-wider uppercase animate-fade-in">
                <span class="relative select-none pointer-events-none">
                  Senior Full Stack Engineer
                  <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-70"></div>
                </span>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <SocialLinks />
          </div>
        </div>

        <div class="w-full min-w-0 md:w-2/3  md:h-full">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}
