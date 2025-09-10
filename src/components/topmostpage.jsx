import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import profilephoto from "../assets/Profile_Photo.png";
export default function NeonText() {
  const lettersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".opacityControl", {
        opacity: 1,
        display: 0.1,
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
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const text = "I'm SAM";

  return (
    <div className="flex items-center h-screen ">
      <div className="page1content sm:p-10 h-screen flex flex-col sm:flex-row-reverse justify-center sm:justify-evenly gap-5 items-center">
        {/* Image container */}
        <div className="myImg flex-1 flex justify-center items-center overflow-hidden">
          <img className="w-[50vw] sm:w-[30vw] rounded-full bg-[rgba(0,0,0,0.1)] border border-white/10 backdrop-blur-[4px]" src={profilephoto} alt="" />
        </div>

        {/* Text container */}
        <div className="nameContanter flex-1 flex items-center gap-6 flex-col">
          <div className="name">
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
          <div className="myDiscription text-2xl">
            <p>
              Full-stack engineering student with expertise in React, Node.js, and cross-platform mobile development using Flutter and React Native. Skilled in creating dynamic user interfaces with GSAP animations and passionate about cybersecurity and bug hunting.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
