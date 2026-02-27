import React, { useRef, useState, useCallback } from "react";

/* Helper: produce a CSS color-mix expression for a given accent + opacity (0–1) */
const withAlpha = (color, opacity) =>
  `color-mix(in srgb, ${color} ${Math.round(opacity * 100)}%, transparent)`;

function TiltCard({ icon: Icon, title, text, accent, num, innerRef }) {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;

    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, ${withAlpha(accent, 0.13)}, transparent 60%)`;
    }
  }, [accent]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setIsHovered(false);
    if (spotlightRef.current) {
      spotlightRef.current.style.background = "transparent";
    }
  }, []);

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        if (innerRef) innerRef(el);
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl p-8 flex flex-col cursor-pointer transition-transform duration-200 ease-out will-change-transform"
      style={{
        background: "linear-gradient(135deg, var(--bg-card-start) 0%, var(--bg-card-end) 100%)",
        border: `1px solid ${isHovered ? withAlpha(accent, 0.31) : 'rgba(var(--white-rgb), 0.06)'}`,
        boxShadow: isHovered
          ? `0 20px 60px rgba(var(--black-rgb), 0.6), 0 0 40px ${withAlpha(accent, 0.08)}`
          : "0 4px 24px rgba(var(--black-rgb), 0.3)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
    >
      {/* spotlight overlay */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 rounded-2xl pointer-events-none z-0 transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* number */}
      <span
        className="absolute top-5 right-5 text-sm font-mono tracking-wider transition-colors duration-300"
        style={{ color: isHovered ? accent : 'rgba(var(--white-rgb), 0.15)' }}
      >
        {num}
      </span>

      {/* icon */}
      <div className="relative z-10 mb-6">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: isHovered ? withAlpha(accent, 0.08) : 'rgba(var(--white-rgb), 0.03)',
            border: `1px solid ${isHovered ? withAlpha(accent, 0.25) : 'rgba(var(--white-rgb), 0.06)'}`,
            boxShadow: isHovered ? `0 0 20px ${withAlpha(accent, 0.13)}` : 'none',
          }}
        >
          <Icon
            className="w-7 h-7 transition-all duration-300"
            style={{
              color: isHovered ? accent : 'rgba(var(--white-rgb), 0.35)',
              filter: isHovered ? `drop-shadow(0 0 8px ${withAlpha(accent, 0.38)})` : 'none',
            }}
          />
        </div>
      </div>

      {/* title */}
      <h3 className="relative z-10 text-xl font-bold text-white tracking-tight mb-3">
        {title}
      </h3>

      {/* description */}
      <p
        className="relative z-10 text-sm leading-relaxed transition-all duration-400"
        style={{
          color: isHovered ? 'rgba(var(--white-rgb), 0.7)' : 'rgba(var(--white-rgb), 0.3)',
          transform: isHovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'color 0.4s, transform 0.4s',
        }}
      >
        {text}
      </p>

      {/* bottom accent line */}
      <div className="absolute bottom-0 left-4 right-4 h-px overflow-hidden rounded-full">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            opacity: isHovered ? 0.8 : 0,
          }}
        />
      </div>
    </div>
  );
}

export default TiltCard;
