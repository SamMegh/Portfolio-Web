import { useEffect } from "react";
import skills from "../assets/data/skills.json";
import { gsap } from "gsap";
import TopMostPage from "../components/topmostpage";
import ProjectTab from "../components/projecttab";
// import Skills from "../components/Qualifications";
import Contact from "../components/contact";
import RightSection from "../components/rightSection";
import TopSideSkillIndicator from "../components/topSideSkillIndicator";
import CurvedLoop from "../components/infiniteSkillScroller";

function HomeScreen() {
  const curvedLoopData = skills.map(skill => ({
    alt: Object.keys(skill)[0],
    src: Object.values(skill)[0][0]
  }));
  console.log(curvedLoopData);
  useEffect(() => {
    // main body
    gsap.timeline({ ease: "power1.easeInOut" }).to(".Main-screen", {
      duration: 1,
    });
  }, []);

  return (
    <div className="Main-screen">
      <div className="wrapper overflow-hidden">
        <section className=" h-screen">
           <TopSideSkillIndicator />
        <div className="flex justify-center h-[80%] items-center">
        <TopMostPage className="flex-9/10" />
        <RightSection className=" flex-1/10 hidden sm:flex p-4" />
        </div>
        </section>
       
        {/* <Skills /> */}
        <ProjectTab className="h-screen" />
        <div>
          <CurvedLoop images={curvedLoopData} />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
