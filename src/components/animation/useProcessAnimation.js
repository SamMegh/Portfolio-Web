import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate the process section — connecting line + staggered cards.
 * @param {{ processRef, processCardsRef, processLineRef }} refs
 */
export default function useProcessAnimation({ processRef, processCardsRef, processLineRef }) {
  useEffect(() => {
    const tweens = [];

    const lineTween = gsap.fromTo(
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
    tweens.push(lineTween);

    processCardsRef.current.forEach((el, i) => {
      if (!el) return;
      const tween = gsap.fromTo(
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
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [processRef, processCardsRef, processLineRef]);
}
