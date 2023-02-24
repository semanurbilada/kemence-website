import { useState } from "react";
//import { Link, useLocation } from "react-router-dom";
import Icons from "./Icons.js";

export default function Navbar() {
  //const location = useLocation().pathname;
  const [isNavbar, setIsNavbar] = useState(false);

  return (
    <header className="relative bg-primary-transparent shadow-xl h-32 flex flex-col items-center justify-center">
      <div className="container flex items-center justify-between md:gap-0 gap-40 text-lg">
        <img
          className="h-auto md:w-48 w-44 hover:scale-105 animation"
          src={`${process.env.PUBLIC_URL}/logo.jpg`}
          alt="Navbar Logo"
        />

        <Icons 
          iconName="menu"
          className="md:hidden absolute right-12 cursor-pointer"
          onClick={() => setIsNavbar(!isNavbar)}
        />

        <nav>
          <ul className="md:flex hidden gap-x-10">
            <li 
              className="nav-item">Ana Sayfa
            </li>

            <li 
              className="nav-item">Hizmetlerimiz
            </li>

            <li 
              className="nav-item">Hakkımızda
            </li>

            <li 
              className="nav-item">İletişim
            </li>
          </ul>
        </nav>
      </div>

      {/* mobile navbar items */}
      <div className={`${
          isNavbar ? "mobile-nav-active" : "!opacity-0 !h-0 animation"
        } w-full h-0 opacity-0 md:hidden absolute top-28 bg-slate-50 border-b-2 border-primary-900 shadow-xl z-50 textbase`}
      >

        <nav className="container">
          <ul className="flex flex-col items-center gap-6">
            <li 
              className="nav-item">Ana Sayfa
            </li>

            <li 
              className="nav-item">Hizmetlerimiz
            </li>

            <li 
              className="nav-item">Hakkımızda
            </li>

            <li 
              className="nav-item">İletişim
            </li>
          </ul>
        </nav>
      </div> 
    </header>
  );
}