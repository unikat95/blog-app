import React, { useContext } from "react";
import BlogContext from "../../context/BlogContext";
import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

export default function AllArticles() {
  const { articles } = useContext(BlogContext);

  const reversedArticles = [...articles].reverse();

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-5">
        {reversedArticles.map((el) => (
          <div
            key={el.id}
            className="w-full flex flex-col md:flex-row overflow-hidden group gap-4"
          >
            <Link
              to={`/articles/${el.id}`}
              className="w-full md:max-w-[35%] lg:max-w-[25%] overflow-hidden rounded-lg"
            >
              <img
                src={el.img}
                alt=""
                className="w-full h-full min-h-[10em] object-cover group-hover:scale-[1.1] group-hover:rotate-3 transit"
              />
            </Link>
            <div className="w-full flex flex-col justify-between py-0 gap-8">
              <div className="w-full h-full flex flex-col justify-between gap-1">
                <Link to={`/articles/${el.id}`} className="flex flex-col gap-1">
                  <span className="text-third text-xs font-bold uppercase">
                    Posted {el.date}
                  </span>
                  <h1 className="text-xl text-primary font-bold dark:text-primary-light">
                    {el.title}
                  </h1>
                </Link>
                <div>
                  <p className="text-sm text-secondary dark:text-third">
                    {el.text.length > 400
                      ? HTMLReactParser(el.text.slice(0, 400) + "...")
                      : HTMLReactParser(el.text)}
                  </p>
                </div>
                <div className="w-full flex justify-between items-end">
                  <Link
                    to={`/articles/${el.id}`}
                    className="underline text-primary dark:text-primary-light hover:text-blue-500 dark:hover:text-blue-400 font-medium"
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
