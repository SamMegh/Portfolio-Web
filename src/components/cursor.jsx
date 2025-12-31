import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(useGSAP);

function Cursor() {
  useGSAP(() => {
    gsap.set(".circle", { xPercent: -50, yPercent: -50});
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
    gsap.set(".innerCircle", {xPercent:-50, yPercent:-50});
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

  return (
    <>
    <div
      className="circle w-10 h-10 rounded-full border-2 mix-blend-difference z-50 border-white fixed top-0 left-0 pointer-events-none"
    />
    <div className='innerCircle w-5 h-5 rounded-full border-2 mix-blend-difference z-50 bg-white fixed top-0 left-0 pointer-events-none'/>
    </>
  );
}

export default Cursor;
