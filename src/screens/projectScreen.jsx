import { useRef, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projectsData from "../assets/data/projects.json";

gsap.registerPlugin(ScrollTrigger);

const TECH_COLORS = [
  "from-blue-500 to-blue-600",
  "from-green-500 to-green-600",
  "from-emerald-500 to-emerald-600",
  "from-indigo-500 to-indigo-600",
  "from-rose-500 to-rose-600",
  "from-cyan-500 to-cyan-600",
];


const PROJECTS = Array.isArray(projectsData) ? projectsData : [];

function buildTechStack(project) {
  if (Array.isArray(project?.techStack) && project.techStack.length > 0) {
    return project.techStack;
  }

  if (!project?.services) return [];

  return project.services
    .split(/\+|,|\||&/) 
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildFeatures(project) {
  if (Array.isArray(project?.features) && project.features.length > 0) {
    return project.features;
  }

  if (!project?.description) return [];
  return [project.description];
}

function ProjectScreen() {
  const sectionRef = useRef(null);
  const isFirstRenderRef = useRef(true);
  const shouldAnimateOnProjectChangeRef = useRef(false);
  const imageReadyTimeoutRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageProgress, setImageProgress] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  const totalProjects = PROJECTS.length;

  const activeProject = useMemo(() => {
    if (totalProjects === 0) return null;
    return PROJECTS[activeIndex] ?? PROJECTS[0];
  }, [activeIndex, totalProjects]);

  const techStack = useMemo(
    () => buildTechStack(activeProject),
    [activeProject],
  );

  const features = useMemo(
    () => buildFeatures(activeProject),
    [activeProject],
  );

  const hasImage =
    !!activeProject?.imgUrl && activeProject.imgUrl.toLowerCase() !== "none";

  useEffect(() => {
    if (imageReadyTimeoutRef.current) {
      clearTimeout(imageReadyTimeoutRef.current);
      imageReadyTimeoutRef.current = null;
    }

    if (!hasImage || !activeProject?.imgUrl) {
      setImageProgress(100);
      setImageFailed(false);
      setIsImageLoaded(true);
      return undefined;
    }

    setImageFailed(false);
    setIsImageLoaded(false);
    setImageProgress(8);

    const image = new window.Image();
    const progressInterval = window.setInterval(() => {
      setImageProgress((prev) => {
        if (prev >= 90) return prev;
        const next = prev + Math.max(2, Math.ceil((90 - prev) / 8));
        return Math.min(next, 90);
      });
    }, 120);

    image.onload = () => {
      clearInterval(progressInterval);
      setImageProgress(100);
      imageReadyTimeoutRef.current = setTimeout(() => {
        setIsImageLoaded(true);
      }, 120);
    };

    image.onerror = () => {
      clearInterval(progressInterval);
      setImageFailed(true);
      setIsImageLoaded(true);
      setImageProgress(100);
    };

    image.src = activeProject.imgUrl;

    return () => {
      clearInterval(progressInterval);
      image.onload = null;
      image.onerror = null;
      if (imageReadyTimeoutRef.current) {
        clearTimeout(imageReadyTimeoutRef.current);
        imageReadyTimeoutRef.current = null;
      }
    };
  }, [activeProject?.imgUrl, hasImage]);

  const runProjectTimeline = (
    withScrollTrigger = false,
    options = { animateImage: true },
  ) => {
    const { animateImage } = options;
    const timelineConfig = withScrollTrigger
      ? {
          scrollTrigger: {
            trigger: ".project-section",
            start: "top 60%",
            end: "+=180%",
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
          },
        }
      : {};

    const tl = gsap.timeline(timelineConfig);

    if (animateImage) {
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
    }

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
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.delayedCall(0.1, () => {
        runProjectTimeline(true, { animateImage: true });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!activeProject) return undefined;

    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return undefined;
    }

    if (!shouldAnimateOnProjectChangeRef.current) {
      return undefined;
    }

    shouldAnimateOnProjectChangeRef.current = false;

    const ctx = gsap.context(() => {
      runProjectTimeline(false, { animateImage: false });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeProject]);

  const goNext = () => {
    if (totalProjects <= 1) return;
    shouldAnimateOnProjectChangeRef.current = true;
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  };

  const goPrev = () => {
    if (totalProjects <= 1) return;
    shouldAnimateOnProjectChangeRef.current = true;
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  if (!activeProject) return null;

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
            {activeProject.name}
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
            {activeProject.description}
          </p>
        </div>

        {/* ── Center: hero image with glow layer ──────────── */}
        <div className="project-image relative opacity-0">
          {/* Glow layer behind image — pulses when content emerges */}
          {hasImage && !imageFailed ? (
            <div className="relative h-[70vh] w-[48vw] max-w-[760px]">
              {!isImageLoaded && (
                <div className="absolute inset-0 z-[2] rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    Loading Image
                  </p>
                  <div className="w-[78%] h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-150"
                      style={{ width: `${imageProgress}%` }}
                    />
                  </div>
                  <span className="text-xs text-zinc-500">{imageProgress}%</span>
                </div>
              )}

              <img
                className={`h-full w-full object-contain rounded-2xl relative z-[1] transition-opacity duration-300 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
                src={activeProject.imgUrl}
                alt={`${activeProject.name} screenshot`}
              />
            </div>
          ) : (
            <div className="h-[70vh] w-[48vw] max-w-[760px] rounded-2xl relative z-[1] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center px-8 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Screenshot not available
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-white">
                  {activeProject.name}
                </h2>
              </div>
            </div>
          )}
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
            {techStack.map((label, index) => (
              <span
                key={label}
                className={`tech-badge bg-gradient-to-r ${TECH_COLORS[index % TECH_COLORS.length]} text-white text-sm px-4 py-1.5 rounded-full font-medium shadow-lg opacity-0`}
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
            {features.map((text, index) => (
              <li
                key={`${activeProject.name}-${text}`}
                className="feature-item flex items-center gap-2.5 text-sm text-gray-300 opacity-0"
              >
                <span className="text-base">✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <div className="w-12 h-[1px] bg-white/10 my-1" />

          <a
            href={activeProject.readMoreLink}
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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <div className="flex items-center justify-center gap-3 text-white/70 rounded-full border border-white/15 bg-black/35 backdrop-blur-md px-4 py-2">
            <button
              type="button"
              onClick={goPrev}
              className="px-3 py-1 rounded-full border border-white/20 hover:border-white/50 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              Prev
            </button>
            <span className="text-xs tracking-[0.2em] uppercase min-w-[70px] text-center">
              {activeIndex + 1} / {totalProjects}
            </span>
            <button
              type="button"
              onClick={goNext}
              className="px-4 py-1.5 rounded-full border border-emerald-300/70 bg-emerald-500/25 text-emerald-100 font-semibold ring-2 ring-emerald-400/45 shadow-[0_0_22px_rgba(16,185,129,0.35)] hover:bg-emerald-400 hover:text-black hover:border-emerald-200 hover:ring-emerald-300 transition-all animate-pulse"
              aria-label="Next project"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectScreen;
