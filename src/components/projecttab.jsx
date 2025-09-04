import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectTab() {
  // All project details in a single variable
  const projects = [
    {
      name: "Project 1",
      services: "React + Vite",
      color: "bg-red-300",
    },
    {
      name: "Project 2",
      services: "React + Vite",
      color: "bg-red-300",
    },
    {
      name: "Project 3",
      services: "React + Vite",
      color: "bg-red-300",
    },
    {
      name: "Project 4",
      services: "React + Vite",
      color: "bg-red-300",
    },
    {
      name: "Project 5",
      services: "React + Vite",
      color: "bg-red-300",
    },
    {
      name: "Project 6",
      services: "React + Vite",
      color: "bg-red-300",
    },
    {
      name: "Project 7",
      services: "React + Vite",
      color: "bg-red-300",
    },
  ];
  
  useEffect(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    // Horizontal scroll for projects
    const container = document.querySelector("#AllProjects");
  
    const containerWidth = container.scrollWidth; // total width of all projects
    const viewportWidth = container.clientWidth;   // visible width
  
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
      { y: 1500, opacity:0 },
      {
        duration: 3.5,
        ease: "back.out(2)",
        y: 0,
        opacity:1,
        stagger:0.3,
        scrollTrigger: {
          trigger: "#ProjectsSection",
          scrub: 2,
          start:"top 60%",
          end: "top -50%",
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
      anticipatePin: 1
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

        <div id="AllProjects" className="flex gap-10 h-full items-center p-5">
          {projects.map((proj, i) => (
            <div
              //  w-[100vw] sm:w-[50vw] lg:w-[30vw] h-[30vh]
              className="project opacity-0 flex flex-row p-4 items-center justify-center gap-5 bg-green-500 rounded-lg flex-none w-[550px] h-[350px] max-w-full "
              key={i}
            >
              <div
                className={`red-box w-[300px] h-[200px] ${proj.color}`}
              ></div>
              <div className="text text-white max-w-[400px]">
                <h3 className="title text-lg font-semibold">{proj.name}</h3>
                <h5 className="text-sm">
                  Services: <span className="font-medium">{proj.services}</span>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
