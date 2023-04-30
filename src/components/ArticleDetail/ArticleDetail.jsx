import React, { useContext } from "react";

import HTMLReactParser from "html-react-parser";
import BlogContext from "../../context/BlogContext";
import { useParams } from "react-router-dom";
import User from "../User/User";

export default function ArticleDetail() {
  const { id } = useParams();
  const { articles } = useContext(BlogContext);

  const currentNews = articles.filter((item) => item.id === id);

  return (
    <div className="flex flex-col gap-32">
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1000px] p-4 md:p-4 lg:p-8">
          {currentNews.map((el) => (
            <div className="flex flex-col gap-10" key={el.id}>
              <User
                direction="flex-col"
                size="text-2xl"
                imgW="w-[56px]"
                imgH="h-[56px]"
                align="items-center"
                author={el.author}
              />

              <div className="w-full flex flex-col gap-10 justify-center items-center">
                <h1 className="text-3xl font-bold text-primary dark:text-primary-light">
                  {el.title}
                </h1>
                <img
                  src={el.img}
                  alt=""
                  className="w-full h-full max-h-[22em] object-cover rounded-md"
                />
                <p className="text-justify text-lg tracking-tighter text-secondary dark:text-third">
                  {HTMLReactParser(el.text)}
                </p>
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-full h-[1px] bg-gray-300 border-0 rounded dark:bg-gray-700" />
                </div>
                <div className="w-full flex justify-start items-start">
                  <p className="text-sm text-secondary font-medium">
                    Posted: {el.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
