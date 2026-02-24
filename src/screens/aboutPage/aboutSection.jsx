import React from "react";
import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import StatBarSection from "./StatBarSection";
import PrinciplesSection from "./PrinciplesSection";
import ProcessSection from "./ProcessSection";

function AboutSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* SECTION 1 — Hero */}
      <HeroSection />

      {/* SECTION 2 — Story (scroll typewriter) */}
      <StorySection />

      {/* SECTION 3 — Stat Bar */}
      <StatBarSection />

      {/* SECTION 4 — Principles */}
      <PrinciplesSection />

      {/* SECTION 5 — Process */}
      <ProcessSection />
    </div>
  );
}

export default AboutSection;
