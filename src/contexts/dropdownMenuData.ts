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
        { label: "Font End Developer", href: "/me/front-end" },
        { label: "Back End Developer", href: "/me/back-end" },
        { label: "Full Stack Developer", href: "/me/full-stack" },

        { type: "separator" },
        { label: "Download Resume", href: "/me/download-resume" },
      ],
    },
    { type: "separator" },
    { label: "Share ", shortcut: "🔗", href: "/me/share-me" },
    { type: "separator" },
    { label: "Add to favorites", shortcut: "♥️", href: "/me/add-to-favorites" },
  ],
};
