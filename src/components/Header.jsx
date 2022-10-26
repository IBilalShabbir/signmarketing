import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { X, Menu } from "react-feather";
import { NavLink } from "./NavLink";

export default function Header() {
  const [checked, setIsChecked] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  function changeNav() {
    setIsNavOpen(window.innerWidth > 1000);
  }
  useEffect(() => {
    changeNav();
    window.addEventListener("resize", changeNav);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  const navLinks = [
    {
      label: "Home",
      scrollTo: "home",
      defaultChecked: true,
    },
    {
      label: "About Us",
      scrollTo: "about",
    },
    {
      label: "Projects",
      scrollTo: "projects",
    },
    {
      label: "Products",
      scrollTo: "products",
    },
    {
      label: "Contact",
      scrollTo: "contact",
    },
  ];
  return (
    <div className={isScrolling ? "header header__active" : "header"}>
      <div className="header__content">
        <button
          onClick={() => {
            document.getElementById("home").checked = true;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="header__content__logo"
        >
          <img src={logo} alt="logo" />
        </button>
        <button
          className="header__content__nav__menu"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen && (
          <div className="header__content__nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                scrollTo={link.scrollTo}
                label={link.label}
                checked={checked}
                setIsChecked={setIsChecked}
                setIsNavOpen={setIsNavOpen}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
