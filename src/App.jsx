import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import ProjectScreen from "./screens/projectScreen";
import ThreePillorScreen from "./screens/threePillorScreen";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {

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

        <div style={{opacity:1}} >
          {/* <Cursor /> */}
          {/* <Navbar /> */}
          <div id="smooth-content">
            <ThreePillorScreen />
            {/* Add more sections here */}
          </div>
        </div>
    </div>
  );
}

export default App;
