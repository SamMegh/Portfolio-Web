import React, { useRef } from "react";
import { useHeroAnimation } from "../../components/animation";

function HeroSection() {
  const heroTagRef = useRef(null);
  const heroH1Ref = useRef(null);
  const heroSubRef = useRef(null);
  const heroLineRef = useRef(null);

  useHeroAnimation({
    tagRef: heroTagRef,
    h1Ref: heroH1Ref,
    subRef: heroSubRef,
    lineRef: heroLineRef,
  });

  return (
    <section className="relative flex flex-col items-center justify-center h-fit w-full px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/[0.07] blur-[160px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <span
          ref={heroTagRef}
          className="inline-block mb-6 px-5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400"
        >
          About &mdash; Philosophy
        </span>

        <h1
          ref={heroH1Ref}
          className="text-[clamp(2.8rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight text-white"
        >
          The{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Blueprint
          </span>
        </h1>

        <p
          ref={heroSubRef}
          className="mt-7 text-lg md:text-xl text-gray-500 tracking-wide"
        >
          Designed with discipline &bull; Delivered with precision
        </p>

        <div
          ref={heroLineRef}
          className="mx-auto mt-10 h-px w-48 origin-center bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"
        />
      </div>
    </section>
  );
}

export default HeroSection;
