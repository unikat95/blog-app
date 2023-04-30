import React, { useContext } from "react";
import BlogContext from "../../context/BlogContext";

export default function SaveProfile({ handleEditClick }) {
  const { user } = useContext(BlogContext);

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">
            Name:
          </h6>
          <div className="flex">
            <input
              type="text"
              value={user.name}
              disabled
              className="w-full bg-gray-100 border-b-[2px] border-gray-300 dark:border-gray-700 dark:bg-darkBg p-2 outline-blue-300 text-slate-500 dark:text-slate-300 rounded-md"
            />
          </div>
        </label>
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">
            Surname:
          </h6>
          <div className="flex">
            <input
              type="text"
              value={user.surname}
              disabled
              className="w-full bg-gray-100 border-b-[2px] border-gray-300 dark:border-gray-700 dark:bg-darkBg p-2 outline-blue-300 text-slate-500 dark:text-slate-300 rounded-md"
            />
          </div>
        </label>
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">Age:</h6>
          <div className="flex">
            <input
              type="text"
              value={user.age}
              disabled
              className="w-full bg-gray-100 border-b-[2px] border-gray-300 dark:border-gray-700 dark:bg-darkBg p-2 outline-blue-300 text-slate-500 dark:text-slate-300 rounded-md"
            />
          </div>
        </label>
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">
            About:
          </h6>
          <div className="flex">
            <input
              type="text"
              value={user.about}
              disabled
              className="w-full bg-gray-100 border-b-[2px] border-gray-300 dark:border-gray-700 dark:bg-darkBg p-2 outline-blue-300 text-slate-500 dark:text-slate-300 rounded-md"
            />
          </div>
        </label>
        <div className="flex justify-center items-center mt-2">
          <button
            onClick={handleEditClick}
            className="w-auto bg-gray-800 dark:bg-gray-100 px-4 py-2 rounded-md text-white dark:text-gray-800"
          >
            Edit profile
          </button>
        </div>
      </div>
    </>
  );
}
