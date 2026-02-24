import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate stat items with count-up and staggered entrance.
 * @param {{ statBarRef, statItemsRef }} refs
 * @param {Array} stats - stats data array
 */
export default function useStatBarAnimation({ statBarRef, statItemsRef }, stats) {
  useEffect(() => {
    const triggers = [];

    statItemsRef.current.forEach((el, i) => {
      if (!el) return;
      const target = stats[i].value;
      const obj = { val: 0 };
      const numEl = el.querySelector(".stat-num");

      const tween = gsap.fromTo(
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
      triggers.push(tween);

      const st = ScrollTrigger.create({
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
              if (numEl) numEl.textContent = Math.round(obj.val) + stats[i].suffix;
            },
          }),
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        if (typeof t.kill === "function") t.kill();
      });
    };
  }, [statBarRef, statItemsRef, stats]);
}
