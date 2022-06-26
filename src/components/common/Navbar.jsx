import React from "react";

const Navbar = () => {
  return (
    <nav className="ml-20 h-20 bg-white shadow-navBar w-full flex items-center justify-between px-12">
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M4 11V1H20V11"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 15V23H1V15H8V18H16V15H23Z"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9 6H15"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9 10H15"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </g>
            </svg>
            <p className="absolute left-4 -top-3 bg-[#2995DA] h-7 w-7 text-center text-white rounded-full">3</p>
          </a>
        </li>
        <li className="px-6">
          <a className="flex items-center">
            {" "}
            Hello, John
            <img
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              class="rounded-full h-9 w-9 ml-2"
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
