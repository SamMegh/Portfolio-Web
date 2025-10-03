import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/navbar";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {

  useEffect(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-x-hidden">

        <div style={{opacity:1}} >
          <Navbar />
          <div id="smooth-content">
            <HomeScreen />
            {/* Add more sections here */}
          </div>
        </div>
    </div>
  );
}

export default App;
