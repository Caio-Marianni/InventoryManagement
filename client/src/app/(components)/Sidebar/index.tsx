"use client";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* Top logo */}
      <div className="flex justify-between md:justify-normal items-center gap-3 pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">EDSTOCK</h1>
        <button
          onClick={() => {}}
          className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100"
        >
          <Menu className="w-4 h-4" size={24} />
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">
        {/* LINKS HERE */}
      </div>
      {/* Footer */}
      <div><p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p></div>
    </div>
  );
};

export default Sidebar;
