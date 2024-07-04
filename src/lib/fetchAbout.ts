
import { About } from "../types/About";

export const fetchAbout = async (): Promise<About> => {
  // Replace this with actual data fetching logic
  return {
    coverImage:
      "https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080",
    profileImage:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTA0ODExOTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    name: "Samuel Abera",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/samuel-abera-6593a2209/",
      twitter: "https://twitter.com/Samuel7Abera7",
      facebook: "",
      youtube: "https://www.youtube.com/@silentcoder7",
    },
    stats: {
      stat1: 27,
      stat2: 777,
      stat3: 34,
    },
  };
};
