import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 w-full">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We are dedicated to providing high-quality services and innovative solutions to help your business grow. Let us help you achieve your goals.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="hover:text-gray-200 transition duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="hover:text-gray-200 transition duration-200"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-200 transition duration-200"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-gray-200 transition duration-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200 text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-300 mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
