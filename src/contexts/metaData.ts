// metaData.ts

import { MetaDataLinks, MetaDataTitle, MetaDataSocial } from "@/types/metaData";

export const metaDataLinks: MetaDataLinks = {
  faviconLink32x32:
    "https://github.com/zobkazi/zobkazi.github.io/blob/main/public/favicons/favicon-32x32.png?raw=true",
  faviconLink16x16:
    "https://github.com/zobkazi/zobkazi.github.io/blob/main/public/favicons/favicon-16x16.png?raw=true",
  faviconLinkAppleTouchIcon:
    "https://github.com/zobkazi/zobkazi.github.io/blob/main/public/favicons/apple-touch-icon.png?raw=true",
  androidChromeLink192x192:
    "https://github.com/zobkazi/zobkazi.github.io/blob/main/public/favicons/android-chrome-192x192.png?raw=true",
  androidChromeLink512x512:
    "https://github.com/zobkazi/zobkazi.github.io/blob/main/public/favicons/android-chrome-512x512.png?raw=true",
};

export const metaDataTitle: MetaDataTitle = {
  title: "Zobaidul Kazi",
  description:
    "I am a passionate Full Stack Developer with a deep expertise in building scalable web applications and tackling complex problems.",
};

export const metaDataSocial: MetaDataSocial = {
  twitter: "https://twitter.com/zobaidulkazi",
  facebook: "https://facebook.com/zobkazi",
  linkedin: "https://linkedin.com/in/zobaidulkazi",
  instagram: "https://instagram.com/zobkazi",
  github: "https://github.com/zobkazi",
  telegram: "https://t.me/zobaidulkazi",
  whatsapp: "https://whatsapp.com/channel/0029VaTXlwuFnSz2LbIuDZ2q",
  discord: "https://discord.gg/Anes3kYdRT",
  slack:
    "https://join.slack.com/t/zobaidulkazi/shared_invite/zt-2lncrhgk7-3WABiKg2zVugUaynDiaj9g",
};

const SocialMediaLinks = metaDataSocial;

export default SocialMediaLinks;


const metaTagesHtml = {

  faviconLink32x32: metaDataLinks.faviconLink32x32,
  faviconLink16x16: metaDataLinks.faviconLink16x16,
  faviconLinkAppleTouchIcon: metaDataLinks.faviconLinkAppleTouchIcon,
  androidChromeLink192x192: metaDataLinks.androidChromeLink192x192,
  androidChromeLink512x512: metaDataLinks.androidChromeLink512x512,
  title: metaDataTitle.title,
  description: metaDataTitle.description,
  twitter: metaDataSocial.twitter,
  facebook: metaDataSocial.facebook,
  linkedin: metaDataSocial.linkedin,
  instagram: metaDataSocial.instagram,
  github: metaDataSocial.github,
  telegram: metaDataSocial.telegram,
  whatsapp: metaDataSocial.whatsapp,
  discord: metaDataSocial.discord,
  slack: metaDataSocial.slack,
  homeLink: "https://zobkazi.github.io",
}

export const metaTages = metaTagesHtml;


