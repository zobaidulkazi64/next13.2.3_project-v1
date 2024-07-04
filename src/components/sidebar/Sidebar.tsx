"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  HomeIcon,
  AtSymbolIcon,
  StarIcon,
  UserPlusIcon,
  AcademicCapIcon,
  SquaresPlusIcon,
  DocumentTextIcon,
  CogIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

const NavigationData = [
  { href: "/", label: "Home", icon: <HomeIcon className="w-6 h-6" /> },
  {
    href: "/github-stats",
    label: "Github Stats",
    icon: <StarIcon className="w-6 h-6" />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "/about",
    label: "About",
    icon: <UserPlusIcon className="w-6 h-6" />,
  },
  {
    href: "/services",
    label: "Services",
    icon: <AcademicCapIcon className="w-6 h-6" />,
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: <SquaresPlusIcon className="w-6 h-6" />,
  },
  {
    href: "/skills",
    label: "Skills",
    icon: <DocumentTextIcon className="w-6 h-6" />,
  },
  {
    href: "/blogs",
    label: "Blogs",
    icon: <AtSymbolIcon className="w-6 h-6" />,
  },
  { href: "/contact", label: "Contact", icon: <CogIcon className="w-6 h-6" /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div
        onClick={handleOpen}
        className="md:hidden shadow-2xl cursor-pointer fixed top-4 left-4 z-30"
      >
        <AdjustmentsHorizontalIcon
          className="w-6 h-6 text-green-600 shadow-green-600/100"
          aria-hidden="true"
        />
      </div>
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-slate-200 dark:bg-gray-800 w-40 md:w-48 lg:w-64 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40 shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100`}
      >
        <div className="mt-5">
          <div className="text-3xl  font-bold mb-10">
            <Link href="/" onClick={handleClose}>
              <h1 className="font-extralight">Zobaidul Kazi</h1>
            </Link>
          </div>
          <ul className="space-y-5">
            {NavigationData.map(({ href, label, icon }) => (
              <li key={href} onClick={handleClose}>
                <Link
                  href={href}
                  className={`flex items-center text-black dark:text-lime-50 ${
                    pathUrl === href ? "text-blue-500" : ""
                  }`}
                >
                  <div className="hover:bg-green-300 dark:hover:bg-gray-600 rounded-lg">
                    <div className="flex items-center gap-2 p-2">
                      <span>{icon}</span>
                      {label}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-black dark:text-yellow-50 text-xs md:text-sm">
            Power By{" "}
            <Link
              className="font-bold underline"
              href="https://kazibyte.github.io"
              target="_blank"
            >
              Kazi Byte
            </Link>{" "}
            <span className="text-slate-950 dark:text-white font-extrabold">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
