"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

function NavBar() {
  const pageList = [
    { pages: "Home", path: "/" },
    { pages: "Contact", path: "/contact" },
    { pages: "AboutUs", path: "/about" },
    { pages: "Media", path: "/media" },
    { pages: "Our Gallery", path: "/gallery" },
  ];

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <section className="fixed top-0 left-0 z-50 w-full  text-white">
      {/* Top Navbar */}
      <div className="flex justify-between items-start p-0 m-0 w-full">
        <div className="p-0 m-0">
          <Image
            src="/nutlogo.png"
            alt="Logo Icon"
            width={120}
            height={120}
            className="object-contain p-0 m-0"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50 p-0 m-0 flex items-start">
          <button onClick={toggleMenu} className="p-0 m-0">
            {menu ? (
              <X className="size-10 bg-gray-300 rounded-full text-black m-0 p-0" />
            ) : (
              <Menu className="size-10 m-0 p-0" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex px-4 items-center">
          <ul className="flex items-center gap-6">
            {pageList.map((page, i) => (
              <li key={i}>
                <Link href={page.path}>{page.pages}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {menu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Slide-in Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300 ease-in-out ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 space-y-6">
          {pageList.map((page, i) => (
            <div key={i}>
              <Link
                href={page.path}
                onClick={closeMenu}
                className="block text-lg font-medium"
              >
                {page.pages}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NavBar;
