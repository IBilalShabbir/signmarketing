import React, { useLayoutEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { logo } from "../assets";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  function checkNavOpenClose() {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
  }, []);
  return (
    <div>
      <div className="sign__header__wraper">
        <div className="sign__header__container">
          <Link to="/" className="sign__header__logo">
            <img src={logo} alt="logo" />
          </Link>
          {isOpen ? (
            <div className="nav__bar__contact">
              <NavLink to="/" className="nav__bar__contant__link" end>
                Home
              </NavLink>
              <NavLink to="/about" className="nav__bar__contant__link">
                About Us
              </NavLink>
              <NavLink to="/project" className="nav__bar__contant__link">
                Project
              </NavLink>
              <NavLink to="/products" className="nav__bar__contant__link">
                Products
              </NavLink>
              <NavLink to="/contact" className="nav__bar__contant__link">
                Contact
              </NavLink>
            </div>
          ) : null}
          <div className="nav__bar__btn__menu">
            <button
              className="nav__btn"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <Close size="20" color="white" />
              ) : (
                <Menu size="20" color="white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
export function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
