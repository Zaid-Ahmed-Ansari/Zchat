'use client'
// import { useState } from "react";
import Link from "next/link";
import './globals.css'
import { AiOutlineWechatWork } from "react-icons/ai";
import { UserButton } from "@clerk/nextjs";
// import{useUser} from '@clerk/nextjs'
const Navbar = () => {
  
 
  
  
  return (
    // <nav className="bg-white shadow-md   w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-fourth rounded-3xl mb-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="text-xl font-bold text-slate-700">
              <div className="flex flex-row gap-1"><b>Z</b>Chat<AiOutlineWechatWork /></div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            
            <Link href="/forums" className="text-gray-800 hover:text-blue-600">
              Forums
            </Link>
            
            <UserButton/>
          </div>

          {/* Hamburger Menu */}
          
        </div>
      </div>

      
  );
};

export default Navbar;
