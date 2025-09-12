import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function WelcomeComponent() {
  const flyingLettersRef = useRef([]);
  const targetLettersRef = useRef([]);
  const [width, setWidth] = useState(window.innerWidth);
  const allLetters =
    `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/${import.meta.env.VITE_WELCOME_PAGE_SAM_CREATION}`.split(
      ""
    );
  const repeatedLetters = Array(3).fill(allLetters).flat();

  useLayoutEffect(() => {
    const flyingEls = flyingLettersRef.current;
    const targetEls = targetLettersRef.current;
    setWidth(window.innerWidth);
    // reset
    targetEls.forEach((t) => (t.used = false));

    // Step 1: start at center
    gsap.set(flyingEls, {
      opacity: 0,
      x: gsap.utils.random(-(width - 100), width),
      y: gsap.utils.random(-200, 200),
      duration: 0.5,
      scale: 0.3,
    });

    // Step 2: Blast outward
    gsap.to(flyingEls, {
      opacity: 1,
      scale: 1,
      rotation: () => gsap.utils.random(-360, 360),
      x: () => gsap.utils.random(-width, width),
      y: () => gsap.utils.random(-350, 350),
      duration: 0.6,
      ease: "power3.out",
      stagger: { each: 0.01, from: "center" },
      onComplete: () => {
        // Step 3: build lookup for target letters
        const availableTargets = {};
        targetEls.forEach((targetEl) => {
          if (!targetEl) return;
          const letter = targetEl.innerText;
          if (!availableTargets[letter]) {
            availableTargets[letter] = [];
          }
          availableTargets[letter].push(targetEl);
        });

        // Step 4: Reassemble into name / drop others
        flyingEls.forEach((el) => {
          if (!el) return;
          const letter = el.innerText;

          if (availableTargets[letter] && availableTargets[letter].length > 0) {
            const targetEl = availableTargets[letter].shift();

            const rect = targetEl.getBoundingClientRect();
            const tx = rect.left + rect.width / 2 - window.innerWidth / 2;
            const ty = rect.top + rect.height / 2 - window.innerHeight / 2;

            gsap.to(el, {
              x: tx,
              y: ty,
              rotation: 0,
              scale: 1.3,
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
              onComplete: () => {
                // Neon glow effect
                el.classList.add("neon-glow");
                gsap.to(el, {
                  duration: 1.2,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                });
              },
            });
          }
          else {
            // Drop unused letters
            gsap.to(el, {
              y: window.innerHeight + 200,
              opacity: 0,
              rotation: gsap.utils.random(-180, 180),
              duration: gsap.utils.random(0.4, 0.6),
              ease: "power1.in",
              delay: gsap.utils.random(0.2, 0.6),
            });
          }
        });
      },
    });
    gsap.to(".mainBlock", {
      y: -11,
      duration: 0.2,
    });
  }, [width]);

  const displayText = import.meta.env.VITE_WELCOME_PAGE_SAM_CREATION;

  return (
    <div className="relative mainBlock h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Hidden name target */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none select-none">
        <div className="flex flex-col items-center space-y-1">
          {displayText.split(" ").map((word, wIndex) => (
            <h1
              key={wIndex}
              className="flex justify-center text-[6.5vw] font-extrabold tracking-widest"
            >
              {word.split("").map((letter, i) => (
                <span
                  key={i + wIndex * 50}
                  ref={(el) => (targetLettersRef.current[i + wIndex * 50] = el)}
                  className="inline-block px-[4px]"
                >
                  {letter}
                </span>
              ))}
            </h1>
          ))}
        </div>
      </div>

      {/* Flying letters */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {repeatedLetters.map((letter, i) => (
          <span
            key={i}
            ref={(el) => (flyingLettersRef.current[i] = el)}
            className="absolute text-white text-[5vw] font-bold"
            style={{
              textShadow: "0 0 10px #BDC3C7, 0 0 20px #BDC3C7",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
