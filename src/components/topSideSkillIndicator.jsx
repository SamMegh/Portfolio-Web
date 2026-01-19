import React, { useState } from "react";

function TopSideSkillIndicator() {
  const skills = [
    "Full Stack Developer",
    "Penetration Tester",
    "Software Developer",
  ];
  const [activeSkill, setActiveSkill] = useState(0);

  return (
    <div>
      <div className="p-4">
        <div className="absolute top-16 -left-37">
          <div className="w-[500px] text-center py-5 select-none bg-red-700 -rotate-45">
            <span className="text-white  tracking-[4px] font-bold">
                {skills[activeSkill]}
            </span>
            
          </div>
        </div>
        <div>
          <ul className="flex gap-4 text-xs justify-end select-none ">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="relative group px-2 py-1 transition-colors duration-300"
                onClick={() => setActiveSkill(index)}>
                <span
                  className={`relative z-10 ${activeSkill === index ? "text-cyan-300" : "text-white/70"}`}>
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopSideSkillIndicator;
