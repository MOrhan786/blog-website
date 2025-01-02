"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };
    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <header className="text-white  body-font shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* main header */}
      <div className="h-20 bg-[#003366]     border-b  ">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 ">
          <span>{currentDateTime}</span>
          <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center gap-5 ">
            <Link
              href={"/"}
              className="mr-5 hover:text-red-700 duration-300 transform hover:scale-105 "
            >
              {' '}
              Home {' '}
            </Link>

           

            <Link
              href={"/blog"}
              className="mr-5 hover:text-red-700 duration-300 transform hover:scale-105 "
            >
              {' '}
              Blog {' '}
            </Link>

            <Link
              href={"/contact"}
              className="mr-5 hover:text-red-700 duration-300 transform hover:scale-105 "
            >
              {' '}
              Contact {' '}
            </Link>
          </nav>
          <a
          href="https://github.com/MOrhan786/blog-website"
          className="text-white ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="inline-flex items-center bg-red-800 border-spacing-0 py-1 px-3 focus:outline-none hover:bg-[#2e03] rounded text-white mt-4 md:mt-0 transition-colors duration-300 ">
          GitHub
          <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
          >
             <path d="M5 12h14M12 5l7 7-7 7"/>
           
          </svg>
          </button>
        </a>
        </div>
      </div>
    </header>
  );
}
