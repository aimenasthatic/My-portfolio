import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* First Column: Image */}
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Second Column: Links with Dropdowns */}
      <div className="flex-grow">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              onClick={() => toggleDropdown("about")}
              className="text-gray-700 hover:text-blue-500"
            >
              About <span className="arrow">▼</span>
            </a>
            {dropdownVisible === "about" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
                <li>
                  <a
                    href="/team"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="/history"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="/mission"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Mission
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <a
              href="#"
              onClick={() => toggleDropdown("store")}
              className="text-gray-700 hover:text-blue-500"
            >
              Store <span className="arrow">▼</span>
            </a>
            {dropdownVisible === "store" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
                <li>
                  <a
                    href="/products"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/categories"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="/deals"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Deals
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/blog" className="text-gray-700 hover:text-blue-500">
              Blog
            </a>
          </li>
          <li className="relative">
            <a
              href="#"
              onClick={() => toggleDropdown("pages")}
              className="text-gray-700 hover:text-blue-500"
            >
              Pages <span className="arrow">▼</span>
            </a>
            {dropdownVisible === "pages" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
                <li>
                  <a
                    href="/faq"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Third Column: Icon Links */}
      <div className="flex items-center space-x-4">
        <a href="/search" className="text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="/cart" className="text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
        <a href="/about" className="text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faUser} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar; // Correctly exported as default
