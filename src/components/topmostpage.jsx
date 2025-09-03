import gsap from "gsap";
import React, { useEffect } from "react";

export default function TopMostPage() {
  useEffect(() => {
    gsap
      .timeline({ ease: "power1.easeInOut" })
      .fromTo(
        ".content",
        { opacity: 0, scale: 1.5 }, // starting point
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }, // end state
        "-=0.5"
      )
      .fromTo(
        ".samText h1 span",
        { opacity: 0, scale: 1.3, y: 50 }, // starting point
        { opacity: 1, scale: 1, duration: 1.5, stagger: 0.2 }, // end state
        "-=0.5"
      );
  }, []);
  return (
    <div>
      <div
        className="content relative select-none"
        style={{
          backgroundSize: "cover", // optional
          backgroundPosition: "center", // optional
        }}
      >
        {/* Fullscreen Overlay */}
        <div className="logoImage relative h-screen flex justify-center items-center overflow-hidden">
          {/* Image */}
          {/* <img
              className="image-inner max-w-full h-auto object-contain z-10"
              src={samimage}
              alt="Profile"
            /> */}

          {/* Text */}
          <div className="samText absolute top-[-10vh] inset-0 flex flex-col items-center justify-center leading-[0.9] text-center text-[var(--very-light)]">
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[12vw] tracking-widest font-bold">
              <span>I</span>
              <span>'</span>
              <span>m</span>
            </h1>
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[14vw] tracking-widest font-extrabold">
              <span>S</span>
              <span>a</span>
              <span>m</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
