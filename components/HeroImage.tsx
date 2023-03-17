"use client";
import classNames from "classnames";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// get random number in between min and max
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  direction: "to right" | "to bottom";
  id: string;
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((lines) => lines.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to bottom" : "to right",
            duration: getRandomNumber(2000, 4000),
            size: getRandomNumber(10, 30),
            id: Math.random().toString(),
          },
        ]);
        renderLine(getRandomNumber(800, 2500));
      }, timeout);
    };
    renderLine(getRandomNumber(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

  return (
    <div ref={ref} className="mt-[12.8rem] [perspective:3000px]">
      <div
        className={classNames(
          "relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01] bg-hero-gradient transition-transform [transform:rotateX(25deg)]",
          inView && "animate-image-rotate",
          "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
          inView && "before:animate-image-glow"
        )}
      >
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "absolute block bg-glow-lines",
                line.direction === "to bottom" &&
                  "top-0 right-0 h-[calc(var(--size)*1rem)] w-[1px] animate-glow-line-vertical",
                line.direction === "to right" &&
                  "top-0 left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal"
              )}
            />
          ))}
        </div>
        <svg
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView ? "[&_path]:animate-sketch-lines" : ""
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
        <img
          className={classNames(
            "relative z-10 opacity-0 transition-opacity delay-[680ms]",
            inView ? "opacity-100" : "opacity-0"
          )}
          src="/images/hero.webp"
          alt="hero"
        />
      </div>
    </div>
  );
};
