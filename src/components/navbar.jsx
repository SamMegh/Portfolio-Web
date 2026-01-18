import { useEffect } from "react";
// import samimage from "../assets/Profile_Photo.png";
import gsap from "gsap";
import logo from "../assets/logo.jpg";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
export default function Navbar() {
  useEffect(() => {
    gsap
      .timeline({ ease: "power1.easeInOut" })
      .fromTo(
        "header",
        { y: 500, opacity: 0 },
        {
          delay: 1.3,
          duration: 0.5,
          y: 0,
          opacity: 1,
        }
      )
      .fromTo(
        "header .logo",
        { y: 100, opacity: 0 },
        {
          duration: 0.3,
          y: 0,
          opacity: 1,
        }
      )
      .fromTo(
        "header .menu li",
        { y: 100, opacity: 0 },
        {
          duration: 0.5,
          y: 0,
          opacity: 1,
          stagger: 0.1,
        },
        "-=0.4"
      );
  }, []);

  return (
  <div className="hidden sm:block fixed right-2 overflow-hidden bottom-2 left-1/2 -translate-x-1/2 top-auto translate-y-0 z-[10] w-fit">
      <header className=" flex opacity-0 justify-center sm:gap-10 flex-col sm:flex-row rounded-3xl items-center border-[1px] border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[8px] px-[3.5vw] py-0 ">
        {/* Logo */}
        <div className="logo w-[40px]">
          <img
            className="w-[40px] my-[8px] relative rounded-full overflow-hidden"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden sm:inline-block">
          <ul className="flex space-x-8">
            <li className="homeScreenListItems">
              <button
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: 0, offsetY: 0 },
                    ease: "power2.inOut",
                  });
                }}
                className="homeScreentListItemAnchorTag"
              >
                Home
              </button>
            </li>
            <li className="homeScreenListItems">
              <button
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: "#QualificationSection", offsetY: 0 },
                    ease: "power2.inOut",
                  });
                }}
                className="homeScreentListItemAnchorTag"
              >
                Qualification
              </button>
            </li> 
            <li className="homeScreenListItems">
              <button
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: "#ProjectsSection", offsetY: 0 },
                    ease: "power2.inOut",
                  });
                }}
                className="homeScreentListItemAnchorTag"
              >
                Projects
              </button>
            </li>
            <li className="homeScreenListItems">
              <button
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: "#ContactSection", offsetY: 0 },
                    ease: "power2.inOut",
                  });
                }}
                className="homeScreentListItemAnchorTag"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
