import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Character-by-character scroll typewriter animation.
 * @param {{ storyRef, charRefs }} refs
 * @param {string[]} storyChars - array of characters
 */
export default function useStoryAnimation({ storyRef, charRefs }, storyChars) {
  useEffect(() => {
    const chars = charRefs.current.filter(Boolean);
    if (chars.length === 0) return;

    gsap.set(chars, { opacity: 0 });

    const st = gsap.to(chars, {
      opacity: 1,
      stagger: { each: 1 / chars.length },
      ease: "none",
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 60%",
        end: "top -20%",
        scrub: 0.5,
      },
    });

    return () => {
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, [storyRef, charRefs, storyChars]);
}
