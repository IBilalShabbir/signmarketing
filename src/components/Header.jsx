import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { X, Menu } from "react-feather";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    function changeNav() {
      setIsNavOpen(window.innerWidth > 1000);
    }

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
            {navLinks.map((link, index) => (
              <NavLink
                scrollTo={link.scrollTo}
                label={link.label}
                defaultChecked={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function NavLink({ label, scrollTo, defaultChecked }) {
  return (
    <div className="header__content__nav__link">
      <input
        type="radio"
        className="header__content__nav__link__input"
        name="header__content__nav__link"
        defaultChecked={defaultChecked}
        id={scrollTo}
        onChange={() => {
          document
            .getElementById(scrollTo + "__section")
            .scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div className="header__content__nav__link__content">{label}</div>
    </div>
  );
}
