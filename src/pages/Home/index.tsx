export function Home() {
  return (
    <div class="home">
      {/* Full-screen NetworkGraph background */}

      {/* Centered text content with enhanced typography */}
      <div class="relative z-10 flex items-center justify-center min-h-screen px-4 bg-transparent">
        <div class="text-sans text-center animate-fade-in">
          <h1 class="font-mono text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none flex gap-4 justify-center text-gray-200 tracking-tight">
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
    </div>
  );
}
