"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import {
  MixIcon,
  AlignBottomIcon,
  AlignRightIcon,
  GearIcon,
  ExitIcon,
  FileIcon,
  PlusIcon,
  CubeIcon,
  BarChartIcon,
} from "@radix-ui/react-icons";

const Sidebar: React.FC = () => {
  const navigation = [
    {
      href: "/me",
      name: "Overview",
      icon: PlusIcon,
    },
    {
      href: "/me/integration",
      name: "Integration",
      icon: MixIcon,
    },
    {
      href: "/me/plans",
      name: "Plans",
      icon: CubeIcon,
    },
    {
      href: "/me/transactions",
      name: "Chats",
      icon: BarChartIcon,
    },
  ];

  const navsFooter = [
    {
      href: "/faq",
      name: "Help",
      icon: FileIcon,
    },
    {
      href: "/me/settings",
      name: "Settings",
      icon: GearIcon,
    },
    {
      href: "/logout",
      name: "Logout",
      icon: ExitIcon,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-20 h-full border-r space-y-8">
      <div className="flex flex-col h-full">
        <div className="h-20 flex items-center justify-center px-8">Log In</div>
        <div className="flex-1 flex flex-col h-full">
          <ul className="px-4 text-sm font-medium flex-1">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                >
                  <item.icon className="text-gray-500" />
                  <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                          </DropdownMenu.Trigger>
            </DropdownMenu.Root>

            <ul className="px-4 pb-4 text-sm font-medium">
              {navsFooter.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                  >
                    <item.icon className="text-gray-500" />
                    <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative py-4 px-4 border-t">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="outline-none">
                  User
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="absolute bottom-4 left-10 w-64 rounded-lg bg-white shadow-md border text-sm text-gray-600 p-2">
                    <span className="block text-gray-500/80 p-2">
                      vienna@gmail.com
                    </span>
                    <DropdownMenu.Item asChild className="outline-none">
                      <Link
                        href="/dashboard"
                        className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150"
                      >
                        Dashboard
                      </Link>
                    </DropdownMenu.Item>
                    <div className="relative rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 absolute right-1 inset-y-0 my-auto pointer-events-none"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <select className="w-full cursor-pointer appearance-none bg-transparent p-2 outline-none">
                        <option disabled selected>
                          Theme
                        </option>
                        <option>Dark</option>
                        <option>Light</option>
                      </select>
                    </div>
                    <DropdownMenu.Item asChild className="outline-none">
                      <button className="block w-full p-2 text-left rounded-md hover:bg-gray-50 active:bg-gray-100 duration-150">
                        Logout
                      </button>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
