import React from "react";

export default function Hamburger({ open, toggleOpen }) {
  return (
    <>
      <div className="md:hidden">
        <button
          className={
            open
              ? "hamburger open dark:hamburger-dark"
              : "hamburger dark:hamburger-dark "
          }
          onClick={() => toggleOpen()}
        ></button>
      </div>
    </>
  );
}
