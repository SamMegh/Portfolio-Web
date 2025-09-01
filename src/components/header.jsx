import logo from "../assets/logo.jpg";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex justify-between items-center bg-[#000000] px-[4vw] py-0">
      {/* Logo */}
      <div className="logo">
        <img
          className="w-[100px] p-3 rounded-full overflow-hidden"
          src={logo}
          alt="logo"
        />
      </div>

      {/* Hamburger Button - visible only on mobile */}
      <div className="flex-1 flex justify-center sm:hidden">
        <button
          onClick={() => setMenu(prev => !prev)}
          className="flex flex-col justify-center items-center space-y-1.5"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="menu hidden sm:inline-block">
        <ul>
          <li className="homeScreenListItems">
            <a className="homeScreentListItemAnchorTag" href="#">
              Home
            </a>
          </li>
          <li className="homeScreenListItems">
            <a className="homeScreentListItemAnchorTag" href="#">
              Projects
            </a>
          </li>
          <li className="homeScreenListItems">
            <a className="homeScreentListItemAnchorTag" href="#">
              Qualification
            </a>
          </li>
          <li className="homeScreenListItems">
            <a className="homeScreentListItemAnchorTag" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="menu absolute top-[100%] left-0 w-full bg-black text-white sm:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Home
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Projects
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Qualification
              </a>
            </li>
            <li className="homeScreenListItems">
              <a className="homeScreentListItemAnchorTag" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

