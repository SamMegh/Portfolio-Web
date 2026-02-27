import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TECH_STACK = [
  { label: "React", color: "from-blue-500 to-blue-600" },
  { label: "Node.js", color: "from-green-500 to-green-600" },
  { label: "MongoDB", color: "from-emerald-500 to-emerald-600" },
  { label: "Express", color: "from-purple-500 to-purple-600" },
];

const FEATURES = [
  { icon: "🌱", text: "Create & arrange virtual gardens" },
  { icon: "💧", text: "Water, fertilize & harvest plants" },
  { icon: "📈", text: "Watch plants grow over time" },
  { icon: "🤝", text: "Share gardens with friends" },
];

function ProjectScreen() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.delayedCall(0.1, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".project-section",
            start: "top 60%",
            end: "+=180%",
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
          },
        });

        /* ── Phase 1: Image scales up from nothing ──────── */
        tl.fromTo(
          ".project-image",
          { scale: 0.4, opacity: 0, filter: "blur(20px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
          },
        );

        /* ── Phase 3: Lines shoot out from image edges ───── */
        tl.fromTo(
          ".project-line-left",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.15",
        );
        tl.fromTo(
          ".project-line-right",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
          "<",
        );

        /* ── Phase 4: Left panel slides OUT from image center ─ */
        // Title emerges from the right (image side) toward its left position
        tl.fromTo(
          ".project-left-panel",
          { x: 200, opacity: 0, filter: "blur(8px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        );
        // Title slides with a slight delay for layering
        tl.fromTo(
          ".project-title",
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.6",
        );
        tl.fromTo(
          ".project-desc",
          { x: 40, y: 15, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.35",
        );

        /* ── Phase 5: Right panel slides OUT from image center ─ */
        tl.fromTo(
          ".project-right-panel",
          { x: -200, opacity: 0, filter: "blur(8px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=1.1",
        );
        tl.fromTo(
          ".project-tech-heading",
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.9",
        );
        tl.fromTo(
          ".tech-badge",
          { x: -30, opacity: 0, scale: 0.6 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
            stagger: 0.08,
          },
          "-=0.7",
        );

        /* ── Phase 6: Features section slides in ─────────── */
        tl.fromTo(
          ".project-features-heading",
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.8",
        );
        tl.fromTo(
          ".feature-item",
          { x: -25, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power3.out",
            stagger: 0.08,
          },
          "-=0.8",
        );

        /* ── Phase 7: CTA fades in last ─────────────────── */
        tl.fromTo(
          ".project-cta",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
          "-=0.45",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* ── Pinned project showcase ─────────────────────── */}
      <div
        ref={sectionRef}
        className="project-section h-screen flex items-center justify-center relative overflow-hidden mb-30"
      >
        {/* ── Left panel: slides out from image ───────────── */}
        <div className="project-left-panel absolute left-[8%] text-center top-1/2 -translate-y-1/2 z-10 max-w-sm opacity-0">
          {/* Project label */}
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400/80 font-medium mb-3 block">
            Featured Project
          </span>

          <h1 className="project-title text-5xl md:text-7xl font-bold tracking-tight text-white opacity-0">
            Vanni
          </h1>

          {/* Line connecting left panel to image */}
          <div
            className="project-line-left my-5 h-[2px] w-full origin-right"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(var(--white-rgb),0.15) 30%, rgba(var(--accent-400-rgb),0.8) 100%)",
              transform: "scaleX(0)",
            }}
          />

          <p className="project-desc text-center text-sm md:text-base leading-relaxed text-gray-400 opacity-0">
            Vanni is a web application that allows users to create and manage
            their own virtual gardens. Users can choose from a variety of
            plants, arrange them in their garden, and watch them grow over
            time. The application also includes features for watering,
            fertilizing, and harvesting plants, as well as sharing gardens
            with friends.
          </p>
        </div>

        {/* ── Center: hero image with glow layer ──────────── */}
        <div className="project-image relative opacity-0">
          {/* Glow layer behind image — pulses when content emerges */}
          <img
            className="h-[90vh] object-contain rounded-2xl relative z-[1]"
            src="./vanni.png"
            alt="Vanni Project"
          />
        </div>

        {/* ── Right panel: slides out from image ──────────── */}
        <div className="project-right-panel absolute right-[10%] top-1/2 -translate-y-1/2 z-10 max-w-xs flex flex-col items-start gap-4 opacity-0">
          {/* Line connecting image to right panel */}
          <div
            className="project-line-right h-[2px] w-full origin-left"
            style={{
              background:
                "linear-gradient(90deg, rgba(var(--accent-400-rgb),0.8) 0%, rgba(var(--white-rgb),0.15) 70%, transparent 100%)",
              transform: "scaleX(0)",
            }}
          />

          <h3 className="project-tech-heading text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold opacity-0">
            Built With
          </h3>

          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map(({ label, color }) => (
              <span
                key={label}
                className={`tech-badge bg-gradient-to-r ${color} text-white text-sm px-4 py-1.5 rounded-full font-medium shadow-lg opacity-0`}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Separator */}
          <div className="w-12 h-[1px] bg-white/10 my-1" />

          {/* ── Features ───────────────────────────────── */}
          <h3 className="project-features-heading text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold opacity-0">
            Key Features
          </h3>

          <ul className="flex flex-col gap-2">
            {FEATURES.map(({ icon, text }) => (
              <li
                key={text}
                className="feature-item flex items-center gap-2.5 text-sm text-gray-300 opacity-0"
              >
                <span className="text-base">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <div className="w-12 h-[1px] bg-white/10 my-1" />

          <a
            href="https://github.com/SamMegh/Vaani"
            target="_blank"
            rel="noopener noreferrer"
            className="project-cta inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 opacity-0 group"
          >
            View Project
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectScreen;
