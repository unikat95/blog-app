import React from "react";

import LinkItem from "../LinkItem/LinkItem";
import { HiHome } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

export default function Menu({ open, close }) {
  return (
    <>
      <ul
        className={
          open
            ? "bg-secondary-light dark:bg-secondary-dark w-[100svw] h-[100dvh] fixed right-0 top-0 flex flex-col justify-between items-end transit md:relative md:translate-x-0 md:transition-none md:bg-transparent md:w-auto md:h-auto md:flex-row md:justify-between md:dark:bg-transparent md:items-center md:gap-5 overflow-hidden"
            : "bg-secondary-light dark:bg-secondary-dark w-[100svw] h-[100dvh] fixed right-0 top-0 flex flex-col justify-between items-end translate-x-full transit md:relative md:translate-x-0 md:transition-none md:bg-transparent md:w-auto md:h-auto md:flex-row md:justify-between md:dark:bg-transparent md:items-center md:gap-5"
        }
      >
        <div></div>
        <div className="w-full md:flex">
          <li className="w-full">
            <LinkItem path="/" name="Home" icon={<HiHome />} close={close} />
          </li>
          <li>
            <LinkItem
              path="/articles"
              name="Articles"
              icon={<MdArticle />}
              close={close}
            />
          </li>
          <li className="w-full">
            <LinkItem
              path="/profile/"
              name="Profile"
              icon={<FaUser />}
              close={close}
            />
          </li>
          <li className="w-full border-b-[1px] dark:border-primary-dark md:border-b-0">
            <LinkItem
              path="/admin-panel"
              name="Panel"
              icon={<RiAdminFill />}
              close={close}
            />
          </li>
        </div>
        <DarkModeSwitch />
      </ul>
    </>
  );
}
