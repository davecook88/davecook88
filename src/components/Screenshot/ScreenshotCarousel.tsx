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

  // Deck of cards stacking logic
  const total = screenshots.length;
  const cardWidth = 380; // px, for transform calculations
  const overlap = 75; // px, how much each card overlaps the previous

  return (
    <div
      className="w-full flex flex-col items-center gap-8 relative"
      style={{ minHeight: 240 }}
    >
      {/* Deck of cards */}
      <div className="relative flex items-center justify-center w-full">
        {/* Sizer element to make container respect screenshot height */}
        {screenshots.length > 0 && (
          <div
            className="opacity-0"
            style={{
              width: cardWidth,
              maxWidth: "90vw",
            }}
            aria-hidden="true"
          >
            <FullPageScreenshot {...screenshots[activeIndex]} active />
          </div>
        )}
        {screenshots.map((shot, idx) => {
          // Calculate stacking order and transform
          const isActive = idx === activeIndex;
          const isLeft = idx < activeIndex;
          const isRight = idx > activeIndex;
          // Stack order: active is highest, then right, then left
          let z = isActive ? 30 : isRight ? 20 + (total - idx) : 10 + idx;
          // Offset for stacking
          let translateX = 0;
          let scale = 1;
          let blur = "";
          let opacity = 1;
          let boxShadow = "0 8px 32px rgba(0,0,0,0.18)";
          if (isLeft) {
            translateX = -1 * (activeIndex - idx) * overlap;
            scale = 0.92 + 0.02 * idx;
            blur = "blur-[2px]";
            opacity = 0.7;
            boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
          } else if (isRight) {
            translateX = (idx - activeIndex) * overlap;
            scale = 0.92 + 0.02 * (total - idx);
            blur = "blur-[2px]";
            opacity = 0.7;
            boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
          }
          return (
            <div
              key={idx}
              className={`absolute left-1/2 top-0 transition-all duration-300 ease-in-out w-full md:w-4/6 ${blur}`}
              style={{
                zIndex: z,
                transform: `translateX(-50%) translateX(${translateX}px) scale(${scale})`,
                opacity,
                cursor: isActive ? "default" : "pointer",
                boxShadow,
                pointerEvents: isActive ? "auto" : "auto",
                // width: cardWidth,
                maxWidth: "90vw",
              }}
              onClick={() => !isActive && setActiveIndex(idx)}
              tabIndex={isActive ? -1 : 0}
              aria-label={
                isActive
                  ? `Active screenshot ${idx + 1}`
                  : `Go to screenshot ${idx + 1}`
              }
            >
              <FullPageScreenshot {...shot} active={isActive} />
              {/* Overlay for hover effect on inactive cards */}
              {!isActive && (
                <div className="absolute inset-0 rounded-lg border-2 border-blue-300 opacity-0 hover:opacity-60 transition" />
              )}
            </div>
          );
        })}
      </div>
      {/* Dots navigation */}
      <div className="flex gap-2 ">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
              idx === activeIndex
                ? "bg-accent-500 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-blue-300"
            }`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to screenshot ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
