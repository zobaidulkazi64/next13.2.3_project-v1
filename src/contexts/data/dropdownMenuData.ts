// data/dropdownMenuData.ts
export const dropdownMenuData = {
  items: [
    { label: "My Journey", shortcut: "🛴", href: "/me/my-journey" },
    { type: "separator" },
    { label: "FAQ", shortcut: "🌅", href: "/faq" },
    { type: "separator" },
    {
      label: "Buy Me Separately",
      type: "submenu",
      shortcut: "🛒",
      items: [
        { label: "Font End Developer", href: "/projects/front-end" },
        { label: "Back End Developer", href: "/projects/back-end" },
        { label: "Full Stack Developer", href: "/projects/full-stack" },

        { type: "separator" },
        { label: "Download Resume", href: "/me/download-resume" },
      ],
    },
    { type: "separator" },
    { label: "Share ", shortcut: "🔗", href: "https://zobkazi.github.io/"},
    { type: "separator" },
    { label: "Add to favorites", shortcut: "♥️", href: "/me/add-to-favorites" },
  ],
};


// twitter: "https://twitter.com/zobaidulkazi",
//   facebook: "https://facebook.com/zobkazi",
//   linkedin: "https://linkedin.com/in/zobaidulkazi",
//   instagram: "https://instagram.com/zobkazi",
//   github: "https://github.com/zobkazi",
//   telegram: "https://t.me/zobaidulkazi",
//   whatsapp: "https://whatsapp.com/channel/0029VaTXlwuFnSz2LbIuDZ2q",
//   discord: "https://discord.gg/Anes3kYdRT",