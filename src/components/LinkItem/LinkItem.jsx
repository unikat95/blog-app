import React from "react";

import { Link } from "react-router-dom";

export default function LinkItem({ path, name, icon, close }) {
  return (
    <>
      <Link
        to={path}
        className="w-full flex items-center gap-2 py-4 px-4 md:px-5 text-xl text-primary dark:text-primary-light  border-t-[1px] dark:border-primary-dark md:border-0 md:text-base md:font-medium md:gap-1 md:justify-center"
        onClick={close}
      >
        {icon}
        {name}
      </Link>
    </>
  );
}
