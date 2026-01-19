import gsap from "gsap";
import logo from "../assets/logo.jpg";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useGSAP(() => {
    const tl = gsap.timeline();
    // list items animation
    tl.fromTo(
      ".menu ul li",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      },
    );
    // date time animation
    tl.fromTo(
      ".timeDate div span",
      { x: -50, opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        x: 0,
        stagger: 0.1,
      },
    );
  }, []);

  // time update
  useGSAP(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        gsap.to(".timeDate", {
          duration: 0.5,
          opacity: 0,
          x: 50,
        });
        gsap.to(".logo", {
          duration: 0.5,
          display: "block",
          opacity: 1,
          y: 0,
        });
        gsap.to(".mainNavToShow", {
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          borderWidth: "1px",
          borderRadius: "24px",
          padding: "8px 25px",
          borderColor: "rgba(255,255,255,0.3)",
          duration: 0.5,
        });
        gsap.to(".dataMain", {
          x: -100,
          width: "40vw",
          bottom: "10px",
          duration: 0.5,
        });
      } else {
        gsap.to(".timeDate", {
          duration: 0.5,
          opacity: 1,
          x: 0,
        });
        gsap.to(".logo", {
          duration: 0.4,
          display: "none",
          opacity: 0,
          y: 50,
        });
        gsap.to(".mainNavToShow", {
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: "0px",
          borderRadius: "0px",
          padding: "0px",
          backdropFilter: "blur(0px)",
          duration: 0.5,
        });
        gsap.to(".dataMain", {
          x: 0,
          width: "95vw",
          bottom: "0px",
          duration: 0.5,
        });
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className=" block  fixed right-2 bottom-0 left-1/2 -translate-x-1/2 top-auto translate-y-0 z-[10] w-fit">
      <div className=" dataMain flex justify-between relative w-[95vw] items-center ">
        {/* Date & Time */}
        <div className="timeDate text-[10px] space-y-1">
          <div className="flex gap-10">
            <span>Time</span>
            <span className="font-bold">{time.toLocaleTimeString()}</span>
          </div>
          <div className="flex gap-10">
            <span>Date</span>
            <span className="font-bold">{time.toDateString()}</span>
          </div>
        </div>

        {/* MAIN Nav bar */}
        <div
          className={`mainNavToShow overflow-hidden flex gap-10 flex-row justify-center items-center `}>
          {/* Logo */}
          <div className="logo hidden w-[40px]">
            <img
              className="w-[40px] my-[8px] relative rounded-full overflow-hidden"
              src={logo}
              alt="logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="menu inline-block">
            <ul className="flex space-x-8 w-fit">
              <li>
                <button
                  onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: 0, offsetY: 0 },
                      ease: "power2.inOut",
                    });
                  }}>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: "#QualificationSection", offsetY: 0 },
                      ease: "power2.inOut",
                    });
                  }}>
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: "#ProjectsSection", offsetY: 0 },
                      ease: "power2.inOut",
                    });
                  }}>
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: "#ContactSection", offsetY: 0 },
                      ease: "power2.inOut",
                    });
                  }}>
                  Let's Talk
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
