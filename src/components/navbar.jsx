import { useEffect, useState } from "react";
// import samimage from "../assets/Profile_Photo.png";
// import { useState } from "react";
import gsap from "gsap";
import logo from "../assets/logo.jpg";
export default function Navbar() {
  // for mobile UI
  // const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const initial = `M 10 80 Q 0 80 ${width} 80`;

  const handleMouseEnter = (e) => {
    gsap.to("svg path", {
      attr: { d: `M 0 80 Q ${e.x} ${e.y} ${width} 80` },
      duration: 0.3,
      ease: "power3.out",
    });
  };
  const handleMouseLeave = () => {
    gsap.to("svg path", {
      attr: { d: initial },
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
    });
  };
  useEffect(() => {
    gsap
      .timeline({ ease: "power1.easeInOut" })
      .fromTo(
        "header",
        { y: -500 },
        {
          duration: 1.2,
          y: 0,
        }
      )
      .fromTo(
        "header .logo",
        { y: -100 },
        {
          duration: 0.5,
          y: 0,
        }
      )
      .fromTo(
        "header .menu li",
        { y: -100 },
        {
          duration: 0.5,
          y: 0,
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

    // animate the SVG
    const svg = document.querySelector("svg");
    if (!svg) return; // safeguard
    svg.addEventListener("mousemove", handleMouseEnter);
    svg.addEventListener("mouseleave", handleMouseLeave);

    // for setting the width of SVG
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="
    absolute left-0 z-[10] w-full"
    >
      <header className=" flex justify-between items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[2px] px-[2vw] py-0 ">
        {/* Logo */}
        <div className="logo">
          <img
            className="w-[80px] relative p-2 rounded-full overflow-hidden"
            src={logo}
            alt="logo"
          />
        </div>

        {/* Hamburger Button - visible only on mobile */}
        {/* <div className="flex-1 flex justify-center sm:hidden">
        <button
          onClick={() => setMenu(prev => !prev)}
          className="flex flex-col justify-center items-center space-y-1.5"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div> */}

        {/* Desktop Menu */}
        <div className="menu hidden sm:inline-block">
          <ul className="flex space-x-8">
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Home
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Projects
              </a>
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
        {/* {menu && (
        <div className="menu absolute top-[100%] left-0 w-full bg-black text-white sm:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Home
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Projects
              </a>
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
      )} */}
      </header>

      <svg className="w-[100%] z-[20] mt-[-80px] h-[30vh] ">
        <path
          d={`M 10 80 Q 0 80 ${width} 80`}
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
