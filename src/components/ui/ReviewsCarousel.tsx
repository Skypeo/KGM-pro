"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const FRAME_OFFSET = -30;
const FRAMES_VISIBLE_LENGTH = 3;

function clamp(val: number, [min, max]: [number, number]): number {
  return Math.min(Math.max(val, min), max);
}

export interface Review {
  author: string;
  body: string;
  id: string | number;
  title: string;
}

interface ReviewCardProps {
  activeIndex: number;
  index: number;
  review: Review;
  totalCards: number;
}

function ReviewCard({
  review,
  index,
  activeIndex,
  totalCards,
}: ReviewCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const offsetIndex = index - activeIndex;

  // Same logic as time-machine
  const blur = activeIndex > index ? 2 : 0;
  const opacity = activeIndex > index ? 0 : 1;
  const scale = shouldReduceMotion
    ? 1
    : clamp(1 - offsetIndex * 0.08, [0.08, 2]);
  const y = shouldReduceMotion
    ? 0
    : clamp(offsetIndex * FRAME_OFFSET, [
        FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
        Number.POSITIVE_INFINITY,
      ]);

  const isActive = index === activeIndex;

  return (
    <motion.figure
      animate={{
        y,
        scale,
        transition: {
          type: "spring" as const,
          stiffness: 250,
          damping: 20,
          mass: 0.5,
          duration: 0.25,
        },
      }}
      className={cn(
        "absolute left-1/2 w-[calc(100%-2rem)] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-foreground/10 bg-background/95 p-4 shadow-lg backdrop-blur-md sm:p-6"
      )}
      initial={false}
      style={{
        borderWidth: 1 / scale,
        willChange: "opacity, filter, transform",
        filter: `blur(${blur}px)`,
        opacity,
        transitionProperty: "opacity, filter",
        transitionDuration: shouldReduceMotion ? "0ms" : "250ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: totalCards - index,
        pointerEvents: isActive ? "auto" : "none",
        top: "50%", // Centrar verticalmente
      }}
    >
      {/* Étoiles Google 5/5 */}
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" fill="#F5A623" className="h-3.5 w-3.5">
            <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="relative">
        <div className="absolute -top-1 -left-2 text-4xl text-foreground/10 leading-none">
          "
        </div>
        <p className="relative text-foreground/80 text-sm leading-relaxed">
          {review.body}
        </p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-foreground/10 border-t pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-medium tracking-wide text-white">
          {review.author
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-foreground text-xs">
            {review.author}
          </span>
          <span className="text-foreground/50 text-xs">{review.title}</span>
        </div>
        <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 shrink-0" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.12A6.6 6.6 0 0 1 5.5 12c0-.74.13-1.45.34-2.12V7.04H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.96l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
        </svg>
      </figcaption>
    </motion.figure>
  );
}

interface NavigationButtonProps {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}

function NavigationButton({
  direction,
  onClick,
  disabled,
}: NavigationButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      aria-label={direction === "prev" ? "Précédent" : "Suivant"}
      className={cn(
        "group relative z-0 flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur-sm transition-all duration-200",
        disabled
          ? "cursor-not-allowed opacity-30"
          : "cursor-pointer hover:border-foreground/30 hover:bg-background hover:shadow-lg"
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <Icon
        className={cn(
          "h-4 w-4 text-foreground/60 transition-colors",
          "group-hover:text-foreground group-disabled:text-foreground/20"
        )}
      />
    </button>
  );
}

export interface ReviewsCarouselProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  excludeIds?: (string | number)[];
  height?: string;
  reviews: Review[];
  showIndicators?: boolean;
  showNavigation?: boolean;
}

export default function ReviewsCarousel({
  reviews,
  className = "",
  height = "300px",
  excludeIds = [],
  showIndicators = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: ReviewsCarouselProps) {
  // Filter out excluded reviews - use Set for O(1) lookups
  const filteredReviews = useMemo(() => {
    if (excludeIds.length === 0) {
      return reviews;
    }

    const excludeSet = new Set(excludeIds);
    const reviewsLength = reviews.length;
    const results: typeof reviews = [];

    // Use for loop for better performance
    for (let i = 0; i < reviewsLength; i++) {
      const review = reviews[i];
      if (!excludeSet.has(review.id)) {
        results.push(review);
      }
    }

    return results;
  }, [reviews, excludeIds]);

  const maxIndex = filteredReviews.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || maxIndex < 0) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, maxIndex]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        setActiveIndex((i) => clamp(i - 1, [0, maxIndex]));
      } else if (event.key === "ArrowRight") {
        setActiveIndex((i) => clamp(i + 1, [0, maxIndex]));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [maxIndex]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex <= maxIndex ? newIndex : prevIndex;
    });
  };

  if (filteredReviews.length === 0) {
    return null;
  }

  return (
    <div
      className={cn("relative mx-auto w-full max-w-4xl", className)}
      style={{ height }}
    >
      {/* Stack of cards - using grid-stack pattern */}
      <div className="relative h-full w-full py-8">
        <div className="grid h-full w-full place-items-center">
          {filteredReviews.map((review: Review, index: number) => (
            <ReviewCard
              activeIndex={activeIndex}
              index={index}
              key={review.id}
              review={review}
              totalCards={filteredReviews.length}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {(showNavigation || showIndicators) && (
        <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
          {showNavigation && (
            <NavigationButton
              direction="prev"
              disabled={activeIndex <= 0}
              onClick={goToPrevious}
            />
          )}
          {showIndicators && (
            <div className="flex items-center gap-2">
              {filteredReviews.map((review: Review, index: number) => (
                <button
                  aria-label={`Aller au témoignage ${index + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-200",
                    index === activeIndex
                      ? "w-8 bg-brand"
                      : "w-2 bg-brand/30 hover:bg-brand/50"
                  )}
                  key={review.id}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  type="button"
                />
              ))}
            </div>
          )}
          {showNavigation && (
            <NavigationButton
              direction="next"
              disabled={activeIndex === maxIndex}
              onClick={goToNext}
            />
          )}
        </div>
      )}
    </div>
  );
}
