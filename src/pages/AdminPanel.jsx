import React, { useContext, useState, useRef, useEffect } from "react";

import { v4 as uuid } from "uuid";
import BlogContext from "../context/BlogContext";
import JoditEditor from "jodit-react";
import PreviewArticle from "../components/PreviewArticle/PreviewArticle";

export default function AdminPanel() {
  const editor = useRef(null);
  const { setArticles, user } = useContext(BlogContext);
  const [hidden, setHidden] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    if (posted) {
      const inter = setInterval(() => {
        setPosted(false);
      }, 3000);
      return () => clearInterval(inter);
    }
  }, [posted, setPosted]);

  const [postTitle, setPostTitle] = useState("");
  const [postImg, setPostImg] = useState("");
  const [postText, setPostText] = useState("");

  const previewPost =
    postTitle === "" || postImg === "" || postText === "" ? true : false;

  function handleSubmit(e) {
    e.preventDefault();

    if (postTitle === "" || postImg === "" || postText === "") return;

    setArticles((currentPosts) => {
      return [
        ...currentPosts,
        {
          id: uuid(),
          title: postTitle,
          img: postImg,
          text: postText,
          date: new Date().toLocaleString(),
          author: user.id,
        },
      ];
    });

    setPostTitle("");
    setPostImg("");
    setPostText("");
    setPosted(true);
  }

  return (
    <div className="flex flex-col p-4 2xl:p-0 gap-5 relative">
      <div className="w-full h-auto max-w-[1500px] bg-light dark:bg-secondary-dark p-5 lg:p-7 2xl:p-10 rounded-md flex flex-col gap-10">
        <div>
          <h1 className="text-xl font-medium text-primary dark:text-primary-light">
            Add new article
          </h1>
        </div>
        <div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-primary dark:text-primary-light text-md font-medium"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="bg-primary-light dark:bg-primary-dark border-[1px] text-primary dark:text-primary-light dark:border-primary-dark p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Article title..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="img"
                className="text-primary dark:text-primary-light text-md font-medium"
              >
                Image(link):
              </label>
              <input
                type="text"
                id="img"
                value={postImg}
                onChange={(e) => setPostImg(e.target.value)}
                className="bg-primary-light dark:bg-primary-dark border-[1px] text-primary dark:text-primary-light dark:border-primary-dark p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Article image..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="text"
                className="text-md font-medium text-primary dark:text-primary-light"
              >
                Text:
              </label>
              <JoditEditor
                ref={editor}
                value={postText}
                onChange={(newText) => setPostText(newText)}
                className="dark:text-slate-900"
                required
              />
            </div>
            <div className="w-full h-auto flex justify-end mt-5 gap-5">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-4 md:py-3 md:px-5 rounded-lg text-xs md:text-sm uppercase cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={posted}
              >
                Add article
              </button>
              <div
                className={
                  previewPost
                    ? "bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-4 md:py-3 md:px-5 rounded-lg text-xs md:text-sm uppercase 123cursor-pointer hidden"
                    : "bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-4 md:py-3 md:px-5 rounded-lg text-xs md:text-sm uppercase cursor-pointer"
                }
                onClick={() => setHidden(true)}
              >
                Preview article
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          !posted
            ? "w-auto h-auto flex justify-center items-center absolute top-0 left-[50%] z-[100] translate-x-[-50%] translate-y-[-100vw] transition-transform duration-300"
            : "w-auto h-auto flex justify-center items-center absolute top-0 left-[50%] z-[100] translate-x-[-50%] translate-y-[-5em] transition-transform duration-300"
        }
      >
        <span className=" bg-blue-400 text-white font-bold text-xs uppercase px-[1em] md:px-[3em] py-[1.5em] rounded-lg text-center">
          Post successfully added.
        </span>
      </div>
      <PreviewArticle
        hidden={hidden}
        setHidden={setHidden}
        postTitle={postTitle}
        postImg={postImg}
        postText={postText}
      />
    </div>
  );
}
