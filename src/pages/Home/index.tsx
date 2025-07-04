import { HomeContent } from "./HomeContent";

export function Home() {
  return (
    <div class="home w-full h-max-screen">
      <div class="flex flex-wrap p-4 h-screen w-full">
        {/* Centered text content with enhanced typography */}
        <div class="md:basis-2/6 min-w-0 md:w-1/3 ">
          <div class="md:h-full flex items-center justify-left p-4">
            <div class="text-sans text-left animate-fade-in">
              <div class="font-mono text-2xl md:text-6xl font-bold leading-none flex gap-4 text-gray-200 tracking-tight">
                <span class="block text-gray-400 font-black uppercase select-none pointer-events-none tracking-tight">
                  Dave
                </span>
                <span class="block text-gray-400 font-black uppercase select-none pointer-events-none tracking-tight">
                  Cook
                </span>
              </div>
              <div class="mt-2 text-sm md:text-base text-gray-400 font-mono tracking-wider uppercase animate-fade-in">
                <span class="relative select-none pointer-events-none">
                  Senior Full Stack Engineer
                  <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-70"></div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full min-w-0 md:w-2/3  md:h-full">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}
