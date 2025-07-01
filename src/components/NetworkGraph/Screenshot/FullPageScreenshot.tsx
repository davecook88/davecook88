import React, { useEffect, useRef, useState } from "react";

interface FullPageScreenshotProps {
  /**
   * The URL or import of the screenshot image
   */
  src: string;
  /**
   * Optional alt text for the image
   */
  alt?: string;
  /**
   * Optional description to show in the modal
   */
  description?: string;
}

const FullPageScreenshot: React.FC<FullPageScreenshotProps> = ({
  src,
  alt = "Full page screenshot",
  description,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(true);

  // Gradually scroll down the image
  useEffect(() => {
    if (!scrolling || modalOpen) return;
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    const scrollStep = () => {
      if (!el) return;
      if (el.scrollTop + el.clientHeight < el.scrollHeight) {
        el.scrollTop += 1; // Adjust speed here
        frame = requestAnimationFrame(scrollStep);
      }
    };
    frame = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(frame);
  }, [scrolling, modalOpen]);

  // Pause scrolling on hover
  const handleMouseEnter = () => setScrolling(false);
  const handleMouseLeave = () => setScrolling(true);

  return (
    <>
      {/* Screenshot preview with gradual scroll */}
      <div
        ref={scrollRef}
        className="relative w-full max-w-md h-36 overflow-y-scroll rounded-lg shadow-lg border border-gray-200 cursor-pointer transition hover:scale-105"
        onClick={() => setModalOpen(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title="Click to enlarge"
        style={{ scrollBehavior: "smooth" }}
      >
        <img src={src} alt={alt} className="w-full" draggable={false} />
        <div className="sticky bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded w-max">
          Click to enlarge
        </div>
      </div>

      {/* Modal for large screenshot */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="rounded-lg shadow-xl max-h-[90vh] max-w-4xl w-full overflow-y-auto p-4 relative bg-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            {description && (
              <div className="mb-4 text-gray-700 text-base border-b pb-3 bg-white z-10 sticky top-0">
                {description}
              </div>
            )}
            <img
              src={src}
              alt={alt}
              className="w-full h-auto"
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FullPageScreenshot;
