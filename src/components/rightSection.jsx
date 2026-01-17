import React from "react";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

function RightSection({ className }) {
  return (
      <ul className={`flex-col items-center justify-center gap-4 ${className}`}>
        <li>
          <Phone />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Facebook />
        </li>
        <li>
          <Linkedin />
        </li>
      </ul>
  );
}

export default RightSection;
