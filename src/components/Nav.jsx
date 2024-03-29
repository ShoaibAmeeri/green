

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full dark:bg-gray-400 ps-12 md:h-24 sticky top-0 bg-white shadow-lg mb-6 z-10 pe-12">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="logo w-64">
              <Link to={"/"}>
                <img
                  src="https://thechildrengreenbook.net/assets/images/_logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex lg:space-x-6 md:space-x-4 md:space-y-0 ">
              <li className="text-black font-semibold text-lg   hover:text-green-500">
                <Link to={"/"}>HOME</Link>
              </li>
              <li className="text-black font-semibold text-lg hover:text-green-500">
                <Link to={"/about"}>ABOUT US</Link>
              </li>
              <li className="text-black font-semibold text-lg hover:text-green-500">
                <Link to={"/review"}>REVIEW</Link>
              </li>
              <li className="text-black font-semibold text-lg hover:text-green-500">
                <Link to={"/books"}>BOOKS</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 md:hidden ">
              <Link
                to={"/login"}
                className="inline-block w-full px-4 py-2 text-center text-white bg-green-500 rounded-md shadow hover:bg-green-600"
              >
                Sign in
              </Link>
              <Link
                to={"/signup"}
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-gray-100 rounded-md shadow hover:bg-gray-300"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden  md:flex gap-4">
          <Link
            to={"/login"}
            className="px-4 py-2 text-white bg-green-500 rounded-md  hover:bg-green-600"
          >
            Sign in
          </Link>
          <Link
            to={"signup"}
            className="px-4 py-2 text-gray-800 bg-gray-100 rounded-md shadow hover:bg-gray-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
