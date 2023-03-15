"use client";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  console.log({ inView });
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
