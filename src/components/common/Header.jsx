import React, { useState } from "react";
import { Search } from "./Icons";

const Header = ({ activeItem, setActiveItem, setSearchValue }) => {
  const handleClick = (cur) => {
    if (cur == "Favorites") {
      setActiveItem({
        All: false,
        Favorites: true,
        Archived: false,
      });
    } else if (cur == "Archived") {
      setActiveItem({
        All: false,
        Favorites: false,
        Archived: true,
      });
    } else {
      setActiveItem({
        All: true,
        Favorites: false,
        Archived: false,
      });
    }
  };

  return (
    <header className="pt-8 bg-white shadow-navBar flex  flex-col px-4 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            width="30"
            height="34"
            viewBox="0 0 30 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icon-teams"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.6875 17H21.25V8.5C21.25 7.8625 20.825 7.4375 20.1875 7.4375H18.0625V5.3125C18.0625 4.675 17.6375 4.25 17 4.25H15.9375V1.0625C15.9375 0.425 15.5125 0 14.875 0C14.2375 0 13.8125 0.425 13.8125 1.0625V4.25H12.75C12.1125 4.25 11.6875 4.675 11.6875 5.3125V7.4375H9.5625C8.925 7.4375 8.5 7.8625 8.5 8.5V20.1875H1.0625C0.425 20.1875 0 20.6125 0 21.25V32.9375C0 33.575 0.425 34 1.0625 34H9.5625H12.75H17H20.1875H28.6875C29.325 34 29.75 33.575 29.75 32.9375V18.0625C29.75 17.425 29.325 17 28.6875 17ZM6.375 29.75H3.1875V27.625H6.375V29.75ZM6.375 26.5625H3.1875V24.4375H6.375V26.5625ZM10.625 29.75H7.4375V27.625H10.625V29.75ZM10.625 26.5625H7.4375V24.4375H10.625V26.5625ZM15.9375 18.0625V31.875H13.8125V21.25C13.8125 20.6125 13.3875 20.1875 12.75 20.1875H10.625V9.5625H12.75C13.3875 9.5625 13.8125 9.1375 13.8125 8.5V6.375H15.9375V8.5C15.9375 9.1375 16.3625 9.5625 17 9.5625H19.125V17H17C16.3625 17 15.9375 17.425 15.9375 18.0625ZM22.3125 29.75H19.125V27.625H22.3125V29.75ZM22.3125 26.5625H19.125V24.4375H22.3125V26.5625ZM22.3125 23.375H19.125V21.25H22.3125V23.375ZM26.5625 29.75H23.375V27.625H26.5625V29.75ZM26.5625 26.5625H23.375V24.4375H26.5625V26.5625ZM26.5625 23.375H23.375V21.25H26.5625V23.375Z"
              fill="#A4A6A8"
            />
          </svg>
          <h3 className="text-3xl text-[#1A1919] ml-2 font-semibold">Teams</h3>
        </div>
        <button className="bg-[#40D2BF] h-[40px]  text-white p-4 w-[196px] justify-between flex items-center rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Shape"
              d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z"
              fill="white"
            />
          </svg>
          <span className="font-medium">CREATE NEW TEAM</span>
        </button>
      </div>

      <div className="flex justify-between flex-col lg:flex-row items-center">
        <ul className="flex pt-5 items-center">
          <li
            className={`${
              activeItem.All && "border-[#0083E3]"
            } py-5 px-6 border-b-[2px] cursor-pointer`}
            onClick={() => {
              handleClick("All");
            }}
          >
            <a className="text-lg font-medium">All</a>
          </li>
          <li
            className={`${
              activeItem.Favorites && "border-[#0083E3]"
            } py-5 px-6 border-b-[2px] cursor-pointer`}
            onClick={() => {
              handleClick("Favorites");
            }}
          >
            <a className="text-lg font-medium">Favorites</a>
          </li>
          <li
            className={`${
              activeItem.Archived && "border-[#0083E3]"
            } py-5 px-6 border-b-[2px] cursor-pointer`}
            onClick={() => {
              handleClick("Archived");
            }}
          >
            <a className="text-lg font-medium">Archived</a>
          </li>
        </ul>
        <div className="flex items-center mt-6 lg:mt-0 py-3 lg:py-0">
          <Search />
          <input
            className="ml-2 focus:outline-none"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search team name ..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
