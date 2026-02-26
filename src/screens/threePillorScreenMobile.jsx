
function ThreePillorScreenMobile() {
  return (
      <div className="">
        {/* intro section */}
        <section>
          <div>
            <h1 className="text-4xl font-bold text-center pt-20">
              I Build What Others Can’t Break
            </h1>
            <p className="text-lg text-center mt-4 mb-10">
              Three disciplines. One standard of excellence.
            </p>
          </div>
        </section>
        {/* pillors */}
        <section className="w-screen h-fit flex flex-col gap-10 justify-center items-center relative">
          {/* Full Stack */}
          <div
            className="bg-[#111111] border border-white/10 h-100 w-70 rounded-2xl p-8 top-5 pillor-1
                      shadow-[0_15px_40px_rgba(0,0,0,0.8)]
                      hover:border-emerald-500/60 hover:-translate-y-2
                      transition-all duration-500">
            <div className="h-[2px] w-14 bg-emerald-500 mb-6"></div>

            <h1 className="text-2xl font-semibold text-white mb-4 tracking-wide">
              Full-Stack Engineering
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Designing scalable web systems with clean architecture, secure
              backend logic, and production-ready performance.
            </p>

            <ul className="text-xs text-gray-500 space-y-3">
              <li>Frontend & backend architecture</li>
              <li>Secure API systems</li>
              <li>Database optimization</li>
              <li>Deployment strategy</li>
            </ul>
          </div>
          {/* Security */}
          <div
            className="bg-[#111111] border border-white/10 h-100 w-70 rounded-2xl p-8 top-5 pillor-2
                      shadow-[0_15px_40px_rgba(0,0,0,0.8)]
                      hover:border-emerald-500/60 hover:-translate-y-2
                      transition-all duration-500">
            <div className="h-[2px] w-14 bg-emerald-500 mb-6"></div>

            <h1 className="text-2xl font-semibold text-white mb-4 tracking-wide">
              Web Penetration Testing
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Offensive security testing focused on identifying real-world
              vulnerabilities before they become business risks.
            </p>

            <ul className="text-xs text-gray-500 space-y-3">
              <li>OWASP vulnerability analysis</li>
              <li>Authentication auditing</li>
              <li>API security testing</li>
              <li>Security hardening strategy</li>
            </ul>
          </div>
          {/* Mobile */}
          <div
            className="bg-[#111111] border border-white/10 h-100 w-70 rounded-2xl p-8 top-5 pillor-3
                      shadow-[0_15px_40px_rgba(0,0,0,0.8)]
                      hover:border-emerald-500/60 hover:-translate-y-2
                      transition-all duration-500">
            <div className="h-[2px] w-14 bg-emerald-500 mb-6"></div>

            <h1 className="text-2xl font-semibold text-white mb-4 tracking-wide">
              Mobile Development
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Cross-platform applications built for performance, usability, and
              seamless real-world scalability.
            </p>

            <ul className="text-xs text-gray-500 space-y-3">
              <li>React Native architecture</li>
              <li>Performance-focused UI</li>
              <li>Secure API integration</li>
              <li>Production deployment</li>
            </ul>
          </div>
        </section>
    </div>
  );
}

export default ThreePillorScreenMobile;
