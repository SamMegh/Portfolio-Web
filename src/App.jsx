import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/homePage/HomeScreen";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import ProjectScreen from "./screens/projectScreen";
import ThreePillorScreen from "./screens/threePillorScreen";
import ThreePillorScreenMobile from "./screens/threePillorScreenMobile";
import Contact from "./screens/contactScreen";
import AboutSection from "./screens/aboutPage/aboutSection";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  let isMobile = window.innerWidth <= 768;

  useEffect(() => {
       ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
      });
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-x-hidden">
      {/* smooth-content MUST be a direct child of smooth-wrapper */}
      <div id="smooth-content">
        <Cursor />
        <Navbar />
        <HomeScreen />
        {!isMobile&&<ProjectScreen />}
        <AboutSection/>
        {isMobile ?<ThreePillorScreenMobile/>: <ThreePillorScreen />}
        <Contact />
      </div>
    </div>
  );
}

export default App;
