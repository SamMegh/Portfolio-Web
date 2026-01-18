import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import profilephoto from "../assets/Profile_Photo.png";
export default function NeonText() {
  const lettersRef = useRef([]);
  const discriptionRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".opacityControl", {
        opacity: 1,
        delay: 0.1,
        duration: 0.2,
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
        },
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx1 = gsap.context(() => {
      gsap.fromTo(
        discriptionRef.current,
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
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.05,
        },
      );
      gsap.from(".myImg", {
        x: 500,
        duration: 1,
        opacity: 0,
      });
    });

    return () => ctx1.revert();
  }, []);

  const text = "I'm SAM";
  const discription =
    "Full-stack engineering student with expertise in React, Node.js, and cross-platform mobile development using Flutter and React Native. Skilled in creating dynamic user interfaces with GSAP animations and passionate about cybersecurity and bug hunting.";

  return (
    <div className="flex items-center pt-6 select-none">
      <div className="page1content p-10  flex flex-col sm:flex-row-reverse justify-center sm:justify-evenly gap-5 items-center">
        {/* Image container */}
        <img
          src={profilephoto}
          alt="profilephoto"
          className="myImg
          w-[50vw] sm:w-[30vw]
          rounded-full
          bg-black/10
          backdrop-blur-[4px]
          shadow-[12px_12px_18px_rgba(103,232,249,0.8)]"
        />

        {/* Text container */}
        <div className="nameContanter flex items-center gap-6 flex-col">
          {/* name of me */}
          <div id="name" className="name">
            <h1 className="opacityControl select-none text-4xl sm:text-6xl opacity-0 font-bold text-[var(--very-white)] flex gap-1 flex-wrap">
              {text.split("").map((char, i) => (
                <span
                  key={i}
                  ref={(el) => (lettersRef.current[i] = el)}
                  className="neon-glow font-['headingFont']">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>
          {/* discription */}
          <div className="myDiscription w-9/10 text-center font-['handWrittenFont'] text-2xl">
            {discription.split(" ").map((word, i) => (
              <span key={i} ref={(el) => (discriptionRef.current[i] = el)}>
                {`${word} `}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
