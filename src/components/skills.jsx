import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Skills() {
  const skillRefs = useRef([]);

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "GSAP", level: 75 },
    { name: "Flutter", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "MongoDB", level: 65 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillRefs.current.forEach((bar, i) => {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: skills[i].level + "%",
            duration: 1.5,
            ease: "power3.out",
            delay: i * 0.2,
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="skills-section w-full p-6 sm:p-10 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        My Skills
      </h2>
      <div className="flex flex-col gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="w-full">
            <div className="flex justify-between text-sm sm:text-base mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-xl overflow-hidden">
              <div
                ref={(el) => (skillRefs.current[i] = el)}
                className="h-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
