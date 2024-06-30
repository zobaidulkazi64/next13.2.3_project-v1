import React from "react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import XIcon from "@/components/icons/XIcon";
import TelegramIcons from "@/components/icons/TelegramIcons";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://facebook.com/zobaidulkazi",
    ariaLabel: "Facebook",
    Icon: FacebookIcon,
  },
  { href: "https://x.com/zobaidulkazi", ariaLabel: "X", Icon: XIcon },
  {
    href: "https://chat.whatsapp.com/FbklXHqN0RL753iaPbm6Dq",
    ariaLabel: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://linkedin.com/in/zobaidulkazi",
    ariaLabel: "LinkedIn",
    Icon: LinkedInIcon,
  },
  { href: "https://github.com/zobkazi", ariaLabel: "GitHub", Icon: GitHubIcon },
  {
    href: "https://t.me/zobaidulkazi",
    ariaLabel: "Telegram",
    Icon: TelegramIcons,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="  py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          {socialLinks.map(({ href, ariaLabel, Icon }) => (
            <Link
              key={ariaLabel}
              href={href}
              aria-label={ariaLabel}
              className=" shadow-lg shadow-gray-500/50 p-2 rounded-full dark:text-gray-700 hover:text-gray-400"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
