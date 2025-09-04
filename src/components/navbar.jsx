import { useEffect, useState } from "react";
// import samimage from "../assets/Profile_Photo.png";
import gsap from "gsap";
import logo from "../assets/logo.jpg";
export default function Navbar() {
  // for mobile UI
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const initial = `M 10 80 Q 0 80 ${width} 80`;

  // const mobileMenu = (isOpen) => {
  //   if (isOpen) {
  //     console.log("open");
  //     gsap.fromTo(
  //       "#mobilenavscreen .navBarForMobile",
  //       {
  //         opacity: 0,
  //       },
  //       {
  //         opacity: 1,
  //         duration: 3,
  //       }
  //     );
  //   }
  //   else {
  //     console.log("close");
  //   }
  // };

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
          duration: 0.5,
          y: 0,
        }
      )
      .fromTo(
        "header .logo",
        { y: -100 },
        {
          duration: 0.3,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  if (menu) {
    gsap.from(
      "#mobilenavscreen .navBarForMobile",
      { opacity: 0, right: -5,top:-22, duration:0.5}
    );
  }
}, [menu]);

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
        <div className="flex-1 z-[10] flex justify-end sm:hidden">
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
        {menu && (
          <div id="mobilenavscreen" className="  absolute w-fit right-0 text-white sm:hidden">
            <ul className="inline">
              <li className="homeScreenListItems navBarForMobile top-[-30px] right-[100px]">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Home
                </a>
              </li>
              <li className="homeScreenListItems navBarForMobile top-[24px] right-[120px]">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Projects
                </a>
              </li>
              <li className="homeScreenListItems navBarForMobile top-[80px] right-[80px]">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Qualification
                </a>
              </li>
              <li className="homeScreenListItems navBarForMobile top-[130px] right-[0px]">
                <a className="homeScreentListItemAnchorTag" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
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
