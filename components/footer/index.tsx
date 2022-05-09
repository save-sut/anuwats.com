import React from "react";
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="dark:bg-gray-800" style={{ height: '15vh' }}> 
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-0.5 w-full bg-white dark:bg-gray-600"></div>
        <div className="py-2 flex flex-col items-center mt-8">
          <div className="text-center text-xs">
            <p className="pb-1">&#9749; Made by Anuwat Songchumrong</p>
            <div className="footer-copyright">
              Copyright &copy; {new Date().getFullYear()}
              <Link href="https://github.com/save-sut/anuwats.com">
                <a target="_blank" rel="noopener noreferrer" className="mx-3 font-bold hover:underline dark:text-white">Source code on Github</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}