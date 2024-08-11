"use client";

import { useState, useEffect, useRef } from "react";
import {
  MagnifyingGlassIcon,
  DownloadIcon,
  Link2Icon,
} from "@radix-ui/react-icons";
import html2canvas from "html2canvas";
import Link from "next/link";
import Image from "next/image";

interface UserData {
  site_admin: boolean;
  gists_url: string;
  login: string;
  id: number;
  type: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  following_url: string;
  followers_url: string;
  organizations_url: string;
  starred_url: string;
  subscriptions_url: string;
  events_url: string;
  created_at: string;
  updated_at: string;
  repos_url: string;
  email?: string;
}

const GitHubUserCard = () => {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState("");
  const cardRef = useRef<HTMLDivElement | null>(null);
  const downloadButtonRef = useRef<HTMLButtonElement | null>(
    null
  ) as React.MutableRefObject<HTMLButtonElement>;

  const fetchUserData = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setError("User not found");
      setUserData(null);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search) fetchUserData(search);
  };

  useEffect(() => {
    const handleEnterKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (search) fetchUserData(search);
      }
    };
    document.addEventListener("keydown", handleEnterKey);
    return () => document.removeEventListener("keydown", handleEnterKey);
  }, [search]);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(dateString));
  };

  const downloadCard = () => {
    if (cardRef.current && downloadButtonRef.current) {
      downloadButtonRef.current.style.visibility = "hidden";

      const images = cardRef.current.querySelectorAll("img");
      const imagePromises = Array.from(images).map((img) => {
        return new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.addEventListener("load", resolve as () => void);
            img.addEventListener("error", resolve as () => void);
          }
        });
      });

      Promise.all(imagePromises).then(() => {
        html2canvas(cardRef.current as HTMLDivElement, {
          useCORS: true,
          logging: true,
          allowTaint: false,
          backgroundColor: null,
        })
          .then((canvas) => {
            const link = document.createElement("a");
            link.download = `${userData?.login}_GitHub_Card.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();

            downloadButtonRef.current.style.visibility = "visible";
          })
          .catch((error) => {
            console.error("Error capturing the card:", error);
            downloadButtonRef.current.style.visibility = "visible";
          });
      });
    }
  };

  return (
    <div className="container flex mt-12 flex-col items-center p-6 min-h-screen bg-purple-100 dark:bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <form className="w-full max-w-lg relative " onSubmit={handleSearch}>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
          </div>
          <input
            type="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Enter GitHub username..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Search
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 text-4xl">{error}</p>}
      {userData && (
        <div
          ref={cardRef}
          className="max-w-md mt-12 w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 relative"
        >
          <div className="flex flex-col items-center p-6 bg-cover text-white bg-[url('https://wallpapercg.com/media/ts_orig/22394.webp')]">
            <Image
              width={96}
              height={96}
              src={userData.avatar_url}
              alt={userData.login}
              className="w-28 h-28 rounded-full shadow-lg border-2 border-white dark:border-gray-500 mb-4"
            />
            <h2 className="text-2xl font-bold m-2">{userData.name || "N/A"}</h2>
            <p className="text-lg">@{userData.login || "N/A"}</p>

            <p className="text-sm">{userData.location || "N/A"}</p>
          </div>
          <div className="p-6 bg-gray-50 text-gray-800">
            <p className="text-lg">{userData.bio}</p>

            <div className="mt-4">
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Company:</span>

                <span className="flex items-center space-x-2">
                  <Link2Icon className="w-4 h-4 inline-block align-middle" />
                  <Link
                    className="text-pink-500 hover:underline"
                    href={userData.organizations_url}
                    target="_blank"
                  >
                    {userData.company || "N/A"}
                  </Link>
                </span>
              </p>

              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Blog:</span>
                <Link2Icon className="w-4 h-4 inline-block align-middle" />
                <Link
                  href={userData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline inline-block align-middle"
                >
                  {userData.blog || "N/A"}
                </Link>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">X:</span>
                <Link2Icon className="w-4 h-4 inline-block align-middle" />
                <Link
                  href={`https://x.com/${userData.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  @{userData.twitter_username || "N/A"}
                </Link>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Repositories:</span>
                <p className="flex items-center space-x-2">
                  <span className="flex items-center space-x-2">
                    <Link2Icon className="w-4 h-4 inline-block align-middle" />
                    <Link
                      className="text-pink-500 hover:underline inline-block align-middle"
                      href={userData.repos_url}
                      target="_blank"
                    >
                      {userData.public_repos || "N/A"}
                    </Link>
                  </span>
                </p>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Gists:</span>
                <span className="flex items-center space-x-2">
                  <Link2Icon className="w-4 h-4 inline-block align-middle" />
                  <Link
                    className="text-pink-500 hover:underline inline-block align-middle"
                    href={userData.gists_url}
                    target="_blank"
                  >
                    {userData.public_gists || "N/A"}
                  </Link>
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Followers:</span>
                <span className="flex items-center space-x-2">
                  <Link2Icon className="w-4 h-4 inline-block align-middle" />
                  <Link
                    className="text-pink-500 hover:underline inline-block align-middle"
                    href={userData.followers_url}
                    target="_blank"
                  >
                    {userData.followers || "N/A"}
                  </Link>
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Following:</span>
                <span className="flex items-center space-x-2">
                  <Link2Icon className="w-4 h-4 inline-block align-middle" />
                  <Link
                    className="text-pink-500 hover:underline inline-block align-middle"
                    href={userData.following_url}
                    target="_blank"
                  >
                    {userData.following || "N/A"}
                  </Link>
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Member Type:</span>
                <span className="flex items-center space-x-2  ">
                  {userData.type || "N/A"}
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Site Admin:</span>
                <span className="flex items-center space-x-2">
                  {userData.site_admin || "N/A"}
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">
                  {" "}
                  Account Created Date:
                </span>
                <span>{formatDate(userData.created_at || "N/A")}</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-bold text-purple-600">Updated Date:</span>
                <span>{formatDate(userData.updated_at || "N/A")}</span>
              </p>
            </div>

            <Link
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-pink-500 hover:underline"
            >
              View Profile on GitHub
            </Link>
          </div>
          <button
            ref={downloadButtonRef}
            onClick={downloadCard}
            className="absolute top-4 right-4 p-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <DownloadIcon className="w-6 h-6" />
          </button>
        </div>
      )}

      {userData && (
        <div className="mt-10 space-y-4 hover:">
          <div className=" mt-5 space-x-4">
            <picture>
              <img
                className="w-full transform transition-all hover:scale-105 shadow-lg shadow-gray-500/50 p-2  dark:text-gray-700 hover:text-gray-400"
                src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${userData.login}&show_icons=true&theme=algolia&include_all_commits=true&count_private=true`}
                alt="GitHub Stats"
              />
            </picture>

            <picture>
              <img
                className="w-full transform transition-all hover:scale-105 shadow-lg shadow-gray-500/50 p-2  dark:text-gray-700 hover:text-gray-400"
                alt="GitHub Top Languages"
                src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${userData.login}&layout=compact&langs_count=6&theme=dark`}
              />
            </picture>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubUserCard;
