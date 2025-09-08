import { useEffect, useState } from "react";
// import samimage from "../assets/Profile_Photo.png";
import gsap from "gsap";
import logo from "../assets/logo.jpg";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
export default function Navbar() {
  // for mobile UI
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    gsap
      .timeline({ ease: "power1.easeInOut" })
      .fromTo(
        "header",
        { y: 500, opacity: 0 },
        {
          delay:1,
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
      )
      .fromTo(
        "svg path",
        { y: -100 },
        {
          duration: 0.5,
          y: 0,
          stagger: 0.1,
        },
        "-=0.4"
      );
  }, []);

  useEffect(() => {
    if (menu) {
      gsap.from("#mobilenavscreen .navBarForMobile", {
        opacity: 0,
        right: 20,
        top: 25,
        duration: 0.5,
      });
    }
  }, [menu]);

  return (
  <div className="fixed right-2 top-[60%] -translate-y-1/2 overflow-hidden left-auto bottom-auto sm:bottom-2 sm:left-1/2 sm:-translate-x-1/2 sm:top-auto sm:translate-y-0 z-[10] w-fit">
      <header className=" flex justify-center sm:gap-10 flex-col sm:flex-row rounded-3xl items-center border-[0.5px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] px-[2vw] py-0 ">
        {/* Logo */}
        <div className="logo w-[80px]">
          <img
            className="w-[80px] relative p-2 rounded-full overflow-hidden"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Hamburger Button - visible only on mobile */}
        <div className="flex-1 z-[10] p-2 flex justify-end sm:hidden">
          <button
            onClick={() => {
              setMenu((prev) => {
                const newState = !prev;
                // mobileMenu(newState); // pass the new value
                return newState;
              });
            }}
            className="relative flex flex-col justify-center items-center w-8 h-8"
          >
            {/* Top line */}
            <span
              className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
        ${menu ? "rotate-45" : "-translate-y-2"}`}
            ></span>

            {/* Middle line */}
            <span
              className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out
        ${menu ? "opacity-0" : "opacity-100"}`}
            ></span>

            {/* Bottom line */}
            <span
              className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
        ${menu ? "-rotate-45" : "translate-y-2"}`}
            ></span>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden sm:inline-block">
          <ul className="flex space-x-8">
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Home
              </a>
            </li>
            <li className="homeScreenListItems">
              <button
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: ".ProjectsSection", offsetY: 50 }, // adjust offset if navbar covers section
                    ease: "power2.inOut",
                  });
                }}
                className="homeScreentListItemAnchorTag"
              >
                Projects
              </button>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Qualification
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div
            id="mobilenavscreen"
            className="absolute w-fit right-0 text-white sm:hidden"
          >
            <ul className="inline">
              <li className="homeScreenListItems navBarForMobile top-[-30px] right-[100px]">
                <a className="homeScreentListItemAnchorTagMobile " href="#">
                  Home
                </a>
              </li>
              <li className="homeScreenListItems navBarForMobile top-[24px] right-[120px]">
                <a className="homeScreentListItemAnchorTagMobile" href="#">
                  Projects
                </a>
              </li>
              <li className="homeScreenListItems navBarForMobile top-[75px] right-[80px]">
                <a className="homeScreentListItemAnchorTagMobile" href="#">
                  Contact
                </a>
              </li>
              <li className="homeScreenListItems navBarForMobile top-[120px] right-[2px]">
                <a className="homeScreentListItemAnchorTagMobile" href="#">
                  Qualification
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
