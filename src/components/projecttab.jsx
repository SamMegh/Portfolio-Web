import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const horiz = document.querySelector("#AllProjects");

export default function ProjectTab() {
  useEffect(() => {
    gsap.timeline({ ease: "power1.easeInOut" }).fromTo(
      ".Project-name",
      { x: -500 },
      {
        duration: 3.5,
        ease: "back.out(2)",
        x: 0,
        scrollTrigger: {
          trigger: "#pageBlock",
          scroller: "body",
          scrub: 5,
          end: "top 40%",
        },
      }
    );
    gsap.to("#AllProjects .project", {
      transform: "translateX(-150%)",
      scrollTrigger: {
        trigger: "#AllProjects",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -200%",
        pin: true,
        scrub: 2,
      },
    });
  }, []);
  return (
    <div>
      <div className="AllContent">
        <div id="pageBlock" className=" ml-10 text-[var(--light)]">
          <p className="Project-name relative text-[8vw] ">Projects</p>
        </div>
        <div
          id="AllProjects "
          className="AllProjects h-screen m-15 flex flex-row gap-10"
        >
          <div className="p-5 project bg-green-500 w-full md:w-[700px] min-h-[250px] max-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-5">
            {/* Red Box */}
            <div className="w-[90vw] h-[100vh]  md:w-[400px] md:h-[300px] bg-red-300 max-w-[500px]"></div>

            {/* Text */}
            <div className="flex-1 max-w-[500px] text-white">
              <h3 className="title font-bold uppercase text-2xl">
                this is sam's project
              </h3>
              <h5 className="font-normal">
                Services: <span className="font-semibold">React + Vite</span>
              </h5>
            </div>
          </div>
          <div className="p-5 bg-green-500 project w-full md:w-[700px] min-h-[250px] max-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-5">
            {/* Red Box */}
            <div className="w-[90vw] h-[100vh]  md:w-[400px] md:h-[300px] bg-red-300 max-w-[500px]"></div>

            {/* Text */}
            <div className="flex-1 max-w-[500px] text-white">
              <h3 className="title font-bold uppercase text-2xl">
                this is sam's project
              </h3>
              <h5 className="font-normal">
                Services: <span className="font-semibold">React + Vite</span>
              </h5>
            </div>
          </div>
          <div className="p-5 bg-green-500 project w-full md:w-[700px] min-h-[250px] max-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-5">
            {/* Red Box */}
            <div className="w-[90vw] h-[100vh]  md:w-[400px] md:h-[300px] bg-red-300 max-w-[500px]"></div>

            {/* Text */}
            <div className="flex-1 max-w-[500px] text-white">
              <h3 className="title font-bold uppercase text-2xl">
                this is sam's project
              </h3>
              <h5 className="font-normal">
                Services: <span className="font-semibold">React + Vite</span>
              </h5>
            </div>
          </div>
          <div className="p-5 bg-green-500 project w-full md:w-[700px] min-h-[250px] max-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-5">
            {/* Red Box */}
            <div className="w-[90vw] h-[100vh]  md:w-[400px] md:h-[300px] bg-red-300 max-w-[500px]"></div>

            {/* Text */}
            <div className="flex-1 max-w-[500px] text-white">
              <h3 className="title font-bold uppercase text-2xl">
                this is sam's project
              </h3>
              <h5 className="font-normal">
                Services: <span className="font-semibold">React + Vite</span>
              </h5>
            </div>
          </div>
          <div className="p-5 bg-green-500 project w-full md:w-[700px] min-h-[250px] max-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-5">
            {/* Red Box */}
            <div className="w-[90vw] h-[100vh]  md:w-[400px] md:h-[300px] bg-red-300 max-w-[500px]"></div>

            {/* Text */}
            <div className="flex-1 max-w-[500px] text-white">
              <h3 className="title font-bold uppercase text-2xl">
                this is sam's project
              </h3>
              <h5 className="font-normal">
                Services: <span className="font-semibold">React + Vite</span>
              </h5>
            </div>
          </div>
          <div className="p-5 bg-green-500 project w-full md:w-[700px] min-h-[250px] max-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-5">
            {/* Red Box */}
            <div className="w-[90vw] h-[100vh]  md:w-[400px] md:h-[300px] bg-red-300 max-w-[500px]"></div>

            {/* Text */}
            <div className="flex-1 max-w-[500px] text-white">
              <h3 className="title font-bold uppercase text-2xl">
                this is sam's project
              </h3>
              <h5 className="font-normal">
                Services: <span className="font-semibold">React + Vite</span>
              </h5>
            </div>
          </div>
          <div className="p-5 bg-green-500 project w-full md:w-[700px] min-h-[250px] max-h-[50vh] flex flex-col md:flex-row items-center justify-center gap-5">
            {/* Red Box */}
            <div className="w-[90vw] h-[100vh]  md:w-[400px] md:h-[300px] bg-red-300 max-w-[500px]"></div>

            {/* Text */}
            <div className="flex-1 max-w-[500px] text-white">
              <h3 className="title font-bold uppercase text-2xl">
                this is sam's project
              </h3>
              <h5 className="font-normal">
                Services: <span className="font-semibold">React + Vite</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
