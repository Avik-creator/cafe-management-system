"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { setTheme, theme } = useTheme();
  return (
    <nav className="block w-full max-w-screen-xl px-4 py-2 mx-auto text-white bg-white dark:bg-black shadow-md rounded-xl  bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <a
          href="/"
          className="mr-4  text-black dark:text-white block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
        >
          CCMS
        </a>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 font-sans text-sm antialiase font-medium leading-normal gap-x-2 text-blue-gray-900">
              <a
                href="/"
                className="flex  text-black dark:text-white items-center"
              >
                Home
              </a>
            </li>
            <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
              <a
                href="/about"
                className="flex items-center  text-black dark:text-white hover:from-blue-500 to-gray-600"
              >
                About
              </a>
            </li>
            <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
              <a
                href="/contact"
                className="flex  text-black dark:text-white items-center"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            className="hidden select-none rounded-lg bg-gradient-to-tr from-blue-600 to-gray-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
          >
            <Link href="/signup">Sign Up</Link>
          </button>
          <button
            className="hidden select-none rounded-lg bg-gradient-to-tr from-blue-600 to-gray-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
          >
            {/* <span>Sign in</span> */}
            <Link href="/signin">Sign In</Link>
          </button>

          {theme == "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-toggle-on"
              viewBox="0 0 16 16"
              onClick={() => setTheme("light")}
            >
              <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="dark"
              className="bi bi-toggle-off"
              viewBox="0 0 16 16"
              onClick={() => setTheme("dark")}
            >
              <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5" />
            </svg>
          )}
        </div>
        <div className="flex items-center gap-x-4 lg:hidden">
          <button
            className="relative h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={toggle}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
