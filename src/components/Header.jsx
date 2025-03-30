import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import LinkToTop from "./LinkToTop";

const LinkToTops = [
  { name: "About Us", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Our Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
  { name: "Estimator", path: "/estimator" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <LinkToTop to={"/"}>LOGO</LinkToTop>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          {LinkToTops.map((link) => (
            <LinkToTop
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-900 hover:text-gray-600 transition duration-300 ${
                  isActive ? "font-semibold border-b-2 border-black" : ""
                }`
              }
            >
              {link.name}
            </LinkToTop>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkToTop to="/apply">
            <Button>Apply Online</Button>
          </LinkToTop>
        </div>

        {/* Burger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 p-2 rounded-lg focus:outline-none hover:bg-gray-100 transition duration-200"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-900 shadow-md py-4 px-6 rounded-b-lg transition-transform transform ${
          isMenuOpen ? "scale-100" : "scale-95"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4">
          {LinkToTops.map((link) => (
            <LinkToTop
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `w-full text-center text-blue-50 hover:text-gray-400 transition duration-300 ease-in-out px-4 py-2 ${
                  isActive ? "font-semibold border-b-2 border-white" : ""
                }`
              }
            >
              {link.name}
            </LinkToTop>
          ))}
        </nav>
      </div>
    </header>
  );
}
