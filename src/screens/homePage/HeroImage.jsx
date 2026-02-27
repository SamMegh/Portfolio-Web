import { SOCIALS } from "./constants";

function HeroImage({ imgWrapRef, imgRef, badgeRef, socialRefs, profilePhoto }) {
  return (
    <div className="order-1 sm:order-2 flex items-center gap-5 sm:gap-8 justify-center sm:justify-end">
      {/* Profile photo with clip-path reveal */}
      <div
        ref={imgWrapRef}
        className="relative"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      >
        {/* Glow ring behind image */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-emerald-500/20 blur-2xl pointer-events-none" />
        <img
          ref={imgRef}
          src={profilePhoto}
          alt="Ankit Megh"
          className="hero-profile-img relative w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] lg:w-[400px] lg:h-[400px] rounded-full object-cover border border-white/10 shadow-2xl"
        />
        {/* Experience badge */}
        <div
          ref={badgeRef}
          className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 opacity-0"
        >
          <span className="text-lg sm:text-2xl font-bold text-white block leading-none">2+</span>
          <span className="text-[8px] sm:text-[10px] text-white/50 tracking-wider uppercase">Years Exp</span>
        </div>
      </div>

      {/* Vertical social bar — desktop */}
      <div className="hidden sm:flex flex-col items-center gap-3">
        {SOCIALS.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              ref={(el) => (socialRefs.current[i] = el)}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon opacity-0 p-2.5 rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5 hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--white-rgb),0.08)]"
              title={s.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/20 to-transparent mt-1" />
      </div>
    </div>
  );
}

export default HeroImage;
