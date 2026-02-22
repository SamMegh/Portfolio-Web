import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectScreen() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // slide up from bottom into view
    gsap.fromTo(
      hero,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: hero,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
    const tl = gsap.timeline();
    tl.to(hero, {
      scale: 150, 
      transformOrigin: "center center", 
      ease: "power3.in",
      duration: 6,
      scrollTrigger: {
        trigger: hero,
        start: "top 80%",
        end: "top -100%",
        scrub: true,
        markers:true
      },
    }, "-=1");

    return () => {
      // cleanup ScrollTrigger and GSAP tweens
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(hero);
    };
  }, []);

  return (
    <div className="Project-screen">
      <div className="h-screen"></div>
      <div className="h-[300vh] flex items-center justify-center">
        <div ref={heroRef} className="project-hero p-6 rounded-md inline-block text-center">
          <h1 className="text-4xl font-bold mt-10">Projects</h1>
          <p className="mt-4 text-lg">Here are some of my projects that I have worked on.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectScreen;
