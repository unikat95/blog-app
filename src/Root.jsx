import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BlogContext from "./context/BlogContext";
import BackToTop from "./components/BackToTop/BackToTop";

export default function Root() {
  const { open } = useContext(BlogContext);

  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div className="w-auto min-h-screen bg-primary-light dark:bg-primary-dark flex flex-col items-center justify-between">
      <Navbar />
      <ScrollToTop />
      <BackToTop />
      <div className="w-full max-w-[1300px] mt-32">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
