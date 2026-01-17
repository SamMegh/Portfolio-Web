import React, { useEffect, useRef } from "react";
import {
  AtSign,
  Facebook,
  Github,
  Icon,
  Instagram,
  Linkedin,
  Phone,
} from "lucide-react";

function RightSection({ className }) {
  const listRef = useRef([]);
  const lastRippleRef = useRef([]);

  const items = [
    {
      icon: <Phone />,
      onClick: () => {
        window.open(
          "https://wa.me/919053269858",
          "_blank",
          "noopener,noreferrer",
        );
      },
      label: "WhatsApp",
    },
    {
      icon: <AtSign />,
      onClick: () => {
        window.open(
          "mailto:sam.megh0305@gmail.com",
          "_blank",
          "noopener,noreferrer",
        );
      },
      label: "Email",
    },
    {
      icon: <Instagram />,
      onClick: () => {
        window.open(
          "https://www.instagram.com/ankit_megh0305/",
          "_blank",
          "noopener,noreferrer",
        );
      },
      label: "Instagram",
    },
    // {
    //   icon: <Facebook />,
    //   onClick: () => {
    //     window.open(
    //       "https://www.facebook.com/people/Ankit-Meghwal/pfbid0hBorxeABKbcpQhizWqzjL3sFLut2fhFt1SSnVdsahqWLrsbfNzz4L5aUV9918as8l/",
    //       "_blank",
    //       "noopener,noreferrer",
    //     );
    //   },
    //   label: "Facebook",
    // },
    {
      icon: <Linkedin />,
      onClick: () => {
        window.open(
          "https://www.linkedin.com/in/ankit-megh-951025274/",
          "_blank",
          "noopener,noreferrer",
        );
      },
      label: "LinkedIn",
    },
    {
      icon: <Github />,
      onClick: () => {
        window.open(
          "https://github.com/SamMegh",
          "_blank",
          "noopener,noreferrer",
        );
      },

      label: "GitHub",
    },
  ];

  useEffect(() => {
    listRef.current.forEach((item) => {
      if (!item) return;

      const handleMouseMove = (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        item.style.setProperty("--mouse-x", `${x}px`);
        item.style.setProperty("--mouse-y", `${y}px`);
      };

      item.addEventListener("mousemove", handleMouseMove);
      return () => item.removeEventListener("mousemove", handleMouseMove);
    });
  }, []);

  // Create a ripple (water-wave) element at the mouse coordinates inside the li
  const createRipple = (e, idx) => {
    const item = listRef.current[idx];
    if (!item) return;

    const now = Date.now();
    const last = lastRippleRef.current[idx] || 0;
    // throttle ripples to avoid spamming
    if (now - last < 200) return;
    lastRippleRef.current[idx] = now;

    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = `40px`;
    ripple.style.height = `40px`;
    ripple.style.background = "rgba(255,255,255,0.72)";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.transform = "translate(-50%, -50%) scale(0)";
    ripple.style.zIndex = "15";
    ripple.style.boxShadow = "0 0 30px rgba(255,255,255,0.45)";

    item.appendChild(ripple);

    const animation = ripple.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 0.9 },
        { transform: "translate(-50%, -50%) scale(10)", opacity: 0 },
      ],
      { duration: 700, easing: "cubic-bezier(.22,.9,.27,1)" },
    );

    animation.onfinish = () => ripple.remove();
    // fallback removal in case animation doesn't fire
    setTimeout(() => ripple.remove(), 800);
  };

  return (
    <div className={`justify-center items-center select-none ${className}`}>
      <ul
        className={`flex flex-col items-center justify-center hiddeForMe py-0 px-0 gap-2 `}>
        {items.map((item, index) => (
          <li
            key={index}
            ref={(el) => (listRef.current[index] = el)}
            style={{
              transitionDelay: `${index * 100}ms`,
              "--mouse-x": "50%",
              "--mouse-y": "50%",
            }}
            onClick={item.onClick}
            onMouseEnter={(e) => createRipple(e, index)}
            className="
        relative
        hover:text-black
        p-3
        rounded-full
        border-white/50
        cursor-none
        group
        [&>svg]:relative
        [&>svg]:z-10
      ">
            <span
              className="
        absolute
        inset-0
        overflow-hidden
        rounded-full
        before:content-['']
        before:absolute
        before:top-[var(--mouse-y)]
        before:left-[var(--mouse-x)]
        before:w-0
        before:h-0
        before:bg-white
        before:rounded-full
        before:-translate-x-1/2
        before:-translate-y-1/2
        before:transition-all
        before:duration-500
        before:ease-out
        group-hover:before:w-[300%]
        group-hover:before:h-[300%]
      "></span>
            {item.icon}
            <span
              className="
        absolute
        right-full
        top-1/2
        -translate-y-1/2
        mr-3
        px-3
        py-1.5
        bg-white
        text-black
        text-sm
        font-medium
        rounded-md
        whitespace-nowrap
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-200
        pointer-events-none
        z-20
        shadow-md
        after:content-['']
        after:absolute
        after:top-1/2
        after:-translate-y-1/2
        after:left-full
        after:border-[5px]
        after:border-transparent
        after:border-l-white
      ">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightSection;
