import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techLogos = JSON.parse(import.meta.env.VITE_TECH_SKILLS); 

// Simple loading spinner component
function LoadingSpinner() {
  return (
    <div className="w-16 h-16 mb-3 flex items-center justify-center">
      <div className="relative">
        <div className="w-10 h-10 border-2 border-transparent border-t-white/80 border-r-white/60 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-10 h-10 border-2 border-transparent border-b-blue-400/60 border-l-purple-400/60 rounded-full animate-spin reverse"></div>
      </div>
    </div>
  );
}

// Simplified logo component with reliable visibility
function LogoWithFallback({ name, urls }) {
  const [urlIndex, setUrlIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    if (urlIndex < urls.length - 1) {
      setUrlIndex(urlIndex + 1);
      setIsLoading(true);
      setHasError(false);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <div 
    id="QualificationSection"
      ref={containerRef}
      className="relative w-16 h-16 mb-3 group"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-lg opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
      
      {/* Main container */}
      <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 group-hover:scale-105 transition-all duration-300">
        {isLoading && <LoadingSpinner />}
        {hasError && !isLoading ? (
          <div className="w-full h-full flex items-center justify-center bg-red-500/20 rounded-xl border border-red-500/50">
            <span className="text-red-400 text-lg">⚠️</span>
          </div>
        ) : (
          <img
            ref={logoRef}
            src={urls[urlIndex]}
            alt={`${name} logo`}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-contain p-2 transition-all duration-500 group-hover:scale-110 ${
              isLoading ? 'opacity-0 absolute' : 'opacity-100'
            }`}
          />
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Get skills from environment variable with fallback
  let SkillData = techLogos;
  
  // Error handling for missing or invalid environment variable
  if (!SkillData || typeof SkillData !== 'object') {
    console.error('VITE_TECH_SKILLS environment variable is not properly configured');
    SkillData = {}; // Fallback to empty object
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // No GSAP animations to avoid flash/disappear issues

  return (
    <div id="QualificationSection" ref={skillsRef} className="skills-section w-full p-6 sm:p-12 text-white relative min-h-screen flex items-center">
      <div className="w-full">
        {/* Title section - with CSS animations */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 bg-clip-text ">
            My Skills
          </h2>
          <p className="text-gray-300 text-xl font-light tracking-wide">Technologies I master and create with</p>
        </div>

        {/* Skills grid - with CSS animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center max-w-7xl mx-auto px-4">
          {Object.entries(SkillData)
            .slice(0, isMobile && !showAllSkills ? 6 : Object.entries(SkillData).length)
            .map(([name, urls], index) => {
              const isNewlyLoaded = isMobile && showAllSkills && index >= 6;
              const animationClass = isNewlyLoaded ? 'animate-fade-in-up' : 'animate-slide-up';
              const animationDelay = isNewlyLoaded ? `${(index - 6) * 0.1 + 0.2}s` : `${index * 0.1}s`;
              
              return (
                <div 
                  key={name} 
                  className={`group flex flex-col items-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 min-h-[140px] w-[120px] hover:scale-105 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-white/20 ${animationClass}`}
                  style={{ animationDelay }}
                >
                  <LogoWithFallback name={name} urls={urls} index={index} />
                  <span className="text-sm text-center text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">{name}</span>
                  
                  {/* Subtle sparkle effects */}
                  <div className="absolute inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-red-400 rounded-full animate-ping delay-300"></div>
                  </div>
                </div>
              );
            })}
        </div>
        
        {/* Load More button - only show on mobile when not all skills are visible */}
        {isMobile && !showAllSkills && Object.entries(SkillData).length > 6 && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => {
                setIsAnimating(true);
                setShowAllSkills(true);
                setTimeout(() => setIsAnimating(false), 1000);
              }}
              disabled={isAnimating}
              className={`px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-white/20 backdrop-blur-sm ${
                isAnimating ? 'opacity-75' : 'hover:scale-105'
              }`}
            >
              {isAnimating ? 'Loading...' : 'Load More Skills'}
              <span className={`ml-2 transition-transform duration-300 ${
                isAnimating ? 'animate-bounce' : ''
              }`}>↓</span>
            </button>
          </div>
        )}
        
        {/* Show Less button - only show on mobile when all skills are visible */}
        {isMobile && showAllSkills && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAllSkills(false)}
              className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/20 backdrop-blur-sm"
            >
              Show Less
              <span className="ml-2">↑</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
