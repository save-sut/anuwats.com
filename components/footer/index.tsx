import React from "react";
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="dark:bg-gray-800" style={{ height: '15vh' }}> 
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-0.5 w-full bg-white dark:bg-gray-600"></div>
        <div className="flex justify-center md:items-center mt-8">
          <div className="flex justfy-center text-xs">
            <div className="p-4">
              <Link href="https://github.com/save-sut/anuwats.com">Source code on Github</Link>
            </div>
            <div className="p-4">
              <p>Copyright &copy; {new Date().getFullYear()} Anuwat Songchumrong</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}