// src/contexts/socialLinks.ts
import { FC } from "react";
import {
  FacebookIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  TelegramIcons,
  XIcon,
  WhatsappIcon,
} from "@/assets/icons";

interface SocialLink {
  name: string;
  icon: FC<any>;
  link: string;
  className?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "linkedin",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/zobaidulkazi",
  },
  {
    name: "X",
    icon: XIcon,
    link: "https://x.com/zobaidulkazi",
  },
  {
    name: "github",
    icon: GitHubIcon,
    link: "https://github.com/zobkazi",
  },
  { name: "telegram", icon: TelegramIcons, link: "https://t.me/zobaidulkazi" },
  {
    name: "whatsapp",
    icon: WhatsappIcon,
    link: "https://wa.me/qr/64F7OAROYCVLP1",
  },
  { name: "discord", icon: DiscordIcon, link: "https://discord.gg/Anes3kYdRT" },
  {
    name: "Facebook",
    icon: FacebookIcon,
    link: "https://facebook.com/zobkazi",
  },
];

