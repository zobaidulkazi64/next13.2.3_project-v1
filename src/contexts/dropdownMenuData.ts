// data/dropdownMenuData.ts
export const dropdownMenuData = {
  items: [
    { label: "Edit", shortcut: "⌘ E" },
    { label: "Duplicate", shortcut: "⌘ D" },
    { type: "separator" },
    { label: "Archive", shortcut: "⌘ N" },
    {
      label: "More",
      type: "submenu",
      items: [
        { label: "Move to project…" },
        { label: "Move to folder…" },
        { type: "separator" },
        { label: "Advanced options…" },
      ],
    },
    { type: "separator" },
    { label: "Share" },
    { label: "Add to favorites" },
    { type: "separator" },
    { label: "Delete", shortcut: "⌘ ⌫", color: "red" },
  ],
};
