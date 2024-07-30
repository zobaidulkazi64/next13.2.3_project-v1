"use client";
import { useState, useEffect } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import DropdownMenuComponent from "./DropdownMenuComponent";
import ThemeSwitch from "../themes/ThemeSwitch";
import Link from "next/link";
;

const navItems = [
  { href: "/me/about", label: "Me", current: true },
  { href: "/projects", label: "Projects" },
  { href: "/tec", label: "Technologies Stack" },
  { href: "/blogs", label: "Blogs" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0  w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-lg" : "shadow-xl"
      }`}
    >
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link href="/">
              ZK
            </Link>
          </div>
          <div className="flex items-center lg:order-2">
            <div className="flex items-center ml-3 space-x-8">
              <div className="flex items-center rounded-full border p-1">
                <span className="ml-1">English</span>
              </div>
              <div className="flex items-center">
               <ThemeSwitch />
              </div>
            </div>
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <Cross1Icon className="w-6 h-6" />
              ) : (
                <HamburgerMenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`block  text-gray-700 rounded lg:hover:bg-purple-100 lg:p-0 lg:rounded py-2 pr-4 pl-3 ${
                      item.current
                        ? "text-primary-700 bg-purple-100 lg:bg-purple-100 lg:text-primary-700"
                        : "text-gray-700 border-b border-gray-100 hover:bg-purple-100 lg:hover:bg-purple-100 lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-purple-300 dark:hover:text-white lg:dark:hover:bg-primary-700 dark:border-gray-700"
                    } lg:p-0`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-7">
              <DropdownMenuComponent />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
