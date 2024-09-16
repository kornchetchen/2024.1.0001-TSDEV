"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Perform search action here
      console.log("Searching for:", searchQuery);
    } else {
      setIsSearchOpen(false);
    }
  };

  const menuItems = {
    OVERVIEW: [
      { title: "All Indicators", icon: "🏢" },
      { title: "Tourism General", icon: "🏢" },
      { title: "Yearly comparison", icon: "🏢" },
      { title: "Monthly comparison", icon: "🚀" },
    ],
    TOP10: [],
    FORECASTING: [],
    ABOUTUS: [],
  };

  return (
    <nav className="shadow-md flex items-center text-gray-800 justify-between px-80 py-3 bg-white fixed top-0 w-full z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex items-center">
              <Image src="/assets/PKRU.png" alt="PKRU" width={80} height={80} />
            </Link>
            {/* Search bar */}
            <div className="relative">
              {!isSearchOpen ? (
                <button onClick={toggleSearch} className="p-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              ) : (
                <div className="flex items-center bg-white border border-gray-300 rounded-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 px-4 py-2 rounded-full focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button onClick={handleSearch} className="p-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Navigation links with submenus */}
          <div className="flex items-center space-x-10">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category} className="relative group">
                <button className="py-2 font-semibold text-lg hover:text-orange-600 transition-colors">
                  {category}
                </button>
                {items.length > 0 && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                    <div className="p-4 grid grid-cols-2 gap-4">
                      {items.map((item) => (
                        <Link
                          key={item.title}
                          href="#"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-orange-600 transition-colors"
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
