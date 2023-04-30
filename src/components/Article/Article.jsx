import React from "react";

import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import User from "../User/User";

export default function Article({ id, img, date, title, text, el, author }) {
  return (
    <>
      <div
        key={id}
        className="w-full h-full flex flex-col overflow-hidden group gap-4 "
      >
        <Link
          to={`/articles/${id}`}
          className="w-full h-full max-h-[16em] flex rounded-lg overflow-hidden"
        >
          <img
            src={img}
            alt=""
            className="w-full h-full min-h-[16em] max-h-[16em] group-hover:scale-[1.1] group-hover:rotate-3 transit object-cover"
          />
        </Link>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Link to={`/articles/${id}`} className="flex flex-col ">
              <span className="text-slate-400 dark:text-slate-500 text-xs font-bold">
                {date}
              </span>
              <h1 className=" text-xl font-bold text-primary dark:text-primary-light">
                {title}
              </h1>
            </Link>
            <p className="text-justify text-sm tracking-tighter text-secondary dark:text-third">
              {text.length >= 130
                ? HTMLReactParser(el.text.slice(0, 120) + "...")
                : HTMLReactParser(text)}
            </p>
          </div>
          <div className="w-full flex justify-between items-end">
            <User
              direction="flex-row"
              size="text-xl"
              imgW="w-[40px]"
              imgH="h-[40px]"
              align="items-start"
              author={author}
            />
          </div>
        </div>
      </div>
    </>
  );
}
