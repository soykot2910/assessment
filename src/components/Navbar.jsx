import React, { useState } from "react";
import { MenuNotification } from "./Icons";

const Navbar = ({ userInfo }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="h-20 bg-white navbar shadow-navBar flex items-center justify-between px-4 lg:px-12 boder-b-[1px] border-[#E2E2E2]">
      <ul className="flex">
        <li className="pl-0 pr-5 py-6 border-r-[1px] border-[#E2E2E2]">
          <a className="text-lg text-[#1A1919]">NARWHAL</a>
        </li>
        <li className="px-5 py-6 ">
          <a className="text-lg text-[#000000]">Teams</a>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="px-6">
          <a className="relative">
            <MenuNotification />
            <p className="absolute left-4 -top-3 bg-[#2995DA] h-7 w-7 text-center text-white rounded-full">
              {userInfo.notifications_count}
            </p>
          </a>
        </li>
        <li className="px-6">
          <a className="flex items-center">
            {" "}
            Hello, {userInfo.name}
            <img
              src={userInfo.avatar}
              className="rounded-full h-9 w-9 ml-2"
              alt=""
            />
          </a>
        </li>
        <li>
          <div className="flex items-center justify-center h-screen">
            <div className="relative inline-block">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md  focus:outline-none"
              >
                <svg
                  className="w-5 h-5 -ml-7 text-gray-800 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`${
                  !isProfileOpen && "hidden"
                } absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl`}
              >
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {" "}
                  your profile{" "}
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {" "}
                  Your projects{" "}
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {" "}
                  Help{" "}
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {" "}
                  Settings{" "}
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {" "}
                  Sign Out{" "}
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
