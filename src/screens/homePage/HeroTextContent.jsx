import { ROLES, SOCIALS, TECH_STACK } from "./constants";

function HeroTextContent({
  greetingRef,
  nameChars1,
  nameChars2,
  lineRef,
  roleRef,
  descRef,
  techRefs,
  ctaRefs,
  scrollTo,
  name1,
  name2,
}) {
  return (
    <div className="order-2 sm:order-1 flex flex-col items-center sm:items-start sm:flex-1 max-w-xl text-center sm:text-left">

      {/* Greeting */}
      <div ref={greetingRef} className="opacity-0 mb-2 sm:mb-4">
        <span className="text-xs sm:text-sm tracking-[0.4em] text-white/40 uppercase font-light inline-flex items-center gap-3">
          <span className="hidden sm:block w-8 h-[1px] bg-white/20" />
          Hello, I'm
        </span>
      </div>

      {/* Name — Line 1 (solid white) */}
      <div className="overflow-hidden">
        <div className="flex justify-center sm:justify-start">
          {name1.split("").map((char, i) => (
            <span
              key={`n1-${i}`}
              ref={(el) => (nameChars1.current[i] = el)}
              className="hero-char  text-[clamp(3.2rem,12vw,9.5rem)] font-black leading-[0.92] text-white tracking-wider inline-block opacity-0"
              style={{ perspective: "600px" }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Name — Line 2 (outlined) + accent dot */}
      <div className="overflow-hidden">
        <div className="flex justify-center sm:justify-start items-baseline">
          {name2.split("").map((char, i) => (
            <span
              key={`n2-${i}`}
              ref={(el) => (nameChars2.current[i] = el)}
              className="hero-char hero-name-outline text-[clamp(3.2rem,12vw,9.5rem)] font-black leading-[0.92] inline-block opacity-0 tracking-wider"
              style={{ perspective: "600px" }}
            >
              {char}
            </span>
          ))}
          <span
            ref={(el) => (nameChars2.current[name2.length] = el)}
            className="hero-char text-[clamp(3.2rem,12vw,9.5rem)] font-black leading-[0.92] inline-block opacity-0 text-emerald-400"
          >
            .
          </span>
        </div>
      </div>

      {/* Gradient accent line */}
      <div
        ref={lineRef}
        className="w-18 sm:w-30 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 mt-4 sm:mt-6 origin-left"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Cycling role text */}
      <div className="mt-3 sm:mt-4 h-7 overflow-hidden">
        <p
          ref={roleRef}
          className="text-xs sm:text-sm tracking-[0.3em] text-emerald-400/70 font-medium uppercase"
        >
          {ROLES[0]}
        </p>
      </div>

      {/* Description */}
      <p
        ref={descRef}
        className="mt-3 sm:mt-5 text-xs sm:text-sm text-white/35 leading-relaxed max-w-sm font-light opacity-0"
      >
        Full-stack developer &amp; cybersecurity enthusiast crafting
        performant, beautiful digital experiences with React, Node.js,
        and modern web technologies.
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4 sm:mt-5">
        {TECH_STACK.map((tech, i) => (
          <span
            key={tech}
            ref={(el) => (techRefs.current[i] = el)}
            className="hero-tech-pill text-[10px] px-3 py-1 rounded-full border border-white/10 text-white/30 tracking-widest opacity-0 transition-colors duration-300 hover:border-white/25 hover:text-white/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
        <button
          ref={(el) => (ctaRefs.current[0] = el)}
          onClick={() => scrollTo("#ProjectsSection")}
          className="hero-cta-primary opacity-0 px-7 sm:px-9 py-3 bg-white text-black text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--white-rgb),0.15)] hover:scale-105 active:scale-95"
        >
          View Projects
        </button>
        <button
          ref={(el) => (ctaRefs.current[1] = el)}
          onClick={() => scrollTo("#ContactSection")}
          className="hero-cta-secondary opacity-0 px-7 sm:px-9 py-3 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:scale-105 active:scale-95"
        >
          Let's Talk
        </button>
      </div>

      {/* Mobile social bar */}
      <div className="flex sm:hidden gap-3 mt-5">
        {SOCIALS.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={`mob-${s.label}`}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:text-white"
              title={s.label}
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default HeroTextContent;
