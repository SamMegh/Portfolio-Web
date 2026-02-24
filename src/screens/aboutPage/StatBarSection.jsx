import React, { useRef } from "react";
import { useStatBarAnimation } from "../../components/animation";
import { stats } from "./data";

function StatBarSection() {
  const statBarRef = useRef(null);
  const statItemsRef = useRef([]);

  useStatBarAnimation({ statBarRef, statItemsRef }, stats);

  return (
    <section ref={statBarRef} className="relative w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            ref={(el) => (statItemsRef.current[i] = el)}
            className={`flex flex-col items-center justify-center py-10 md:py-10 ${
              i < stats.length - 1 ? "border-r border-white/[0.06]" : ""
            } ${i === 2 ? "md:border-r border-r-0" : ""}`}
          >
            <span className="stat-num text-5xl md:text-6xl font-bold text-white tracking-tight">
              0{s.suffix}
            </span>
            <span className="mt-3 text-[11px] md:text-xs uppercase tracking-[0.2em] text-gray-500">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatBarSection;
