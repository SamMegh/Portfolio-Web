import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ThreePillorScreen() {
  useEffect(() => {
    const pillor1 = document.querySelector(".pillor-1");
    const pillor2 = document.querySelector(".pillor-2");
    const pillor3 = document.querySelector(".pillor-3");
    const tl = gsap.timeline();
    gsap.fromTo(
      ".introItems",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".introDiv",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );
    tl.fromTo(
      pillor2,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".pillor-1",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      },
    );
    tl.fromTo(
      pillor1,
      { y: 0, x: 0, opacity: 0 },
      {
        rotate: -10,
        x: -300,
        y: 20,
        opacity: 1,
        ease: "back.inOut(2)",
        scrollTrigger: {
          trigger: ".pillor-1",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      },
    );
    tl.fromTo(
      pillor3,
      { y: 0, x: 0, opacity: 0 },
      {
        rotate: 10,
        x: 300,
        y: 20,
        ease: "back.inOut(2)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".pillor-3",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      },
    );
    return () => {
      tl.kill();
    };
  }, []);
  return (
      <div className="mb-20 min-h-170">
        {/* intro section */}
        <section>
          <div className="introDiv mb-10">
            <h1 className="introItems text-4xl text-center font-bold text-white leading-tight">
              I Build What Others Can’t Break
            </h1>
            <p className="introItems text-[11px] text-center tracking-[0.25em] uppercase text-violet-400 font-medium">
              Three disciplines. One standard of excellence.
            </p>
          </div>
        </section>
        {/* pillors */}
        <section className="w-screen h-fit flex justify-center items-center relative">
          {/* Mobile */}
          <div
            className="bg-[#111111] border z-10 border-white/10 h-110 flex justify-between flex-col w-80 rounded-2xl p-8 pt-10 absolute top-5 pillor-1
                      shadow-[0_15px_40px_rgba(0,0,0,0.8)]
                      hover:border-violet-500/60 hover:-translate-y-2
                      transition-all duration-500">
            <div>
              {" "}
              <div className="h-[2px] w-14 bg-violet-500 mb-6"></div>
              <h1 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                Mobile Development
              </h1>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Cross-platform applications built for performance, usability,
                and seamless real-world scalability.
              </p>
              <ul className="text-xs text-gray-500 space-y-3">
                <li>React Native architecture</li>
                <li>Performance-focused UI</li>
                <li>Secure API integration</li>
                <li>Production deployment</li>
              </ul>
            </div>
            <div className="mb-1 flex items-center justify-between text-sm text-gray-300">
              <div className="flex items-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-yellow-400">
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
          {/* Full Stack */}
          <div
            className="bg-[#111111] border z-20 border-white/10 h-110 flex justify-between flex-col w-80 rounded-2xl p-8 pt-10 absolute top-5 pillor-2
                      shadow-[0_15px_40px_rgba(0,0,0,0.8)]
                      hover:border-violet-500/60 hover:-translate-y-2
                      transition-all duration-500">
            <div>
              <div className="h-[2px] w-14 bg-violet-500 mb-6"></div>

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
            <div className="mb-1 flex items-center justify-between text-sm text-gray-300">
              <div className="flex items-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-yellow-400">
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
          {/* Security */}
          <div
            className="bg-[#111111] border z-10 border-white/10 h-110 flex justify-between flex-col  w-80 rounded-2xl p-8 pt-10 absolute top-5 pillor-3
                      shadow-[0_15px_40px_rgba(0,0,0,0.8)]
                      hover:border-violet-500/60 hover:-translate-y-2
                      transition-all duration-500">
            <div>
              <div className="h-[2px] w-14 bg-violet-500 mb-6"></div>

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
            <div className="mb-1 ml-6 flex items-center justify-between text-sm text-gray-300">
              <div className="flex items-center gap-1">
                {Array(4)
                  .fill(0)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-yellow-400">
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01z" />
                    </svg>
                  ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4">
                  <path
                    d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01z"
                    fill="url(#halfStar)"
                    className="stroke-gray-700"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default ThreePillorScreen;
