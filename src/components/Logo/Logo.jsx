import React from "react";

import { Link } from "react-router-dom";
import { BsPen } from "react-icons/bs";

export default function Logo() {
  return (
    <>
      <div className="z-10">
        <h1>
          <Link
            to="/"
            className="text-2xl text-primary dark:text-primary-light font-bold flex justify-center items-center gap-1"
          >
            <BsPen />
            Blog
          </Link>
        </h1>
      </div>
    </>
  );
}
