import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Mangpahang
              <span className="block text-sm md:text-base font-medium text-secondary dark:text-gray-200">
                Unisex Salon
              </span>
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-secondary dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.a
              href="tel:+9779851234567"
              className="flex items-center bg-primary text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 h-4 w-4" /> Book Now
            </motion.a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-secondary dark:text-gray-200 text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <ul className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xl font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-secondary dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="tel:+9779851234567"
            className="flex items-center bg-primary text-white px-6 py-3 rounded-md mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-2 h-4 w-4" /> Book Now
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
