import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NeonText() {
  const lettersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".opacityControl",{
        opacity:1,
        display:0.1,
        duration:0.2
      });
      gsap.fromTo(
        lettersRef.current,
        {
          opacity: 0,
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
          scale: 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const text = "I'm SAM";

  return (
    <div className="flex items-center justify-center h-screen ">
      <h1 className="opacityControl text-4xl sm:text-6xl opacity-0 font-bold text-[var(--very-white)] flex gap-1 flex-wrap">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="neon-glow"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
