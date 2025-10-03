import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const projects = JSON.parse(import.meta.env.VITE_PROJECTS);

gsap.registerPlugin(ScrollTrigger);

export default function ProjectTab() {
  const projectsRef = useRef([]);
  const containerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  // All project details in a single variable

  useEffect(() => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    
    const isMobile = window.innerWidth < 768;
    
    // Horizontal scroll for projects - Desktop only
    if (!isMobile) {
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
          onUpdate: () => {
            // Find the project closest to the center of the viewport
            const projects = projectsRef.current;
            let minDiff = Infinity;
            let activeIdx = -1;
            projects.forEach((el, idx) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const center = rect.left + rect.width / 2;
              const diff = Math.abs(center - window.innerWidth / 2);
              if (diff < minDiff) {
                minDiff = diff;
                activeIdx = idx;
              }
            });
            projects.forEach((el, idx) => {
              if (!el) return;
              if (idx === activeIdx) {
                el.classList.add("active-project");
                el.classList.add("active-gradient");
              }
              else {
                el.classList.remove("active-project");
                el.classList.remove("active-gradient");
              }
            });
          },
        },
      });
    } else {
      // Mobile: Simple animations without horizontal scroll
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
      
      // Simple pin without horizontal scroll for mobile
      ScrollTrigger.create({
        trigger: "#ProjectsSection",
        start: "top top",
        end: () => "+=" + window.innerHeight * 0.5,
        pin: true,
        anticipatePin: 1,
      });
    }
  }, []);

  const navigateToProject = (direction) => {
    // Only work on mobile
    if (window.innerWidth >= 768) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentProject < projects.length - 1 ? currentProject + 1 : 0;
    } else {
      newIndex = currentProject > 0 ? currentProject - 1 : projects.length - 1;
    }
    
    setCurrentProject(newIndex);
    
    // Animate the container to show the new project on mobile
    const container = containerRef.current;
    const translateX = -newIndex * window.innerWidth;
    
    gsap.to(container, {
      x: translateX,
      duration: 0.6,
      ease: "power2.inOut"
    });
  };

  return (
    <div>
      <div
        id="ProjectsSection"
        className="h-screen flex flex-col justify-center relative"
      >
        <p className="Project-name text-[8vw] font-bold text-white m-5">
          Projects
        </p>

        {/* Navigation Buttons - Mobile Only */}
        <button
          onClick={() => navigateToProject('prev')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95 sm:hidden"
          aria-label="Previous project"
        >
          ←
        </button>

        <button
          onClick={() => navigateToProject('next')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95 sm:hidden"
          aria-label="Next project"
        >
          →
        </button>

        {/* Project Indicator Dots - Mobile Only */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex h-fit gap-2 z-10 sm:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (window.innerWidth >= 768) return;
                setCurrentProject(index);
                const container = containerRef.current;
                const translateX = -index * window.innerWidth;
                gsap.to(container, {
                  x: translateX,
                  duration: 0.6,
                  ease: "power2.inOut"
                });
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div
          ref={containerRef}
          id="AllProjects"
          className="flex gap-1 sm:gap-10 h-[80vh] items-center p-2 mr-1 sm:p-5"
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              ref={(el) => (projectsRef.current[i] = el)}
              className="project opacity-0 flex flex-col sm:flex-row items-center justify-center text-center sm:text-leftp-6 gap-6 bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px] border border-white rounded-lg shadow-mdmin-w-full sm:min-w-[800px] h-[80vh] sm:h-auto min-w-full transition-colors duration-300"
            >
              {/* Image section */}
              <div className="w-full sm:w-[500px] p-2">
                <div className="w-full h-[200px] sm:h-[300px] overflow-hidden rounded-md">
                  {proj.imgUrl == "none" ? (
                    <div className="flex flex-col h-full bg-[rgba(0,0,0,0.2)] backdrop-blur-[20px] items-center justify-center px-6  text-center">
                      <h2 className="text-2xl font-semibold text-white mb-3">
                        No Image Provided
                      </h2>
                      <p className="text-base text-white max-w-md">
                        There was an issue loading the image. It might be
                        missing, corrupted, or unavailable at the moment.
                      </p>
                    </div>
                  ) : (
                    <img
                      src={proj.imgUrl}
                      alt={""}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Text section */}
              <div className="text text-white w-full sm:max-w-[400px] flex flex-col items-center sm:items-start">
                <h3 className="title text-[45px] font-semibold font-['handWrittenFont']">{proj.name}</h3>
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
