import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,   // smoothness of scroll
      effects: true, // enable parallax/effects
    });

    return () => smoother.kill(); // cleanup on unmount
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HomeScreen />
        {/* Add more sections here */}
      </div>
    </div>
  );
}

export default App;
