"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
  return (
    <div className={sidebarClassNames}>
      {/* Top logo */}
      <div className={`flex justify-between md:justify-normal items-center gap-3 pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
        <div>Logo</div>
        <h1 className={`${isSidebarCollapsed ? "hidden" : "block" } font-extrabold text-2xl`}>EDSTOCK</h1>
        <button
          onClick={toggleSidebar}
          className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100"
        >
          <Menu className="w-4 h-4" size={24} />
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">{/* LINKS HERE */}</div>
      {/* Footer */}
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
      </div>
    </div>
  );
};

export default Sidebar;
