import React, { useContext, useState } from "react";

import HTMLReactParser from "html-react-parser";
import BlogContext from "../../context/BlogContext";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const pageSize = 6;

export default function Articles() {
  const { articles } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(0);

  const getCurrentPage = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const reversedArticles = [...articles].reverse();
    return reversedArticles.slice(startIndex, endIndex);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {getCurrentPage().map((el) => (
          <div
            key={el.id}
            className="w-full flex flex-row md:flex-row overflow-hidden group"
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
            <div className="w-full flex flex-col justify-between px-5 py-0 gap-8">
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
                    {el.text.length > 220
                      ? HTMLReactParser(el.text.slice(0, 130) + "...")
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
      <div className="w-full flex flex-row justify-center md:justify-end items-center py-5">
        <ReactPaginate
          pageCount={Math.ceil(articles.length / pageSize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"flex justify-center space-x-1 dark:text-white"}
          activeClassName={"active"}
          pageLinkClassName={
            "py-1 px-3 rounded text-primary-dark hover:text-primary-dark dark:hover:text-primary-dark dark:text-primary-light hover:bg-gray-300 focus:outline-none"
          }
          activeLinkClassName={
            "bg-blue-500 text-primary-light hover:text-primary-dark dark:text-primary-dark py-1 px-3 rounded focus:outline-none"
          }
          disabledClassName={
            "opacity-50 cursor-not-allowed text-primary-dark dark:text-primary-light"
          }
        />
      </div>
    </>
  );
}
