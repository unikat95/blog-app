import React, { useContext, useState } from "react";

import BlogContext from "../context/BlogContext";
import EditProfile from "../components/EditProfile/EditProfile";
import SaveProfile from "../components/SaveProfile/SaveProfile";
import User from "../components/User/User";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";

export default function Profile() {
  const { user, setUser } = useContext(BlogContext);
  const [nameInput, setNameInput] = useState(user.name);
  const [surnameInput, setSurnameInput] = useState(user.surname);
  const [ageInput, setAgeInput] = useState(user.age);
  const [aboutInput, setAboutInput] = useState(user.about);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurnameInput(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAgeInput(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAboutInput(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (
      nameInput === "" ||
      surnameInput === "" ||
      ageInput === "" ||
      aboutInput === ""
    )
      return;

    setUser({
      ...user,
      name: nameInput,
      surname: surnameInput,
      age: ageInput,
      about: aboutInput,
    });
    setIsEditing(false);
  };

  return (
    <div className="w-full h-auto max-w-[1300px] flex flex-col md:flex-row gap-5 px-5 md:p-3 2xl:p-0 2xl:gap-10">
      <div className="w-full md:max-w-[30em] flex flex-col rounded-xl shadow-sm gap-5">
        <div>
          <h1 className="text-primary dark:text-primary-light">
            Your profile:
          </h1>
        </div>
        <div className="w-full md:w-auto bg-white dark:bg-dark p-7 rounded-xl">
          <div className="w-full flex flex-col justify-center items-center gap-1 p-5">
            <User
              direction="flex-col"
              size="text-3xl"
              imgW="w-[64px]"
              imgH="h-[64px]"
              author={user}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col gap-1 relative">
                {isEditing ? (
                  <EditProfile
                    nameInput={nameInput}
                    handleNameChange={handleNameChange}
                    surnameInput={surnameInput}
                    handleSurnameChange={handleSurnameChange}
                    ageInput={ageInput}
                    handleAgeChange={handleAgeChange}
                    aboutInput={aboutInput}
                    handleAboutChange={handleAboutChange}
                    handleSaveClick={handleSaveClick}
                  />
                ) : (
                  <SaveProfile handleEditClick={handleEditClick} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileSideBar />
    </div>
  );
}
