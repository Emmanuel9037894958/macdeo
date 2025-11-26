"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const pageList = [
    { pages: "Home", path: "/" },
    { pages: "Contact", path: "/contact" },
    { pages: "About Us", path: "/about" },
    { pages: "Media", path: "/media" },
    { pages: "Our Gallery", path: "/gallery" },
    { pages: "Sustainability", path: "/sustainability" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-white/60 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/nutlogo.png"
            alt="Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-semibold text-orange-800">
          {pageList.map((page, i) => (
            <li key={i} className="relative group">
              <Link href={page.path} className="hover:text-green-600 transition">
                {page.pages}
              </Link>

              {/* Green Glow Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-green-500 rounded-full transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#22c55e]"></span>
            </li>
          ))}
        </ul>

        
        <button onClick={toggleMenu} className="md:hidden">
          {menu ? (
            <X className="size-10 text-black" />
          ) : (
            <Menu className="size-10 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {menu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-[650px] w-64 bg-white shadow-xl z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="space-y-6 text-orange-500 text-lg font-medium">
          {pageList.map((page, i) => (
            <Link
              key={i}
              href={page.path}
              onClick={closeMenu}
              className="block hover:text-green-600 transition"
            >
              {page.pages}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
