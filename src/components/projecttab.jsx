import gsap from "gsap";
import { useEffect } from "react";

export default function ProjectTab() {
  useEffect(() => {
    gsap.timeline({ ease: "power1.easeInOut" }).fromTo(
      ".pageBlock",
      { x: -500 },
      {
        duration: 2.5,
        x: 0,
        scale: 1,
        ease: "back.out(2)",
      }
    );
  }, []);
  return (
    <div>
      <div id="AllContent">
        <div className="pageBlock h-screen text-[var(--light)]">
          <p className="Project-name relative text-[8vw] ml-[5px]">Projects</p>
        </div>
      </div>
    </div>
  );
}
