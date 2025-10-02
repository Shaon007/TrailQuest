"use client";
import { login } from "@/lib/auth-actions";
// import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-2 border-b border-gray-200">
      <div className=" mx-auto flex justify-between px-6 lg:p-2">
        <Link className="flex items-center gap-2" href={'/'}>
          <FaLocationDot className="h-10 text-rose-500 "/>
          <span className="text-2xl font-semibold text-gray-800 font-mono">trailQuest</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link className="text-slate-900 hover:text-sky-500" href={'/'}>My Trips</Link>
          <Link className="text-slate-900 hover:text-sky-500" href={'/'}>Globe</Link>
          <Link className="text-slate-900 hover:text-sky-500" href={'/'}>About</Link>
          <button className="flex gap-2 items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-md cursor-pointer" onClick={login}>Sign In <FaGithub/></button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;