import React, { useRef } from "react";
import { usePrincipleAnimation } from "../../components/animation";
import { principles } from "./data";
import TiltCard from "./components/TiltCard";

function PrinciplesSection() {
  const principleSectionRef = useRef(null);
  const principleCardsRef = useRef([]);

  usePrincipleAnimation({ principleCardsRef });

  return (
    <section ref={principleSectionRef} className="relative w-full py-32 px-6 md:px-16">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/[0.04] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/[0.03] blur-[120px]" />
      </div>

      {/* section header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-24 flex flex-col md:flex-col md:items-start gap-2">
       
       {/* core principle */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-400/80">
              Core Principles
            </span>
          </div>
          <div className="flex flex-col">
          {/* heading */}
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-4">
            What I
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
               Stand For
            </span>
          </h2>
          {/* discription */}
        <p className=" text-gray-500 text-sm md:text-lg max-w-lg">
          The non-negotiable standards that define every line of code I write and every system I deliver.
        </p>
        </div>
      </div>

      {/* Interactive Tilt Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((p, i) => (
          <TiltCard
            key={i}
            innerRef={(el) => (principleCardsRef.current[i] = el)}
            icon={p.icon}
            title={p.title}
            text={p.text}
            accent={p.accent}
            num={p.num}
          />
        ))}
      </div>
    </section>
  );
}

export default PrinciplesSection;
