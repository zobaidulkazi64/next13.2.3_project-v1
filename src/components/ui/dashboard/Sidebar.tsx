"use client";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import {
  PlusIcon,
  MixIcon,
  CubeIcon,
  BarChartIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useAuth } from "./AuthContext";

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-20 h-full border-r space-y-8 bg-purple-100">
      <div className="flex flex-col h-full">
        <div className="h-20 flex items-center justify-center px-8">
          {user ? user.email : "Log In"}
        </div>
        <div className="flex-1 flex flex-col h-full">
          <ul className="px-4 text-sm font-medium flex-1">
            <li>
              <Link
                href="/me"
                className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 group"
              >
                <PlusIcon className="text-gray-500" />
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Overview
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/me/integration"
                className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 group"
              >
                <MixIcon className="text-gray-500" />
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Integration
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/me/plans"
                className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 group"
              >
                <CubeIcon className="text-gray-500" />
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Plans
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/me/transactions"
                className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 group"
              >
                <BarChartIcon className="text-gray-500" />
                <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                  Chats
                </span>
              </Link>
            </li>
          </ul>
          <div className="relative py-4 px-4 border-t">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="outline-none">
                <PersonIcon className="text-gray-500 w-8 h-8" />
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="absolute bottom-4 left-10 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600 p-2">
                  <DropdownMenu.Item asChild className="outline-none">
                    <Link
                      href="/dashboard"
                      className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      Dashboard
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild className="outline-none">
                    <Link
                      href="/me/settings"
                      className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      Settings
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild className="outline-none">
                    <Link
                      href="/dashboard/profile"
                      className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      Profile
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild className="outline-none">
                    <button
                      type="button"
                      onClick={logout}
                      className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      Logout
                    </button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
