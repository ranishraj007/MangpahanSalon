import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">

        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Circle with M */}
            <div className="w-11 h-11 rounded-full bg-[#222222] flex items-center justify-center flex-shrink-0">
              <span
                style={{ fontFamily: "Georgia, serif" }}
                className="text-[#d4af37] text-lg font-bold leading-none"
              >
                M
              </span>
            </div>
            {/* Text */}
            <div>
              <div
                style={{ fontFamily: "Georgia, serif", letterSpacing: "2px" }}
                className={`text-base font-bold leading-none transition-colors duration-300 ${
                  scrolled ? "text-[#222222]" : "text-white"
                }`}
              >
                MANGPAHANG
              </div>
              <div
                className={`text-[9px] tracking-[3px] uppercase mt-1 transition-colors duration-300 ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                UNISEX SALON
              </div>
            </div>
          </motion.div>
        </Link>

        {/* ── Desktop Navigation ── */}
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
                        ? "text-yellow-500"
                        : scrolled
                        ? "text-[#222222] hover:text-[#d4af37]"
                        : "text-gray-200 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="tel:+9779851234567"
            className="flex items-center bg-[#d4af37] text-white px-4 py-2 rounded-md text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-2 h-4 w-4" /> Book Now
          </motion.a>
        </nav>

        {/* ── Mobile Menu Button ── */}
        <div className="md:hidden flex items-center">
          <button
            className={`text-2xl transition-colors duration-300 ${
              scrolled ? "text-[#222222]" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation ── */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-white z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full justify-center items-center">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-[#222222] flex items-center justify-center">
              <span
                style={{ fontFamily: "Georgia, serif" }}
                className="text-[#d4af37] text-xl font-bold"
              >
                M
              </span>
            </div>
            <div>
              <div
                style={{ fontFamily: "Georgia, serif", letterSpacing: "2px" }}
                className="text-base font-bold text-[#222222] leading-none"
              >
                MANGPAHANG
              </div>
              <div className="text-[9px] tracking-[3px] uppercase text-gray-400 mt-1">
                UNISEX SALON
              </div>
            </div>
          </div>

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
                        ? "text-[#d4af37]"
                        : "text-[#222222] hover:text-[#d4af37]"
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
            className="flex items-center bg-[#d4af37] text-white px-6 py-3 rounded-md mt-8 font-medium"
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