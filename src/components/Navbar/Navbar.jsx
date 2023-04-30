import React, { useContext, useState } from "react";

import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import BlogContext from "../../context/BlogContext";

export default function Navbar() {
  const [scroll, setScroll] = useState(true);
  const { open, setOpen } = useContext(BlogContext);

  const navStyle =
    "w-full h-auto bg-primary-light dark:bg-primary-dark py-5 fixed flex justify-center items-center transit-bg z-[200]";
  const navOpenStyle =
    "w-full h-auto bg-secondary-light dark:bg-secondary-dark fixed flex justify-center items-center transit-bg shadow-[0_10px_20px_-15px_rgba(0,0,0,0.3)] z-[200]";

  function toggleOpen() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setScroll(false) : setScroll(true);
  });

  return (
    <nav className={scroll ? navStyle : navOpenStyle}>
      <div className="w-full max-w-[1300px] flex flex-row justify-between items-center p-4 md:py-2 2xl:px-0">
        <Logo />
        <Menu open={open} close={closeMenu} />
        <Hamburger open={open} toggleOpen={toggleOpen} />
      </div>
    </nav>
  );
}
