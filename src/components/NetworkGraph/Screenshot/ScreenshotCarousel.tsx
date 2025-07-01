import React, { useState } from "react";
import FullPageScreenshot from "./FullPageScreenshot";

interface Screenshot {
  src: string;
  alt?: string;
  description?: string;
}

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  screenshots,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Active screenshot */}
      <div className="w-full flex flex-col items-center">
        <FullPageScreenshot
          key={activeIndex}
          {...screenshots[activeIndex]}
          active={true}
        />
        <div className="flex gap-2 mt-4">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                idx === activeIndex
                  ? "bg-blue-500 border-blue-500 scale-125 shadow-lg"
                  : "bg-gray-300 border-gray-400 hover:bg-blue-300"
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to screenshot ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Inactive screenshots below, with a cool stacked effect */}
      <div className="w-full flex flex-col items-center gap-4">
        {screenshots.map((shot, idx) =>
          idx !== activeIndex ? (
            <div
              key={idx}
              className="w-3/4 opacity-70 hover:opacity-100 transition-all duration-200 scale-95 hover:scale-100 blur-[1px] hover:blur-0 cursor-pointer relative z-0"
              style={{
                marginTop: -32,
                filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.15))",
              }}
              onClick={() => setActiveIndex(idx)}
            >
              <FullPageScreenshot {...shot} active={false} />
              <div className="absolute inset-0 rounded-lg border-2 border-blue-300 opacity-0 hover:opacity-60 transition" />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
