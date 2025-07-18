import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/chat.png";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Navbar() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("User logged Out");
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-3xl flex gap-5 font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent hover:from-blue-400 hover:to-blue-300 transition duration-300 font-serif">
            <img
              src={logo}
              className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
              alt=""
            />
            Ping
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 gap-3 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => {
              handleLogout();
            }}
            className="text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 focus:ring-4 focus:outline-none focus:ring-red-500/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="border-b border-gray-600/30"></div>
    </nav>
  );
}

export default Navbar;
