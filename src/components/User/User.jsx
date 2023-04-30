import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BlogContext from "../../context/BlogContext";

export default function User({ direction, size, imgW, imgH, align }) {
  const { user } = useContext(BlogContext);

  return (
    <>
      <Link to={`/profile`}>
        <div
          className={`w-full h-full flex ${direction} justify-center items-center gap-2`}
        >
          <div
            className={`flex flex-row justify-center items-center bg-blue-400 text-white ${size} text-bold rounded-full ${imgW} ${imgH}`}
          >
            <span>{user.name.slice(0, 1)}</span>
            <span>{user.surname.slice(0, 1)}</span>
          </div>
          <div className={`flex flex-col justify-center ${align}`}>
            <h3 className="text-sm text-slate-600 dark:text-slate-300 font-bold">
              {user.name} {user.surname}
            </h3>
            <h3 className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {user.about}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
}
