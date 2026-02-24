import React, { useRef, useMemo } from "react";
import { useStoryAnimation } from "../../components/animation";
import { STORY_TEXT } from "./data";

function StorySection() {
  const storyRef = useRef(null);
  const charRefs = useRef([]);

  const storyChars = useMemo(() => STORY_TEXT.split(""), []);

  useStoryAnimation({ storyRef, charRefs }, storyChars);

  return (
    <section ref={storyRef} className="relative h-fit w-full">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/[0.05] blur-[140px]" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-violet-600/[0.05] blur-[120px]" />
      </div>

      <div className="sticky top-0 mb-30 flex items-center justify-center px-6 md:px-16">
        <div className="relative z-10 max-w-4xl">
          {/* blinking cursor styled label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-violet-400/70 font-mono">
              loading_philosophy.txt
            </span>
          </div>

          <p
            className="text-[clamp(1.2rem,2.8vw,2rem)] leading-[1.9] text-white/90"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", letterSpacing: "0.02em" }}
          >
            {storyChars.map((char, i) => (
              <span
                key={i}
                ref={(el) => (charRefs.current[i] = el)}
                className="inline-block"
                style={{ opacity: 0, minWidth: char === " " ? "0.35em" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
