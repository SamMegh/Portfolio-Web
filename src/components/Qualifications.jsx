import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techLogos = {
  "C": [
    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    "https://img.icons8.com/color/480/c-programming.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
  ],
  "C++": [
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "https://img.icons8.com/color/480/c-plus-plus-logo.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  ],
  "JavaScript": [
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://img.icons8.com/color/480/javascript--v1.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  ],
  "HTML": [
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "https://img.icons8.com/color/480/html-5--v1.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  ],
  "CSS": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    "https://img.icons8.com/color/480/css3.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  ],
  "Node.js": [
    "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
    "https://img.icons8.com/color/480/nodejs.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  ],
  "Express": [
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    "https://img.icons8.com/ios/500/express-js.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  ],
  "MongoDB": [
    "https://upload.wikimedia.org/wikipedia/commons/4/45/MongoDB_Logo.svg",
    "https://img.icons8.com/color/480/mongodb.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  ],
  "React": [
    "https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg",
    "https://img.icons8.com/color/480/react-native.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  ],
  "React Native": [
    "https://reactnative.dev/img/header_logo.svg",
    "https://img.icons8.com/color/480/react-native.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  ],
  "Tailwind CSS": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://img.icons8.com/color/480/tailwindcss.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  ],
  "DaisyUI": [
    "https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg",
    "https://avatars.githubusercontent.com/u/71592462?s=200&v=4",
    "https://i.ibb.co/5sYgN1X/daisyui-alt.png"
  ],
  "Flutter": [
    "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    "https://img.icons8.com/color/480/flutter.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
  ],
  "Python": [
    "https://www.python.org/static/community_logos/python-logo.png",
    "https://img.icons8.com/color/480/python.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  ],
  "WebRTC": [
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/WebRTC_Logo.svg",
    "https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-255x305.png",
    "https://i.ibb.co/2dBwwsQ/webrtc-alt.png"
  ],
  "Stable Diffusion": [
    "https://stability.ai/wp-content/uploads/2023/07/stability-logo.svg",
    "https://avatars.githubusercontent.com/u/108345191?s=200&v=4",
    "https://i.ibb.co/TmWsGcs/stable-diffusion-alt.png"
  ],
  "ComfyUI": [
    "https://github.com/comfyanonymous/ComfyUI/raw/master/comfyui_logo.png",
    "https://avatars.githubusercontent.com/u/125986776?s=200&v=4",
    "https://i.ibb.co/f8zM8zF/comfyui-alt.png"
  ],
  "CRON": [
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cron-linux.svg",
    "https://img.icons8.com/ios/500/clock.png",
    "https://i.ibb.co/k59CsLj/cron-alt.png"
  ],
  "Firebase": [
    "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
    "https://img.icons8.com/color/480/firebase.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  ],
  "Google Cloud (GCP)": [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "https://img.icons8.com/color/480/google-cloud.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  ],
  "GitHub": [
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    "https://img.icons8.com/material-outlined/480/github.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  ],
  "Socket.io": [
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    "https://socket.io/images/logo-dark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
  ]
};

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
function LogoWithFallback({ name, urls, index }) {
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
      ref={containerRef}
      className="relative w-16 h-16 mb-3 cursor-pointer group"
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
  
  let SkillData = techLogos;

  // No GSAP animations to avoid flash/disappear issues

  return (
    <div id="QualificationSection" ref={skillsRef} className="skills-section w-full p-6 sm:p-12 text-white relative min-h-screen flex items-center">
      <div className="w-full">
        {/* Title section - with CSS animations */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-xl font-light tracking-wide">Technologies I master and create with</p>
        </div>

        {/* Skills grid - with CSS animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center max-w-7xl mx-auto px-4">
          {Object.entries(SkillData).map(([name, urls], index) => (
            <div 
              key={name} 
              className="group flex flex-col items-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 min-h-[140px] w-[120px] hover:scale-105 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mb-3 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <img
                  src={urls[0]}
                  alt={name}
                  className="w-12 h-12 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = urls[1] || urls[2] || "";
                  }}
                />
              </div>
              <span className="text-sm text-center text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">{name}</span>
              
              {/* Subtle sparkle effects */}
              <div className="absolute inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
