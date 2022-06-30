import React, { useState } from "react";
import { Search, Teams } from "./Icons";

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
          <Teams fill="#B3B3B3" />
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
