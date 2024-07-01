import Link from "next/link";
import React from "react";

const GithubStats = () => {
  const stats = [
    {
      type: "img",
          src: "https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=04FF3C&center=true&width=435&lines=Hi%2C+I+am+Zobaidul+Kazi;+Full+Stack+JavaScript+Developer",
      alt: "Typing SVG",
    },
    {
      type: "img",
      src: "https://komarev.com/ghpvc/?username=zobkazi&color=blue",
      alt: "GitHub profile views",
    },
    {
      type: "img",
      src: "https://img.shields.io/endpoint?style=social&color=222&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D25584%26project%3D%26in=0",
      alt: "CodeTime Badge",
    },
    {
      type: "img",
      src: "https://wakatime.com/badge/user/f22f5f67-c272-4052-bc4f-b9ee26dfabff.svg",
      alt: "GitHub Stats",
      height: "180em",
    },

    {
      type: "img",
      src: "http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=zobkazi&theme=2077",
      alt: "GitHub Top Languages Badge Cards",
    },
    {
      type: "img",
      src: "http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=zobkazi&theme=2077",
      alt: "Commits Card",
    },
    {
      type: "img",
      src: "http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=zobkazi&theme=2077",
      alt: "Contributions in last 30 days",
    },
    {
      type: "img",
      src: "https://github-readme-stats.vercel.app/api/top-langs/?username=zobkazi&layout=compact&theme=dark",
      alt: "Most Used Languages in GitHub",
      height: "180em",
    },
    {
      type: "img",
      src: "https://github-readme-streak-stats.herokuapp.com/?user=zobkazi&theme=dark",
      alt: "GitHub Streak Stats",
      height: "180em",
    },
  ];

  const links = [
    {
      href: "https://www.linkedin.com/in/zobaidulkazi",
      imgSrc:
        "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/zobkazi",
      imgSrc:
        "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=dark",
      alt: "GitHub",
    },
  ];

  return (
      <div className="flex flex-col gap-8 mt-32">
          <h1 className="text-3xl font-bold text-center">GitHub Stats</h1>
      {stats.map((stat, index) => (
        <picture key={index}>
              <img
                  className="w-screen md:w-3/4 justify-center mx-auto" 
            key={index}
            src={stat.src}
            alt={stat.alt}
            height={stat.height || undefined}
          />
        </picture>
      ))}
      {links.map((link, index) => (
        <Link key={index} href={link.href} target="_blank">
          <picture>
            <img src={link.imgSrc} alt={link.alt} />
          </picture>
        </Link>
      ))}
    </div>
  );
};

export default GithubStats;
