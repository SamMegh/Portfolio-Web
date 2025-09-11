import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/navbar";
import WelcomeComponent from "./components/welcome";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const welcomeRef = useRef(null);

  useEffect(() => {
    // ⏳ Start 5s timer
    const timer = setTimeout(() => {
      // Animate fade out
      gsap.to(welcomeRef.current, {
        opacity: 0,
        duration: 1.2, // fade duration
        ease: "power2.out",
        onComplete: () => setShowWelcome(false), // remove after animation
      });
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showWelcome) {
      // Initialize scroll smoother only after welcome is gone
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 3,
        effects: true,
      });

      return () => smoother.kill();
    }
  }, [showWelcome]);

  return (
    <div id="smooth-wrapper" className="overflow-x-hidden">
      {showWelcome ? (
        <div ref={welcomeRef}>
          <WelcomeComponent />
        </div>
      ) : (
        <div style={{opacity:1}} >
          <Navbar />
          <div id="smooth-content">
            <HomeScreen />
            {/* Add more sections here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
