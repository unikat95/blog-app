import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full flex flex-row justify-center items-center py-10 text-sm text-slate-500 dark:text-slate-300 font-medium gap-1">
      <p>2023 by</p>
      <Link
        to="/profile"
        className="hover:text-blue-500 hover:dark:text-blue-400 font-bold"
      >
        Admin
      </Link>
    </div>
  );
}
