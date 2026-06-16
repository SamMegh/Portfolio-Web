import { useEffect, useRef } from "react";
import gsap from "gsap";
import profilePhoto from "../../assets/Profile_Photo.png";
import { ROLES, SOCIALS, TECH_STACK } from "./constants";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function HomeScreenMobile() {
  const containerRef = useRef(null);
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const badgeRef = useRef(null);
  const greetingRef = useRef(null);
  const nameChars1 = useRef([]);
  const nameChars2 = useRef([]);
  const lineRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const techRefs = useRef([]);
  const ctaRefs = useRef([]);
  const socialsRef = useRef([]);
  const scrollIndRef = useRef(null);

  const name1 = "ANKIT";
  const name2 = "MEGH";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.1 });

      // Top bar status items (greeting + status)
      tl.fromTo(greetingRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });

      // Profile image reveal
      tl.fromTo(
        imgWrapRef.current,
        { clipPath: "circle(0% at 50% 50%)" },
        { clipPath: "circle(72% at 50% 50%)", duration: 0.8, ease: "power3.inOut" },
        "-=0.2"
      );
      tl.fromTo(
        imgRef.current,
        { filter: "blur(12px) brightness(0.8)", scale: 0.95 },
        { filter: "blur(0px) brightness(1)", scale: 1, duration: 0.6 },
        "-=0.7"
      );

      // Badge
      tl.fromTo(
        badgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(3)" },
        "-=0.3"
      );

      // Name chars line 1
      tl.fromTo(
        nameChars1.current.filter(Boolean),
        { y: 80, opacity: 0, rotationX: -90 },
        { y: 0, opacity: 1, rotationX: 0, duration: 0.6, stagger: 0.05, ease: "back.out(2)" },
        "-=0.2"
      );

      // Name chars line 2
      tl.fromTo(
        nameChars2.current.filter(Boolean),
        { y: 80, opacity: 0, rotationX: -90 },
        { y: 0, opacity: 1, rotationX: 0, duration: 0.6, stagger: 0.05, ease: "back.out(2)" },
        "-=0.5"
      );

      // Accent line
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.4"
      );

      // Role
      tl.fromTo(roleRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, "-=0.3");

      // Description
      tl.fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, "-=0.2");

      // Tech pills
      tl.fromTo(
        techRefs.current.filter(Boolean),
        { y: 12, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, stagger: 0.05 },
        "-=0.25"
      );

      // CTA buttons
      tl.fromTo(
        ctaRefs.current.filter(Boolean),
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, stagger: 0.1 },
        "-=0.2"
      );

      // Socials
      tl.fromTo(
        socialsRef.current.filter(Boolean),
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, stagger: 0.06 },
        "-=0.2"
      );

      // Scroll indicator
      tl.fromTo(
        scrollIndRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.2"
      );

      // Loop bounce
      gsap.to(scrollIndRef.current, {
        y: 8,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Role cycling
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (!roleRef.current) return;
      gsap.to(roleRef.current, {
        y: -12,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          idx = (idx + 1) % ROLES.length;
          if (roleRef.current) {
            roleRef.current.textContent = ROLES[idx];
            gsap.fromTo(roleRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
          }
        },
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (target) => {
    gsap.to(window, { duration: 1.5, scrollTo: { y: target, offsetY: 0 }, ease: "power2.inOut" });
  };

  return (
    <div ref={containerRef} className="Main-screen overflow-hidden">
      <section className="relative min-h-screen overflow-hidden  flex flex-col select-none">

        {/* Ambient orbs */}
        <div className="absolute top-[-5%] left-[-10%] w-[260px] h-[260px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(var(--indigo-rgb),0.15) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[10%] right-[-8%] w-[280px] h-[280px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(var(--purple-rgb),0.12) 0%, transparent 70%)" }} />

        {/* Top status bar */}
        <div className="flex justify-between items-center px-5 pt-5 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase">Available for work</span>
          </div>
          <span className="text-[10px] tracking-[0.25em] text-white/30 uppercase">Portfolio</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center flex-1 px-5 pt-4 pb-10 relative z-10">

          {/* Profile image */}
          <div
            ref={imgWrapRef}
            className="relative mb-6"
            style={{ clipPath: "circle(0% at 50% 50%)" }}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-emerald-500/20 blur-2xl pointer-events-none" />
            <img
              ref={imgRef}
              src={profilePhoto}
              alt="Ankit Megh"
              className="relative w-[180px] h-[180px] rounded-full object-cover border border-white/10 shadow-2xl"
            />
            <div
              ref={badgeRef}
              className="absolute -bottom-2 -right-2 bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-2xl px-3 py-2 opacity-0"
            >
              <span className="text-lg font-bold text-white block leading-none">2+</span>
              <span className="text-[8px] text-white/50 tracking-wider uppercase">Years Exp</span>
            </div>
          </div>

          {/* Greeting */}
          <div ref={greetingRef} className="opacity-0 mb-3">
            <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-light">Hello, I'm</span>
          </div>

          {/* Name */}
          <div className="overflow-hidden">
            <div className="flex justify-center">
              {name1.split("").map((char, i) => (
                <span
                  key={`n1-${i}`}
                  ref={(el) => (nameChars1.current[i] = el)}
                  className="text-[clamp(3rem,18vw,5rem)] font-black leading-[0.92] text-white tracking-wider inline-block opacity-0"
                  style={{ perspective: "600px" }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex justify-center items-baseline">
              {name2.split("").map((char, i) => (
                <span
                  key={`n2-${i}`}
                  ref={(el) => (nameChars2.current[i] = el)}
                  className="hero-name-outline text-[clamp(3rem,18vw,5rem)] font-black leading-[0.92] inline-block opacity-0 tracking-wider"
                  style={{ perspective: "600px" }}
                >
                  {char}
                </span>
              ))}
              <span
                ref={(el) => (nameChars2.current[name2.length] = el)}
                className="text-[clamp(3rem,18vw,5rem)] font-black leading-[0.92] inline-block opacity-0 text-emerald-400"
              >
                .
              </span>
            </div>
          </div>

          {/* Gradient accent line */}
          <div
            ref={lineRef}
            className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 mt-4 origin-left"
            style={{ transform: "scaleX(0)" }}
          />

          {/* Role cycling */}
          <div className="mt-3 h-6 overflow-hidden">
            <p ref={roleRef} className="text-[10px] tracking-[0.3em] text-emerald-400/70 font-medium uppercase text-center">
              {ROLES[0]}
            </p>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="mt-3 text-xs text-white/35 leading-relaxed text-center max-w-[300px] font-light opacity-0"
          >
            Full-stack developer &amp; cybersecurity enthusiast crafting performant, beautiful digital experiences with React, Node.js, and modern web technologies.
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {TECH_STACK.map((tech, i) => (
              <span
                key={tech}
                ref={(el) => (techRefs.current[i] = el)}
                className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-white/30 tracking-widest opacity-0"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-6">
            <button
              ref={(el) => (ctaRefs.current[0] = el)}
              onClick={() => scrollTo("#ProjectsSection")}
              className="opacity-0 px-7 py-3 bg-white text-black text-[11px] font-semibold tracking-widest uppercase rounded-full active:scale-95 transition-transform"
            >
              View Projects
            </button>
            <button
              ref={(el) => (ctaRefs.current[1] = el)}
              onClick={() => scrollTo("#ContactSection")}
              className="opacity-0 px-7 py-3 border border-white/20 text-white text-[11px] font-semibold tracking-widest uppercase rounded-full active:scale-95 transition-transform"
            >
              Let's Talk
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {SOCIALS.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  ref={(el) => (socialsRef.current[i] = el)}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 p-2 rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:text-white"
                  title={s.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div ref={scrollIndRef} className="mt-8 opacity-0 flex flex-col items-center gap-1">
            <span className="text-[9px] tracking-[0.3em] text-white/25 uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreenMobile;
