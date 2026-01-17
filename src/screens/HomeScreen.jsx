import { useEffect } from "react";

import { gsap } from "gsap";
import TopMostPage from "../components/topmostpage";
import ProjectTab from "../components/projecttab";
import Skills from "../components/Qualifications";
import Contact from "../components/contact";
import RightSection from "../components/rightSection";

function HomeScreen() {
  useEffect(() => {
    // main body
    gsap.timeline({ ease: "power1.easeInOut" }).to(".Main-screen", {
      duration: 1,
    });
  }, []);

  return (
    <div className="Main-screen">
      <div className="wrapper overflow-hidden">
        <div className="flex">
        <TopMostPage />
        <RightSection className=" hidden sm:flex p-4" />
        </div>
        <Skills />
        <ProjectTab className="h-screen" />
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
