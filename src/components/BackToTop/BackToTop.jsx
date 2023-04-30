import React from "react";

import { BiUpArrowAlt } from "react-icons/bi";
import { useState } from "react";

export default function BackToTop() {
  const [scroll, setScroll] = useState(true);

  window.addEventListener("scroll", () => {
    window.scrollY > 400 ? setScroll(false) : setScroll(true);
  });

  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={
          scroll
            ? "fixed right-5 bottom-5 z-[100] translate-y-20 transition-transform duration-1000 bg-blue-500 p-2 text-white text-2xl rounded-full"
            : "fixed right-5 bottom-5 z-[100] transition-transform duration-1000 bg-blue-500 p-2 text-white text-2xl rounded-full"
        }
      >
        <BiUpArrowAlt />
      </button>
    </>
  );
}
