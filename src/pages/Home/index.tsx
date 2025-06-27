export function Home() {
  return (
    <div class="home w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-screen w-full">
        {/* Centered text content with enhanced typography */}
        <div class="relative z-10 flex items-center px-4 bg-transparent">
          <div class="text-sans text-left animate-fade-in">
            <h1 class="font-mono text-6xl md:text-6xl font-bold mb-6 leading-none flex gap-4 text-gray-200 tracking-tight">
              <span class="block text-gray-400 font-black uppercase select-none pointer-events-none tracking-tight">
                Dave
              </span>
              <span class="block text-gray-400 font-black uppercase select-none pointer-events-none tracking-tight">
                Cook
              </span>
            </h1>
            <div class="mt-8 text-sm md:text-base text-gray-400 font-mono tracking-wider uppercase animate-fade-in">
              <span class="relative select-none pointer-events-none">
                Senior Full Stack Engineer
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-70"></div>
              </span>
            </div>
          </div>
        </div>

        {/* Liquid Glass Element - positioned absolutely */}
        <div class="relative w-full h-full rounded-3xl overflow-hidden z-20  transition-transform duration-300 ease-in-out">
          {/* Background blur layer */}
          <div class="absolute inset-0 glass-effect rounded-3xl"></div>
          {/* Highlight layer*/}
          <div class="absolute inset-0 glass-highlight rounded-3xl"></div>
          {/* Content */}
          <div class="relative z-10 flex items-center justify-center h-full p-6">
            <div class="text-center text-white">
              <h2 class="text-2xl font-light mb-2">Your Content</h2>
              <p class="text-sm opacity-90">Goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
