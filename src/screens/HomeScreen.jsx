import MyImage from '../assets/Profile_Photo.png';
import { useEffect, useState } from 'react';

export function HomeScreen() {
  const [scrollY,setScrollY]=useState(0);
  useEffect(()=>{
    const handleScroll=()=>setScrollY(window.scrollY);
    window.addEventListener('scroll',handleScroll); 
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[]);
  const imgMoveX=Math.min(scrollY*0.07,25);
  const imgBorder= Math.min(scrollY*0.15,50);
  const imgbackgroundopacity= Math.min(scrollY*0.005,1);
  const txtMoveX=Math.min(scrollY*0.05,20);
  const txtSize=Math.max(1-(scrollY*0.005),0.2)
  return (
    <div className='relative h-[150vh] w-full'>
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
      <img
        className="w-[20vw] relative z-10 object-contain"
        style={
          {
            borderRadius: `${imgBorder}%`,
            backgroundColor:`rgba(225,225,225,${imgbackgroundopacity})`,
            transform:`translateX(${-imgMoveX}vw)`,
            transition: "transform 0.2s ease-out"
        }
        }
        src={MyImage}
        alt="Profile picture of Sam"
      />
      <p className="absolute select-none text-[20vw] z-0 font-bold text-[#00FFFF]"
      style={
        {
          transform:`translateX(${txtMoveX}vw) scale(${txtSize}`,
            transition:"transform 0.2s ease-out"
        }
      }
      >
        SAM
      </p>
    </div>
    </div>
  );
}
