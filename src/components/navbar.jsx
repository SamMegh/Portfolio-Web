import gsap from "gsap";
import logo from "../assets/logo.jpg";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
export default function Navbar() {


  return (
    <div className="block fixed right-2 overflow-hidden bottom-2 left-1/2 -translate-x-1/2 top-auto translate-y-0 z-[10] w-fit">
      <header className=" flex justify-center sm:gap-10 flex-col sm:flex-row rounded-3xl items-center border-[1px] border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] backdrop-blur-[8px] px-[3.5vw] py-0 ">
        {/* Logo */}
        <div className="logo w-[40px]">
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
      </header>
    </div>
  );
}
