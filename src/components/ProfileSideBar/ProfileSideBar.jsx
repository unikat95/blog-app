import React, { useContext, useState } from "react";

import HTMLReactParser from "html-react-parser";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import BlogContext from "../../context/BlogContext";

const pageSize = 6;

export default function ProfileSideBar() {
  const { id } = useParams();
  const { articles } = useContext(BlogContext);
  const userArticles = articles.filter((art) => art.author.id === id);
  const [currentPage, setCurrentPage] = useState(0);

  const getCurrentPage = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const reverseArticles = [...userArticles].reverse();
    return reverseArticles.slice(startIndex, endIndex);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col gap-5">
        <div>
          <h1 className="text-primary dark:text-third">User articles:</h1>
        </div>
        {userArticles.length <= 0 ? (
          <h1>This user have no articles yet.</h1>
        ) : (
          <>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {getCurrentPage().map((el) => (
                <Link
                  to={`/articles/${el.id}`}
                  key={el.id}
                  className="flex flex-col bg-secondary-light hover:bg-indigo-100 dark:bg-secondary-dark p-5 dark:hover:bg-[#1f283a] rounded-xl gap-3 relative overflow-hidden"
                >
                  <div className="flex flex-col">
                    <span className="text-[.65rem] text-blue-300 font-bold">
                      {el.date}
                    </span>
                    <h1 className="w-full text-primary dark:text-primary-light font-bold">
                      {el.title}
                    </h1>
                  </div>
                  <p className="text-sm dark:text-third">
                    {el.text.length > 120
                      ? HTMLReactParser(el.text.slice(0, 120) + "...")
                      : HTMLReactParser(el.text)}
                  </p>
                </Link>
              ))}
            </div>
            <div className="w-full flex flex-row justify-center md:justify-end items-center py-5">
              {userArticles.length <= 6 ? (
                <></>
              ) : (
                <ReactPaginate
                  pageCount={Math.ceil(userArticles.length / pageSize)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName={
                    "flex justify-center space-x-1 dark:text-white"
                  }
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
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
