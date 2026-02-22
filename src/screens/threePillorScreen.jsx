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
        x: -280,
        y: 20,
        opacity: 1,
        duration: 2.5,
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
        x: 280,
        y: 20,
        duration: 2.5,
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
    <div className="h-[300vh]">
      <div className="relative top-[100vh] h-screen">
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
        <section className="w-screen h-fit flex justify-center items-center relative">
          {/* full stack engineer */}
          <div className="bg-yellow-500/10 z-10 border-yellow-400 border h-100 w-70 rounded-2xl p-6 absolute top-5 pillor-1 backdrop-blur-md">
            <h1 className="text-2xl font-bold text-yellow-400 mb-4">
              Full-Stack Engineering
            </h1>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              I design and build scalable web applications from frontend to
              backend. Clean architecture, optimized APIs, and production-ready
              systems.
            </p>

            <ul className="text-xs text-gray-400 space-y-2">
              <li>• Modern UI with React</li>
              <li>• Secure backend with Node & Express</li>
              <li>• Database architecture & API design</li>
              <li>• Deployment & performance optimization</li>
            </ul>
          </div>
          {/* mobile developer */}
          <div className="bg-green-500/10 border-green-400 border z-20 h-100 w-70 rounded-2xl p-6 absolute top-5 pillor-2 backdrop-blur-md">
            <h1 className="text-2xl font-bold text-green-400 mb-4">
              Mobile Development
            </h1>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Cross-platform mobile apps built for speed, usability, and
              scalability. Native performance with modern frameworks.
            </p>

            <ul className="text-xs text-gray-400 space-y-2">
              <li>• React Native / Expo</li>
              <li>• Clean UI & smooth animations</li>
              <li>• API integration & state management</li>
              <li>• Play Store ready deployment</li>
            </ul>
          </div>
          {/* web security specialist */}
          <div className="bg-red-500/10 border-red-400 border z-10 h-100 w-70 rounded-2xl p-6 absolute top-5 pillor-3 backdrop-blur-md">
            <h1 className="text-2xl font-bold text-red-400 mb-4">
              Web Penetration Testing
            </h1>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              I identify vulnerabilities before attackers do. Real-world testing
              focused on security, authentication, and API protection.
            </p>

            <ul className="text-xs text-gray-400 space-y-2">
              <li>• OWASP vulnerability testing</li>
              <li>• Authentication & session flaws</li>
              <li>• API security assessment</li>
              <li>• Security hardening recommendations</li>
            </ul>
          </div>
        </section>
        <div className="h-[300vh]"></div>
      </div>
    </div>
  );
}

export default ThreePillorScreen;
