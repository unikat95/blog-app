import React, { useContext } from "react";

import BlogContext from "../../context/BlogContext";
import Article from "../Article/Article";

export default function LatestArticles() {
  const { articles } = useContext(BlogContext);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-slate-800 dark:text-slate-300 text-3xl font-medium">
          Latest articles:
        </h1>
      </div>
      <div className="w-full max-w-[1500px] grid grid-rows-[1fr] items-start sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles
          .slice(-3)
          .reverse()
          .map((el) => (
            <Article
              key={el.id}
              id={el.id}
              img={el.img}
              date={el.date}
              title={el.title}
              text={el.text}
              el={el}
              author={el.author}
            />
          ))}
      </div>
    </div>
  );
}
