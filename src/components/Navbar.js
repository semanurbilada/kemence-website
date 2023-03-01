import { useState } from "react";
import { Link } from "react-scroll";
import Icons from "./Icons.js";

export default function Navbar() {
  const [isNavbar, setIsNavbar] = useState(false);

  return (
    <header className="w-full h-32 flex flex-col items-center justify-center text-lg shadow-xl z-50">
      <div className="px-12 mx-auto w-full h-32 fixed flex items-center justify-between bg-primary-default z-50">
        <Link to="home"
          smooth={true}
          offset={-150}
          duration={500}>
          <img 
            className="h-auto md:w-48 w-44 hover:scale-105 animation cursor-pointer"
            src="/logo.png" alt="Navbar Logo" 
          />
        </Link>

        <Icons 
          iconName="menu"
          className="md:hidden absolute right-12 cursor-pointer"
          onClick={() => setIsNavbar(!isNavbar)}
        />

        <nav>
          <ul className="md:flex hidden gap-x-10">
            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}>Ana Sayfa
              </Link>
            </li>

            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Hizmetlerimiz
              </Link>
            </li>

            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Hakkımızda
              </Link>
            </li>

            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="info"
                spy={true}
                smooth={true}
                duration={500}>İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>


      {/* mobile navbar items */}
      <div 
        className={`${
          isNavbar ? "mobile-nav-active" : "!opacity-0 !h-0 animation"
        } w-full h-0 opacity-0 md:hidden fixed top-custom bg-primary-default shadow-xl z-50 text-base`}
      >
        <nav className="container">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}>Ana Sayfa
              </Link>
            </li>

            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Hizmetlerimiz
              </Link>
            </li>

            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Hakkımızda
              </Link>
            </li>

            <li>
              <Link 
                className="nav-item"
                activeClass="nav-active"
                to="info"
                spy={true}
                smooth={true}
                duration={500}>İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div> 
    </header>
  );
}