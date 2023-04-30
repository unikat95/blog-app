import React, { useContext } from "react";

import HTMLReactParser from "html-react-parser";
import { AiFillCloseCircle } from "react-icons/ai";
import User from "../User/User";
import BlogContext from "../../context/BlogContext";

export default function PreviewArticle({
  hidden,
  setHidden,
  postTitle,
  postImg,
  postText,
}) {
  const { user } = useContext(BlogContext);

  return (
    <div
      className={
        hidden
          ? "w-screen h-screen fixed top-0 left-0 px-3 xl:px-0 z-[100] bg-black bg-opacity-70 flex justify-center items-center"
          : "w-screen h-screen fixed top-0 left-0 px-3 xl:px-0 z-[100] bg-black bg-opacity-70 hidden justify-center items-center"
      }
    >
      <div className="flex gap-3">
        <div className="w-full h-auto max-h-[80dvh] max-w-[1000px] bg-light shadow-2xl dark:bg-dark p-5 lg:p-6 2xl:p-7 rounded-md flex flex-col items-center text-justify gap-10">
          <div className="w-full flex justify-between items-center">
            <h1 className="flex dark:text-white">Preview:</h1>
            <div className="w-auto h-auto flex items-start">
              <AiFillCloseCircle
                size="30"
                className="cursor-pointer hover:text-red-400 dark:text-white dark:hover:text-red-400"
                onClick={() => setHidden(false)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 overflow-y-auto ">
            <div>
              <User
                direction="flex-col"
                size="text-2xl"
                imgW="w-[56px]"
                imgH="h-[56px]"
                align="items-center"
                el={user}
              />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-300">
              {HTMLReactParser(postTitle)}
            </h1>
            <div>
              {postImg === "" ? (
                ""
              ) : (
                <img
                  src={postImg}
                  alt=""
                  className="w-screen h-full max-h-[22em] object-cover rounded-md"
                />
              )}
            </div>
            <div className="text-primary dark:text-primary-light">
              {HTMLReactParser(postText)}
            </div>
            <div className="w-full flex justify-start items-start">
              <p className="text-sm text-slate-500 font-medium">
                Posted: {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
