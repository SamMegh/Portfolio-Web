import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import profilePhoto from "../../assets/Profile_Photo.png";
import { ROLES } from "./constants";
import GradientOrbs from "./GradientOrbs";
import TopStatusBar from "./TopStatusBar";
import HeroImage from "./HeroImage";
import HeroTextContent from "./HeroTextContent";

gsap.registerPlugin(ScrollToPlugin);

function HomeScreen() {
  const heroRef = useRef(null);
  const nameChars1 = useRef([]);
  const nameChars2 = useRef([]);
  const greetingRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRefs = useRef([]);
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const socialRefs = useRef([]);
  const scrollIndRef = useRef(null);
  const orbRefs = useRef([]);
  const topBarRefs = useRef([]);
  const lineRef = useRef(null);
  const techRefs = useRef([]);
  const badgeRef = useRef(null);

  const name1 = "ANKIT";
  const name2 = "MEGH";

  // ─── Master Entrance Timeline ──────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.2 });

      // 1 ▸ Top bar
      tl.fromTo(
        topBarRefs.current.filter(Boolean),
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }
      );

      // 2 ▸ Greeting line
      tl.fromTo(
        greetingRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

      // 3 ▸ Name line 1 — characters fly up with 3D rotation
      tl.fromTo(
        nameChars1.current.filter(Boolean),
        { y: 120, opacity: 0, rotationX: -90 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.06, ease: "back.out(2)" },
        "-=0.3"
      );

      // 4 ▸ Name line 2 — staggered with slight delay
      tl.fromTo(
        nameChars2.current.filter(Boolean),
        { y: 120, opacity: 0, rotationX: -90 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.06, ease: "back.out(2)" },
        "-=0.8"
      );

      // 5 ▸ Gradient accent line scales in
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
        "-=0.5"
      );

      // 6 ▸ Role text
      tl.fromTo(
        roleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.4"
      );

      // 7 ▸ Description
      tl.fromTo(
        descRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      // 8 ▸ Tech pills stagger in
      tl.fromTo(
        techRefs.current.filter(Boolean),
        { y: 15, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.05 },
        "-=0.3"
      );

      // 9 ▸ CTA buttons
      tl.fromTo(
        ctaRefs.current.filter(Boolean),
        { y: 25, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.12 },
        "-=0.25"
      );

      // 10 ▸ Profile image — circle clip-path reveal
      tl.fromTo(
        imgWrapRef.current,
        { clipPath: "circle(0% at 50% 50%)" },
        { clipPath: "circle(72% at 50% 50%)", duration: 1.2, ease: "power3.inOut" },
        "-=1"
      );

      // 11 ▸ Experience badge pops in
      tl.fromTo(
        badgeRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(3)" },
        "-=0.4"
      );

      // 12 ▸ Gradient orbs bloom in
      tl.fromTo(
        orbRefs.current.filter(Boolean),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, stagger: 0.15, ease: "elastic.out(1, 0.5)" },
        "-=1"
      );

      // 13 ▸ Social icons slide in
      tl.fromTo(
        socialRefs.current.filter(Boolean),
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.07 },
        "-=0.8"
      );

      // 14 ▸ Scroll indicator
      tl.fromTo(
        scrollIndRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      // ── Continuous looping animations ───────────────────────────
      gsap.to(scrollIndRef.current, {
        y: 10,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // ─── Role Text Cycling ─────────────────────────────────────────
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (!roleRef.current) return;
      gsap.to(roleRef.current, {
        y: -15,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          idx = (idx + 1) % ROLES.length;
          if (roleRef.current) {
            roleRef.current.textContent = ROLES[idx];
            gsap.fromTo(
              roleRef.current,
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
            );
          }
        },
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ─── Mouse Parallax (desktop) ─────────────────────────────────
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      orbRefs.current.forEach((orb, i) => {
        if (!orb) return;
        const f = 12 + i * 10;
        gsap.to(orb, { x: nx * f, y: ny * f, duration: 1.2, ease: "power2.out" });
      });

      if (imgRef.current) {
        gsap.to(imgRef.current, {
          x: nx * 8,
          y: ny * 8,
          rotationY: nx * 4,
          rotationX: -ny * 4,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ─── Helpers ───────────────────────────────────────────────────
  const scrollTo = (target) => {
    gsap.to(window, { duration: 1.5, scrollTo: { y: target, offsetY: 0 }, ease: "power2.inOut" });
  };

  // ─── Render ────────────────────────────────────────────────────
  return (
    <div className="Main-screen" ref={heroRef}>
      <section className="relative h-screen overflow-hidden select-none">

        {/* ░░░ Ambient gradient orbs ░░░ */}
        <GradientOrbs orbRefs={orbRefs} />

        {/* ░░░ Top status bar ░░░ */}
        <TopStatusBar topBarRefs={topBarRefs} />

        {/* ░░░ Main hero content ░░░ */}
        <div className="relative z-[5] h-full flex flex-col sm:flex-row items-center justify-center sm:justify-between px-5 sm:px-12 lg:px-24 gap-4 sm:gap-8 pt-14 sm:pt-0">

          {/* ── Image + Social (order-first on mobile) ── */}
          <HeroImage
            imgWrapRef={imgWrapRef}
            imgRef={imgRef}
            badgeRef={badgeRef}
            socialRefs={socialRefs}
            profilePhoto={profilePhoto}
          />

          {/* ── Text content ── */}
          <HeroTextContent
            greetingRef={greetingRef}
            nameChars1={nameChars1}
            nameChars2={nameChars2}
            lineRef={lineRef}
            roleRef={roleRef}
            descRef={descRef}
            techRefs={techRefs}
            ctaRefs={ctaRefs}
            scrollTo={scrollTo}
            name1={name1}
            name2={name2}
          />
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
