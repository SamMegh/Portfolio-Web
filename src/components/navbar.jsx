import React, { useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/logo.jpg";
export default function Navbar() {
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
      );
  }, []);
  return (
    <div>
      <header className="fixed left-0 z-[10] w-full flex justify-between items-center bg-[rgba(0,0,0,0.3)] backdrop-blur-[4px] px-[2vw] py-0 ">
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
    </div>
  );
}
