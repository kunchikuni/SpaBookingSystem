"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface HeroSlideshowProps {
  images: string[];
  intervalMs?: number;
}

// Smooth crossfade slideshow for the home hero. Auto-advances, pauses on
// hover, and offers manual prev/next + dot navigation. Crossfade (opacity
// transition between two always-mounted layers) rather than a slide/swipe
// effect -- reads calmer, which fits the rest of the site's tone better
// than a snappier carousel motion would.
export default function HeroSlideshow({ images, intervalMs = 6000 }: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, images.length, intervalMs]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="focus-ring absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="focus-ring absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className={`focus-ring w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
