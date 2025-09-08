import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from '../assets/projects.json';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectTab() {
  // All project details in a single variable



  useEffect(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    // Horizontal scroll for projects
    const container = document.querySelector("#AllProjects");

    const containerWidth = container.scrollWidth; // total width of all projects
    const viewportWidth = container.clientWidth; // visible width

    const scrollDistance = containerWidth - viewportWidth; // total scroll distance in px

    gsap.fromTo(
      ".Project-name",
      { x: -500 },
      {
        duration: 2.5,
        ease: "back.out(2)",
        x: 0,
        scrollTrigger: {
          trigger: "#ProjectsSection",
          scrub: 2,
          end: "top 40%",
        },
      }
    );
    gsap.fromTo(
      "#AllProjects .project",
      { y: 1500, opacity: 0 },
      {
        duration: 3.5,
        ease: "back.out(2)",
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#ProjectsSection",
          scrub: 2,
          start: "top 60%",
          end: "top top",
        },
      }
    );

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: "#ProjectsSection",
        start: "top top",
        end: () => "+=" + scrollDistance, // scroll length matches exact distance
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div>
      <div
        id="ProjectsSection"
        className="h-screen flex flex-col justify-center"
      >
        <p className="Project-name text-[8vw] font-bold text-white m-5">
          Projects
        </p>

        <div
          id="AllProjects"
          className="flex gap-1 sm:gap-10 h-[80vh] items-center p-2 mr-1 sm:p-5"
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              className="
    project opacity-0 flex flex-col sm:flex-row 
    items-center justify-center text-center sm:text-left
    p-6 gap-6 bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px] 
    border border-white rounded-lg shadow-md
    min-w-full sm:min-w-[800px] h-[80vh] sm:h-auto max-w-full
  "
            >
              {/* Image section */}
              <div className="w-full sm:w-[500px]">
                <div className="w-full h-[200px] sm:h-[300px] overflow-hidden rounded-md">
                  <img
                    src={proj.imgUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text section */}
              <div className="text text-white w-full sm:max-w-[400px] flex flex-col items-center sm:items-start">
                <h3 className="title text-[45px] font-semibold">{proj.name}</h3>
                <h5 className="text-sm mb-2">
                  Services: <span className="font-medium">{proj.services}</span>
                </h5>
                <p className="font-light">{proj.description}</p>
                <button
                  className="
          mt-5 px-8 py-3 text-lg font-bold text-white 
          rounded-full border border-white/30 bg-white/10 
          shadow-md backdrop-blur-md transition-all duration-300 
          hover:scale-105 hover:shadow-xl
        "
                  onClick={() => window.open(proj.readMoreLink, "_blank")}
                >
                  <span className="relative z-10">Read More</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
