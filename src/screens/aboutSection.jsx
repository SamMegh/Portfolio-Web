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
  { num: "01", title: "Understand", icon: Target },
  { num: "02", title: "Architect", icon: Layers },
  { num: "03", title: "Engineer", icon: Code2 },
  { num: "04", title: "Deliver", icon: Zap },
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

  const closingRef = useRef(null);

  /* split text into characters */
  const storyChars = useMemo(() => STORY_TEXT.split(""), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ──────── HERO ──────── */
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroTagRef.current,
          start: "top 80%",
          end: "top 30%",
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
            end: "top -50%",
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
            start: "top 65%",
            end: "bottom 50%",
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
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      /* ──────── CLOSING ──────── */
      gsap.fromTo(
        closingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
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

        <div className="sticky top-0 min-h-screen flex items-center justify-center px-6 md:px-16">
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
              {/* blinking block cursor at end */}
              <span className="inline-block w-[3px] h-[1.2em] bg-violet-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — STAT BAR
      ═══════════════════════════════════════════ */}
      <section
        ref={statBarRef}
        className="relative w-full border-y border-white/[0.06] bg-white/[0.02]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              ref={(el) => (statItemsRef.current[i] = el)}
              className={`flex flex-col items-center justify-center py-14 md:py-20 ${
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
          SECTION 4 — PRINCIPLES  (clean grid)
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
        <div className="relative z-10 max-w-7xl mx-auto mb-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/20 text-[10px] tracking-[0.3em] uppercase text-violet-400 mb-6">
            Core Principles
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            What I Stand For
          </h2>
        </div>

        {/* principle cards - 2x2 grid */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                ref={(el) => (principleCardsRef.current[i] = el)}
                className="group relative rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`,
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${p.accent}08 0%, transparent 60%)`,
                  }}
                />

                {/* number watermark */}
                <span
                  className="absolute -top-4 -right-2 text-[8rem] md:text-[10rem] font-black leading-none select-none pointer-events-none"
                  style={{ color: `${p.accent}08` }}
                >
                  {p.num}
                </span>

                {/* content */}
                <div className="relative z-10">
                  {/* icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: p.accent + "15" }}
                  >
                    <Icon className="w-7 h-7" style={{ color: p.accent }} />
                  </div>

                  {/* title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {p.title}
                  </h3>

                  {/* description */}
                  <p className="text-base text-gray-400 leading-relaxed">
                    {p.text}
                  </p>

                  {/* bottom accent line */}
                  <div
                    className="mt-8 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: p.accent }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — PROCESS
      ═══════════════════════════════════════════ */}
      <section
        ref={processRef}
        className="relative w-full px-6 md:px-16 py-32"
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

        <div className="relative z-10 max-w-7xl mx-auto mb-8 hidden md:block">
          <div
            ref={processLineRef}
            className="h-px w-full origin-left bg-gradient-to-r from-violet-500/50 via-violet-500/20 to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {process.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={(el) => (processCardsRef.current[i] = el)}
                className="group relative border border-white/[0.06] rounded-2xl bg-white/[0.02] p-8 md:p-10
                           hover:bg-white/[0.04] hover:border-violet-500/20 transition-all duration-500"
              >
                <span className="text-6xl font-black text-white/[0.04] block mb-6 select-none leading-none">
                  {item.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <ArrowRight className="absolute bottom-8 right-8 w-5 h-5 text-violet-500/0 group-hover:text-violet-500/50 translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CLOSING QUOTE
      ═══════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center min-h-[60vh] w-full px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/[0.06] blur-[150px]" />
        </div>

        <div ref={closingRef} className="relative z-10 text-center max-w-3xl">
          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-12" />
          <p className="text-3xl md:text-5xl font-light text-gray-300 leading-snug">
            I don&rsquo;t just write code —
            <br />
            <span className="text-white font-semibold">
              I engineer systems that{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                stand the test of production
              </span>
              .
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
