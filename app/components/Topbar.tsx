"use client";

import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import { IoIosSearch } from "react-icons/io";
import { Menu, X } from "lucide-react";

export default function TopBar() {
  const [search, setSearch] = useState("");
  const { mobileOpen, setMobileOpen } = useSidebar();

  const handleMenuClick = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="h-14 bg-gray-100/95 flex items-center px-3 sm:px-4 md:px-6 gap-2 sm:gap-3 md:gap-4 shrink-0 border-b border-gray-200">
      <button
        onClick={handleMenuClick}
        className="md:hidden p-2 rounded-lg text-[#376a5e] hover:bg-gray-200 transition">
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="flex-1 flex justify-center min-w-0">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg relative">
          <IoIosSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 
                       text-gray-400 text-lg pointer-events-none"/>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 bg-white rounded-full border text-sm text-black shadow-md border-gray-300 focus:outline-none focus:shadow-lg"/>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <div
          className="h-9 w-9 rounded-full bg-green-700 
                      flex items-center justify-center 
                      text-white text-sm font-semibold cursor-pointer">
          G
        </div>

      </div>
    </header>
  );
}
