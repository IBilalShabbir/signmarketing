import React from "react";

export function NavLink({ label, scrollTo, defaultChecked, onChange }) {
  return (
    <div className="header__content__nav__link">
      <input
        type="radio"
        className="header__content__nav__link__input"
        name="header__content__nav__link"
        defaultChecked={defaultChecked}
        id={scrollTo}
        onClick={() => {
          document
            .getElementById(scrollTo + "__section")
            .scrollIntoView({ behavior: "smooth" });
          onChange();
        }}
      />
      <div className="header__content__nav__link__content">{label}</div>
    </div>
  );
}
