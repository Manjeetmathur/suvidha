import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import p1 from "../../assets/p1.png"
import { TiThMenu, TiTimes } from "react-icons/ti";
const Header = () => {
  const [toggle, settoggle] = useState(false)
 

  return (
    <div className="w-full bg-blue-500 h-[80px] md:h-[80px] flex items-center shadow-md">
    <div className="container mx-auto flex justify-between items-center px-6 md:text-lg">
      {/* Logo or Brand Name */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <NavLink to="/" className="flex items-center">
          <img src={p1} alt="Logo" className="w-[60px] md:w-[70px] rounded-lg " />
        </NavLink>
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => settoggle(!toggle)}
        >
          {toggle ? <TiTimes /> : <TiThMenu />}
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-blue-500 
          md:hidden  ${
          toggle ? "flex flex-col space-y-4 p-6" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          Contact
        </NavLink>
      </div>
      <div
        className={`hidden  md:flex md:space-x-6 md:w-auto `}
      >
        <NavLink
          to="/"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white hover:text-gray-200 transition duration-200 font-medium"
        >
          Contact
        </NavLink>
      </div>
    </div>
  </div>

  )
}

export default Header
