import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import myData from "../constants/myData"

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl m-auto px-4 py-4" style={{ height: '17vh' }}>
      <div className="md:h-full flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100">
                {myData.name}
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                {myData.designation}
              </p>
            </a>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          <Link href="/">
            <a
              className={`text-base  ${
                router.asPath === "/"
                  ? "text-gray-800 font-bold dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Home{" "}
              {router.asPath === "/" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`text-base  ${
                router.asPath === "/blog"
                  ? "text-gray-800 font-bold dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Blog
              {router.asPath === "/blog" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/experience">
            <a
              className={`text-base  ${
                router.asPath === "/experience"
                  ? "text-gray-800 font-bold dark:text-gray-200"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Experience{" "}
              {router.asPath === "/experience" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              theme !== 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              )
            )}
          </button>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
        <Link href="/">
          <a className={`text-base font-${router.asPath === "/" ? "bold" : "normal"} text-gray-600 dark:text-gray-300`}>
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className={`text-base font-${router.asPath === "/blog" ? "bold" : "normal"} text-gray-600 dark:text-gray-300`}>
            Blog
          </a>
        </Link>
        <Link href="/experience">
          <a className={`text-base font-${router.asPath === "/experience" ? "bold" : "normal"} text-gray-600 dark:text-gray-300`}>
            Experience
          </a>
        </Link>
      </div>
    </div>
  );
}