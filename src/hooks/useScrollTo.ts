import { useEffect, useState } from "react";
import { navigationHeight } from "@/utils/theme-config";

interface ScrollToHook {
  scrollToEl: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export function useScrollTo(): ScrollToHook {
  const [height, setHeight] = useState<number>(navigationHeight);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 480px)").matches) {
        setHeight(56);
      } else {
        setHeight(navigationHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToEl = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const hash = e.currentTarget.hash;
    const targetElement = document?.querySelector(hash);

    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.pageYOffset - height;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return { scrollToEl };
}
