"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { BiHomeAlt2 } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu, GiMoon, GiSun } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { PiChatCircleBold } from "react-icons/pi";
import { IoContract } from "react-icons/io5";
import Link from "next/link";

export const routes = [
  {
    title: "Home",
    href: "#",
    Icon: BiHomeAlt2,
  },

  {
    title: "Contact",
    href: "#",
    Icon: IoContract,
  },
  {
    title: "About",
    href: "#",
    Icon: PiChatCircleBold,
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { setTheme, theme } = useTheme();
  return (
    <nav className="w-full max-w-screen-xl px-4 py-2 mx-auto text-white bg-white dark:bg-black shadow-md rounded-xl bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <a
          href="/"
          className="mr-4 text-black dark:text-white block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
        >
          CCMS
        </a>
        <div className="w-full md:w-auto">
          <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
            {routes.map((route, index) => {
              const { Icon, href, title } = route;
              return (
                <li key={index}>
                  <a
                    href={href}
                    className="flex items-center gap-1 text-black dark:text-white hover:dark:text-blue-400 hover:text-amber-300 transition-all"
                  >
                    <Icon />
                    {title}
                  </a>
                </li>
              );
            })}
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
            <Link href="/signin">Sign In</Link>
          </button>

          {theme === "dark" ? (
            <GiSun
              onClick={() => setTheme("light")}
              className="cursor-pointer text-2xl bg-white dark:bg-black rounded-full p-1"
            />
          ) : (
            <GiMoon
              onClick={() => setTheme("dark")}
              className="cursor-pointer text-2xl bg-black dark:bg-white rounded-full p-1"
            />
          )}
        </div>
        <div className="flex items-center gap-x-4 lg:hidden">
          <button
            className="relative h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={toggle}
          >
            {isOpen ? (
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <AiOutlineClose />
              </span>
            ) : (
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <GiHamburgerMenu />
              </span>
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
            >
              <ul className="grid gap-2">
                {routes.map((route, idx) => {
                  const { Icon } = route;

                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr text-sm from-neutral-800 via-neutral-950 to-neutral-700"
                    >
                      <a
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={
                          "flex items-center justify-between w-full p-5 rounded-md bg-neutral-950"
                        }
                        href={route.href}
                      >
                        <span className="flex gap-1 text-lg">
                          {route.title}
                        </span>
                        <Icon className="text-sm" />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
