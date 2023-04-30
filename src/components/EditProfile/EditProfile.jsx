import React from "react";

export default function EditProfile({
  nameInput,
  handleNameChange,
  surnameInput,
  handleSurnameChange,
  ageInput,
  handleAgeChange,
  aboutInput,
  handleAboutChange,
  handleSaveClick,
}) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">
            Name:
          </h6>
          <p className="flex gap-5">
            <input
              type="text"
              value={nameInput}
              onChange={handleNameChange}
              className="w-full bg-blue-100 p-2 outline-blue-300 focus:outline-none border-b-[2px] border-blue-500 dark:bg-gray-700 rounded-md text-slate-500 dark:text-slate-300"
            />
          </p>
        </label>
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">
            Surname:
          </h6>
          <p className="flex gap-5">
            <input
              type="text"
              value={surnameInput}
              onChange={handleSurnameChange}
              className="w-full bg-blue-100 p-2 outline-blue-300 focus:outline-none border-b-[2px] border-blue-500 dark:bg-gray-700 rounded-md text-slate-500 dark:text-slate-300"
            />
          </p>
        </label>
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">Age:</h6>
          <p className="flex gap-5">
            <input
              type="number"
              value={ageInput}
              onChange={handleAgeChange}
              className="w-full bg-blue-100 p-2 outline-blue-300 focus:outline-none border-b-[2px] border-blue-500 dark:bg-gray-700 rounded-md text-slate-500 dark:text-slate-300"
            />
          </p>
        </label>
        <label htmlFor="name" className="flex flex-col gap-2">
          <h6 className="text-sm text-primary dark:text-primary-light">
            About:
          </h6>
          <p className="flex gap-5">
            <input
              type="text"
              value={aboutInput}
              onChange={handleAboutChange}
              className="w-full bg-blue-100 p-2 outline-blue-300 focus:outline-none border-b-[2px] border-blue-500 dark:bg-gray-700 rounded-md text-slate-500 dark:text-slate-300"
            />
          </p>
        </label>
        <div className="flex justify-center items-center mt-2">
          <button
            onClick={handleSaveClick}
            className="w-auto bg-blue-500 px-4 py-2 rounded-md text-white"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
