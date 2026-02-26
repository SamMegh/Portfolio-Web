import React, { useRef } from "react";
import { useProcessAnimation } from "../../components/animation";
import { processSteps } from "./data";

function ProcessSection() {
  const processRef = useRef(null);
  const processCardsRef = useRef([]);
  const processLineRef = useRef(null);

  useProcessAnimation({ processRef, processCardsRef, processLineRef });

  return (
    <section ref={processRef} className="relative w-full h-fit px-6 md:px-16 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/[0.04] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-emerald-400 font-medium">
          Workflow
        </span>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white leading-tight">
          From Idea to Execution
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-lg max-w-lg">
          Every project follows a structured path — no guesswork, no shortcuts, just results.
        </p>
      </div>

      {/* Stepper */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Connector line */}
        <div className="hidden md:block absolute top-8 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-white/[0.06]">
          <div
            ref={processLineRef}
            className="h-full origin-left bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600"
          />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
          {processSteps.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={(el) => (processCardsRef.current[i] = el)}
                className="group flex flex-col items-center text-center"
              >
                {/* Circle with icon */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#0a0a0f] border-2 border-emerald-500/50 flex items-center justify-center mb-6 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                  <Icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                </div>

                {/* Step number */}
                <span className="text-xs font-mono text-emerald-500/60 tracking-widest mb-2">
                  {item.num}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
