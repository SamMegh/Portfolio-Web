import { useRef, useEffect, useState } from 'react';

const CurvedLoop = ({
  images = [],
  speed = 0.8,
  className,
  direction = 'left',
  interactive = true
}) => {

  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const imageSize = 40;
  const imageSpacing = 80; // image width + margin
  const totalImages = images.length;
  const ready = totalImages > 0;

  // Calculate total width needed for all images
  const spacing = totalImages * imageSpacing;

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current) {
        const delta = dirRef.current === 'right' ? speed : -speed;
        setOffset(prevOffset => {
          let newOffset = prevOffset + delta;
          const wrapPoint = spacing;
          if (newOffset <= -wrapPoint) newOffset += wrapPoint;
          if (newOffset > 0) newOffset -= wrapPoint;
          return newOffset;
        });
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  const onPointerDown = e => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    if (e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = e => {
    if (!interactive || !dragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    setOffset(prevOffset => {
      let newOffset = prevOffset + dx;
      const wrapPoint = spacing;
      if (newOffset <= -wrapPoint) newOffset += wrapPoint;
      if (newOffset > 0) newOffset -= wrapPoint;
      return newOffset;
    });
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  const cursorStyle = interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';

  // Create multiple copies of images to fill the view
  const repeatedImages = ready ? Array(Math.ceil(2000 / spacing) + 2).fill(images).flat() : [];

  return (
    <>
      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 my-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      <div
        ref={containerRef}
        className="h-fit p-2 flex items-center justify-center w-full relative overflow-hidden"
        style={{ cursor: cursorStyle }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        
        <div 
          className={`flex gap-10 ${className ?? ''}`}
          style={{ 
            transform: `translateX(${offset}px)`,
            willChange: 'transform'
          }}
        >
          {repeatedImages.map((imgData, index) => (
            <img 
              key={index}
              src={imgData.src} 
              alt={imgData.alt || `Skill ${index}`}
              style={{ 
                height: `${imageSize}px`, 
                width: `${imageSize}px`,
                objectFit: 'contain',
                borderRadius: '50%',
                userSelect: 'none',
                pointerEvents: 'none',
                flexShrink: 0
              }}
              draggable={false}
            />
          ))}
        </div>
      
      </div>
      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 my-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
    </>
    
  );
};

export default CurvedLoop;
