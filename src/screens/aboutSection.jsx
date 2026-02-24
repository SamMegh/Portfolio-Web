import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Shield,
  Cpu,
  Layers,
  Code2,
  Zap,
  Target,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────── DATA ─────────────────── */
const stats = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Tech Stacks" },
];

const principles = [
  {
    icon: Shield,
    title: "Security-First",
    text: "Every system I build has security baked in from day one — not patched on later.",
    accent: "#a78bfa",
    num: "01",
  },
  {
    icon: Cpu,
    title: "Performance-Driven",
    text: "Engineered for speed, efficiency, and scalability under real-world load.",
    accent: "#60a5fa",
    num: "02",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    text: "Readable, maintainable, elegantly structured — code your future team will thank you for.",
    accent: "#34d399",
    num: "03",
  },
  {
    icon: Target,
    title: "Precision Delivery",
    text: "No scope creep. I define it, build it, ship it — on standard, on time.",
    accent: "#fbbf24",
    num: "04",
  },
];

const process = [
  { num: "01", title: "Understand", icon: Target, desc: "Deep-dive into requirements, constraints, and goals to define what success looks like." },
  { num: "02", title: "Architect", icon: Layers, desc: "Design scalable, maintainable systems with clear boundaries and future-proof foundations." },
  { num: "03", title: "Engineer", icon: Code2, desc: "Build with precision — clean code, thorough testing, and performance optimization." },
  { num: "04", title: "Deliver", icon: Zap, desc: "Ship production-ready solutions with documentation and seamless handoff." },
];

const STORY_TEXT =
  "I operate at a standard most developers overlook — treating architecture as the foundation that guides every decision, engineering performance into the core of every system, and embedding security as an integral part of the design rather than an afterthought. My work is not built around quick fixes or temporary solutions, but around delivering production-grade systems that scale efficiently, handle real-world pressure, and maintain reliability long after deployment.";

/* ─────────────────── COMPONENT ─────────────────── */
function AboutSection() {
  const rootRef = useRef(null);

  const heroTagRef = useRef(null);
  const heroH1Ref = useRef(null);
  const heroSubRef = useRef(null);
  const heroLineRef = useRef(null);

  const storyRef = useRef(null);
  const charRefs = useRef([]);

  const statBarRef = useRef(null);
  const statItemsRef = useRef([]);

  const principleSectionRef = useRef(null);
  const principleCardsRef = useRef([]);

  const processRef = useRef(null);
  const processCardsRef = useRef([]);
  const processLineRef = useRef(null);

  /* split text into characters */
  const storyChars = useMemo(() => STORY_TEXT.split(""), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ──────── HERO ──────── */
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroTagRef.current,
          start: "top 80%",
          end: "top 0%",
          scrub: 1.2,
        },
      });
      heroTl
        .fromTo(
          heroTagRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: "power3.out" }
        )
        .fromTo(
          heroH1Ref.current,
          { y: 60, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, ease: "expo.out" },
          "<0.1"
        )
        .fromTo(
          heroSubRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: "power3.out" },
          "<0.15"
        )
        .fromTo(
          heroLineRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: "power2.inOut" },
          "<0.1"
        );

      /* ──────── STORY — CHARACTER-BY-CHARACTER SCROLL TYPEWRITER ──────── */
      const chars = charRefs.current.filter(Boolean);
      if (chars.length > 0) {
        gsap.set(chars, { opacity: 0 });

        gsap.to(chars, {
          opacity: 1,
          stagger: {
            each: 1 / chars.length,
          },
          ease: "none",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 60%",
            end: "top -20%",
            scrub: 0.5,
          },
        });
      }

      /* ──────── STAT BAR ──────── */
      statItemsRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        const obj = { val: 0 };
        const numEl = el.querySelector(".stat-num");

        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statBarRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        ScrollTrigger.create({
          trigger: statBarRef.current,
          start: "top 80%",
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              val: target,
              duration: 2.2,
              ease: "power2.out",
              delay: i * 0.15,
              onUpdate: () => {
                if (numEl)
                  numEl.textContent =
                    Math.round(obj.val) + stats[i].suffix;
              },
            }),
        });
      });

      /* ──────── PRINCIPLE CARDS — STAGGERED SCROLL ENTRANCE ──────── */
      principleCardsRef.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });

      /* ──────── PROCESS SECTION ──────── */
      gsap.fromTo(
        processLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 50%",
            end: "top 0%",
            scrub: 1,
          },
        }
      );

      processCardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [storyChars]);

  return (
    <div ref={rootRef} className="relative w-full overflow-hidden">
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO  (full viewport)
      ═══════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center h-fit w-full px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/[0.07] blur-[160px]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <span
            ref={heroTagRef}
            className="inline-block mb-6 px-5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400"
          >
            About &mdash; Philosophy
          </span>

          <h1
            ref={heroH1Ref}
            className="text-[clamp(2.8rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight text-white"
          >
            The{" "}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              Blueprint
            </span>
          </h1>

          <p
            ref={heroSubRef}
            className="mt-7 text-lg md:text-xl text-gray-500 tracking-wide"
          >
            Designed with discipline &bull; Delivered with precision
          </p>

          <div
            ref={heroLineRef}
            className="mx-auto mt-10 h-px w-48 origin-center bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"
          />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — STORY  (scroll typewriter, char by char)
      ═══════════════════════════════════════════ */}
      <section
        ref={storyRef}
        className="relative h-fit w-full"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/[0.05] blur-[140px]" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-violet-600/[0.05] blur-[120px]" />
        </div>

        <div className="sticky top-0 mb-30 flex items-center justify-center px-6 md:px-16">
          <div className="relative z-10 max-w-4xl">
            {/* blinking cursor styled label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-violet-400/70 font-mono">
                loading_philosophy.txt
              </span>
            </div>

            <p
              className="text-[clamp(1.2rem,2.8vw,2rem)] leading-[1.9] text-white/90"
              style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", letterSpacing: "0.02em" }}
            >
              {storyChars.map((char, i) => (
                <span
                  key={i}
                  ref={(el) => (charRefs.current[i] = el)}
                  className="inline-block"
                  style={{ opacity: 0, minWidth: char === " " ? "0.35em" : undefined }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — STAT BAR
      ═══════════════════════════════════════════ */}
      <section
        ref={statBarRef}
        className="relative w-full "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              ref={(el) => (statItemsRef.current[i] = el)}
              className={`flex flex-col items-center justify-center py-10 md:py-10 ${
                i < stats.length - 1
                  ? "border-r border-white/[0.06]"
                  : ""
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

      {/* ═══════════════════════════════════════════
          SECTION 4 — PRINCIPLES  (minimal list)
      ═══════════════════════════════════════════ */}
      <section
        ref={principleSectionRef}
        className="relative w-full py-32 px-6 md:px-16"
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/[0.04] blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/[0.03] blur-[120px]" />
        </div>

        {/* section header */}
        <div className="relative z-10 max-w-7xl mx-auto mb-20 ">
          <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/20 text-[10px] tracking-[0.3em] uppercase text-violet-400 mb-6">
            Core Principles
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            What I Stand For
          </h2>
        </div>

        {/* principle list */}
        <div className="relative z-10 max-w-7xl mx-auto space-y-0">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                ref={(el) => (principleCardsRef.current[i] = el)}
                className="group border-t border-white/10 py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-default"
              >
                {/* number */}
                <span
                  className="text-6xl md:text-8xl font-black leading-none tracking-tighter transition-colors duration-500"
                  style={{ color: "rgba(255,255,255,0.05)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = p.accent + "30")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.05)")}
                >
                  {p.num}
                </span>

                {/* icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: p.accent + "12" }}
                >
                  <Icon className="w-8 h-8" style={{ color: p.accent }} />
                </div>

                {/* content */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                    {p.text}
                  </p>
                </div>

                {/* accent dot */}
                <div
                  className="hidden md:block w-3 h-3 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: p.accent }}
                />
              </div>
            );
          })}
          {/* bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — PROCESS
      ═══════════════════════════════════════════ */}
      <section
        ref={processRef}
        className="relative w-full h-fit px-6 md:px-16 py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/[0.04] blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mb-20">
          <span className="text-[11px] tracking-[0.25em] uppercase text-violet-400 font-medium">
            Process
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white leading-tight">
            How I Work
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-lg">
            A disciplined, repeatable process that turns complex problems into
            reliable solutions.
          </p>
        </div>

        {/* Stepper */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-white/[0.06]">
            <div
              ref={processLineRef}
              className="h-full origin-left bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500"
            />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            {process.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={(el) => (processCardsRef.current[i] = el)}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Circle with icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#0a0a0f] border-2 border-violet-500/50 flex items-center justify-center mb-6 group-hover:border-violet-400 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
                  </div>

                  {/* Step number */}
                  <span className="text-xs font-mono text-violet-500/60 tracking-widest mb-2">
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

    </div>
  );
}

export default AboutSection;
