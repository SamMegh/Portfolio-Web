function TopStatusBar({ topBarRefs }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-5 sm:px-12 py-5">
      <div ref={(el) => (topBarRefs.current[0] = el)} className="flex items-center gap-2.5 opacity-0">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
        <span className="text-[10px] sm:text-xs tracking-[0.25em] text-white/50 uppercase">
          Available for work
        </span>
      </div>
      <div
        ref={(el) => (topBarRefs.current[1] = el)}
        className="text-[10px] sm:text-xs tracking-[0.25em] text-white/30 uppercase opacity-0"
      >
        Portfolio
      </div>
    </div>
  );
}

export default TopStatusBar;
