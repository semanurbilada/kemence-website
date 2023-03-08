import Icons from "./Icons.js";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function NavItem({ to, item, offset }) {
  return(
    <li>
      <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={offset}
        className="nav-item"
        activeClass="nav-active"
      >
        {item}
      </Link>
    </li>
  );
}

function NavItems() {
  return(
    <>
      <NavItem 
        to="home" 
        offset={-150}
        item="Ana Sayfa" 
      />

      <NavItem 
        to="services" 
        offset={-100}
        item="Hizmetlerimiz" 
      />

      <NavItem 
        to="about" 
        offset={-100}
        item="Hakkımızda" 
      />

      <NavItem 
        to="info" 
        offset={-0}
        item="İletişim" 
      />
    </>
  );
}

export default function Navbar() {
  const [isNavbar, setIsNavbar] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-primary-default");

  useEffect(() => {
    const scroll = () => {
      const homeSection = document.getElementById("home");
      const middleSections = document.getElementById("services", "about");
      const contactSection = document.getElementById("info");

      if (
        window.scrollY >= homeSection.offsetTop &&
        window.scrollY < middleSections.offsetTop
      ) {
        setNavbarBg("bg-primary-default"); 
      } //home
      else if (
        window.scrollY >= middleSections.offsetTop &&
        window.scrollY < contactSection.offsetTop
      ) {
        setNavbarBg("bg-secondary-400"); 
      } //services + about
      else if (window.scrollY >= contactSection.offsetTop) {
        setNavbarBg("bg-secondary-200"); 
      } //info
      else {
        setNavbarBg("bg-primary-default");
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <header className="w-full h-32 flex flex-col items-center justify-center text-lg shadow-xl z-50">
      <div className={`${
          navbarBg
        } px-12 mx-auto w-full h-32 fixed flex items-center justify-between bg-primary-default animation z-50`}>
        <Link 
          to="home"
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
            <NavItems />
          </ul>
        </nav>
      </div>


      {/* mobile navbar items */}
      <div 
        className={`${
          navbarBg
        } ${
            isNavbar ? "mobile-nav-active" : "!opacity-0 !h-0 animation"
          } 
        w-full h-0 opacity-0 md:hidden fixed top-custom bg-primary-default shadow-xl z-50 text-base`}
      >
        <nav className="container">
          <ul className="flex flex-col items-center gap-6">
            <NavItems />
          </ul>
        </nav>
      </div> 
    </header>
  );
}