"use client";

import { ReactNode, useState } from "react";

interface AccordionItemData {
  id: string;
  question: ReactNode;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string | null;
  allowMultiple?: boolean;
}

// Generic accordion. The legacy site hand-built this three separate times
// (contact page FAQ, service detail FAQ, service detail tabs) — every copy
// was a permanently-hidden div with a button that had no onClick at all.
export default function Accordion({ items, defaultOpenId = null, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : []),
  );

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set<string>();
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div className="card" key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="w-full text-left flex justify-between items-center bg-transparent border-none p-0 focus-ring"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-playfair font-semibold text-primary">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="mt-4 pt-4 border-t border-primary-100 text-text-secondary leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
