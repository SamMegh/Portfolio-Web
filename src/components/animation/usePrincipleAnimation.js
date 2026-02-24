import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Staggered scroll entrance for principle cards.
 * @param {{ principleCardsRef }} refs
 */
export default function usePrincipleAnimation({ principleCardsRef }) {
  useEffect(() => {
    const tweens = [];

    principleCardsRef.current.forEach((el) => {
      if (!el) return;
      const tween = gsap.fromTo(
        el,
        { y: 120, opacity: 0 },
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
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [principleCardsRef]);
}
