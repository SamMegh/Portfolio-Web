import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const projects = JSON.parse(import.meta.env.VITE_PROJECTS);

gsap.registerPlugin(ScrollTrigger);

export default function ProjectTab() {

  return (
    <div className="min-h-screen relative">
          <div className="text-[10vw] font-bold mb-4">
          Project
          </div>

        <div className="space-y-20 mb-40">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-row justify-between">
            <div>
                <div className="">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    View Project
                  </a>
                </div>
              </div>
            <div  className="rounded-2xl absolute sm:w-[40vw] p-4 bg-white text-black h-[70vh] group hover:scale-105 transition-transform duration-300 shadow-lg">
              
              <div className="h-full ">
                <div className="mb-4 h-[80%] overflow-hidden rounded-2xl">
                <img className="rounded-2xl" src={`${project.imgUrl}`} alt={project.name} />
                </div>
                <h2 className="text-2xl font-bold">{project.name}</h2>
              </div>
              <div>
              </div>
            </div>
            </div>
          ))}
        </div>
    </div>
  );
}
