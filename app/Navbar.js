'use client'
import { useState } from "react";
import Link from "next/link";
import './globals.css'
import { AiOutlineWechatWork } from "react-icons/ai";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="text-xl font-bold text-slate-700">
              <div className="flex flex-row gap-1"><b>Z</b>Chat<AiOutlineWechatWork /></div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link href="/forums" className="text-gray-800 hover:text-blue-600">
              Forums
            </Link>
            <Link href="/UserChat" className="text-gray-800 hover:text-blue-600">
              UserChat
            </Link>
            <UserButton/>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link href="/about" className="block text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link href="/forums" className="block text-gray-800 hover:text-blue-600">
              Forums
            </Link>
            <Link href="/UserChat" className="block text-gray-800 hover:text-blue-600">
              UserChat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
