"use client";

import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  maxWidth?: "md" | "2xl" | "4xl";
}

const maxWidthClasses = {
  md: "max-w-md",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
};

// Generic accessible modal. The legacy site built one of these by hand for
// the therapist bio and again for parking info, both initially shipped
// permanently hidden with no state wired up at all. One primitive instead.
export default function Modal({ isOpen, onClose, title, children, maxWidth = "2xl" }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          ref={dialogRef}
          tabIndex={-1}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className={`bg-background rounded-xl w-full ${maxWidthClasses[maxWidth]} max-h-[90vh] overflow-y-auto outline-none`}
        >
          <div className="sticky top-0 bg-background border-b border-primary-100 p-6 flex justify-between items-center">
            <h2 id="modal-title" className="text-2xl font-playfair font-bold text-primary">
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 text-text-secondary hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
