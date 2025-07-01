import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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

/**
 * PortalModal renders its children in a React portal attached to document.body
 */
const PortalModal: React.FC<{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ open, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;
  return createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      {children}
    </div>,
    document.body
  );
};

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

      {/* Modal for large screenshot using PortalModal */}
      <PortalModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div
          className="rounded-lg shadow-xl max-h-[90vh] max-w-4xl w-full overflow-y-auto p-4 relative glass-effect flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold w-full flex justify-end z-20">
            <button
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          {description && (
            <div className="my-4 text-gray-400 text-base border-b pb-3 bg-black z-10 top-0">
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
      </PortalModal>
    </>
  );
};

export default FullPageScreenshot;
