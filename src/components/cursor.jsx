import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

function Cursor() {
  useGSAP(() => {
    gsap.set(".circle, .innerCircle", { xPercent: -50, yPercent: -50});
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.05;
    const xSet = gsap.quickSetter(".circle", "x", "px");
    const ySet = gsap.quickSetter(".circle", "y", "px");
    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      xSet(pos.x);
      ySet(pos.y);
    });
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
  }, []);
  useGSAP(() => {
    const pos = {x:window.innerWidth/2, y:window.innerHeight/2};
    const mouse ={x:pos.x, y:pos.y};
    const speed = 0.1;
    const xSet= gsap.quickSetter(".innerCircle","x","px");
    const ySet= gsap.quickSetter(".innerCircle","y","px");
    gsap.ticker.add(()=>{
        pos.x += (mouse.x -pos.x) * speed;
        pos.y += (mouse.y -pos.y) * speed;
        xSet(pos.x);
        ySet(pos.y);
    });
    window.addEventListener("mousemove",(e)=>{
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    }, []);

 useGSAP(() => {
      const links = document.querySelectorAll("a, button, .cursor-pointer, .project, .group");
        links.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                gsap.to(".circle", { scale: 1.5, borderWidth: 1, duration: 0.3, ease: "power3.out" });
                gsap.to(".innerCircle", { scale: 0.7, duration: 0.3, ease: "power3.out" });
            });
            link.addEventListener("mouseleave", () => {
                gsap.to(".circle", { scale: 1, borderWidth: 2, duration: 0.3, ease: "power3.out" });
                gsap.to(".innerCircle", { scale: 1, duration: 0.3, ease: "power3.out" });
            });
        });
    }, []);

    useGSAP(() => {
      const handleMouseDown = () => {
        gsap.to(".circle", { scale: 0.8, borderWidth: 1, duration: 0.2, ease: "power3.out" });
        gsap.to(".innerCircle", { scale: 0.5, duration: 0.2, ease: "power3.out" });
        };
        const handleMouseUp = () => {
        gsap.to(".circle", { scale: 1, borderWidth: 2, duration: 0.2, ease: "power3.out" });
        gsap.to(".innerCircle", { scale: 1, duration: 0.2, ease: "power3.out" });
        };
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        };
        
      });

    useGSAP(() => {
      const hideElements = document.querySelectorAll(".hiddeForMe");
      hideElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(".circle, .innerCircle", { opacity: 0, duration: 0.1, ease: "power3.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(".circle, .innerCircle", { opacity: 1, duration: 0.1, ease: "power3.out" });
        });
      });
    }, []);

  return (
    <>
    <div
      className="circle hidden w-10 h-10 lg:inline rounded-full border-2 mix-blend-difference z-50 border-white fixed top-0 left-0 pointer-events-none"
    />
    <div className='innerCircle hidden w-5 h-5 lg:inline rounded-full border-2 mix-blend-difference z-50 bg-white fixed top-0 left-0 pointer-events-none'/>
    </>
  );
}

export default Cursor;
