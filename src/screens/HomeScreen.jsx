import MyImage from '../assets/Profile_Photo.png';
import { useEffect, useState } from 'react';

export function HomeScreen() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const imgMoveX = Math.min(scrollY * 0.2, 33);
  const imgBorder = Math.min(scrollY * 0.2, 50);
  const imgbackgroundopacity = Math.min(scrollY * 0.005, 1);
  const heyBuddyTextOpacity = Math.min(scrollY * 0.004, 1);
  const txtMoveX = Math.min(scrollY * 0.08, 15);
  const txtSize = Math.max(1 - (scrollY * 0.005), 0.13)
  return (
    <div className='relative h-[80vh] md:h-[150vh] w-full'>
      <div className="sticky top-0 h-full md:h-screen flex items-center justify-center overflow-hidden">
        <img
          className="w-25 md:w-[20vw] relative z-10 object-contain"
          style={
            {
              borderRadius: `${imgBorder}%`,
              backgroundColor: `rgba(225,225,225,${imgbackgroundopacity})`,
              transform: `translateX(${-imgMoveX}vw)`,
              transition: "transform 0.35s ease-out"
            }
          }
          src={MyImage}
          alt="Profile picture of Sam"
        />
        <p
          className='absolute select-none'
          style={
            {
              color:`rgba(255,255,255,${heyBuddyTextOpacity})`,
              fontSize:'3vw',
              fontWeight:'bold',
              transform:"translateX(12vw) translateY(-4.5vw) "
            }
          }
        >
          Hey! Buddy</p>
        <span className="absolute select-none text-[50vw] md:text-[20vw] z-0 font-bold text-[#00FFFF]"
          style={
            {
              transform: `translateX(${txtMoveX}vw) scale(${txtSize}`,
              transition: "transform 0.35s ease-out"
            }
          }
        >
          <p
          className='right-70 w-full md:right-0'
          style={
            {
              display:"inline",
              position:"absolute",
              color:`rgba(255,255,255,${heyBuddyTextOpacity}`,
              transform: `translateX(${txtMoveX-67}vw)`,
            }
          }>
            I am 
          </p>
           SAM 
           <p
        className=' absolute text-[20vw] sm:text-[14vw] md:text-[9vw] w-[500vw] ml-1 sm:w-[440vw] '
        style={
          {
              color:`rgba(242, 242, 242,${heyBuddyTextOpacity}`,
              fontWeight:"lighter",
              textAlign:"center",
            transform: `translateX(${txtMoveX-230}vw)`,
          }
        }
        > A Web Developer, Bug Hunter, and Engineering Student.<br/>
I build modern, responsive web apps using React, Node.js, and more.<br/>
I explore cybersecurity to make systems smarter and safer.<br/>
I also work on IoT projects with ESP8266 and sensors.<br/>
Curious, focused, and driven to turn ideas into real-world solutions.

</p>
        </span>
       
      </div>
    </div>
  );
}
