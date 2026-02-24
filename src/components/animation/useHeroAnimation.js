import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates the hero section elements with a staggered scroll-scrub entrance.
 * @param {{ tagRef, h1Ref, subRef, lineRef }} refs
 */
export default function useHeroAnimation({ tagRef, h1Ref, subRef, lineRef }) {
  useEffect(() => {
    if (!tagRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tagRef.current,
        start: "top 80%",
        end: "top 0%",
        scrub: 1.2,
      },
    });

    tl.fromTo(tagRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, ease: "power3.out" })
      .fromTo(h1Ref.current, { y: 60, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, ease: "expo.out" }, "<0.1")
      .fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: "power3.out" }, "<0.15")
      .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: "power2.inOut" }, "<0.1");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [tagRef, h1Ref, subRef, lineRef]);
}
