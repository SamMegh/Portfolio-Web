function GradientOrbs({ orbRefs }) {
  return (
    <>
      <div
        ref={(el) => (orbRefs.current[0] = el)}
        className="hero-orb absolute top-[8%] left-[8%] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]"
        style={{ background: "radial-gradient(circle, rgba(var(--indigo-rgb),0.14) 0%, transparent 70%)" }}
      />
      <div
        ref={(el) => (orbRefs.current[1] = el)}
        className="hero-orb absolute bottom-[12%] right-[4%] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px]"
        style={{ background: "radial-gradient(circle, rgba(var(--purple-rgb),0.11) 0%, transparent 70%)" }}
      />
      <div
        ref={(el) => (orbRefs.current[2] = el)}
        className="hero-orb absolute top-[55%] left-[38%] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px]"
        style={{ background: "radial-gradient(circle, rgba(var(--accent-500-rgb),0.10) 0%, transparent 70%)" }}
      />
    </>
  );
}

export default GradientOrbs;
