import React, { useEffect, useState } from "react";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleDarkMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div className="flex p-4 md:p-0">
        <button onClick={() => toggleDarkMode()}>
          {theme === "light" ? (
            <MdDarkMode
              size="20"
              className="border-solid border-2 border-slate-200 bg-slate-100 text-cyan-800 rounded-lg w-[2em] h-[2em] p-1 text-xl md:text-base"
            />
          ) : (
            <MdOutlineLightMode
              size="20"
              className="border-solid border-2 border-slate-800 bg-slate-700 text-yellow-400 rounded-lg w-[2em] h-[2em] p-1 text-xl md:text-base"
            />
          )}
        </button>
      </div>
    </>
  );
}
