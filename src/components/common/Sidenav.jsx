import React from "react";
import { Campaigns, Contact, Logo, Reports, Teams } from "./Icons";

const Sidenav = () => {
  return (
    <div className="w-20 hidden md:block h-full fixed shadow-md bg-[#042235]">
      <ul className="relative">
        <li className="sidebarItem">
          <a href="#">
            <Logo />
          </a>
        </li>
        <li className="sidebarItem">
          <a href="#">
            <Campaigns />
          </a>
        </li>
        <li className="sidebarItem bg-[#2995DA]">
          <a href="#">
            <Teams />
          </a>
        </li>
        <li className="sidebarItem">
          <a href="#">
            <Contact />
          </a>
        </li>
        <li className="sidebarItem">
          <a href="#">
            <Reports />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
