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
          ? "bg-[#fffaf3]/90 shadow-[0_12px_40px_rgba(23,20,18,0.08)] backdrop-blur-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">

        {/* ── LOGO ── */}
        <Link to="/" className="flex items-center" aria-label="Mangpahang Unisex Salon home">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Circle with M */}
            <div className="w-11 h-11 rounded-full bg-[#171412] ring-1 ring-[#d6b05b]/35 flex items-center justify-center flex-shrink-0">
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
                  scrolled ? "text-[#171412]" : "text-white"
                }`}
              >
                MANGPAHANG
              </div>
              <div
                className={`text-[9px] tracking-[3px] uppercase mt-1 transition-colors duration-300 ${
                  scrolled ? "text-[#746b61]" : "text-white/70"
                }`}
              >
                UNISEX SALON
              </div>
            </div>
          </motion.div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className={`flex items-center gap-5 rounded-full px-4 py-2 transition-all duration-300 ${
            scrolled ? "bg-white/75 border border-[#eadfce]" : "bg-white/10 border border-white/15 backdrop-blur-md"
          }`}>
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
                        ? "text-[#d6b05b]"
                        : scrolled
                        ? "text-[#171412] hover:text-[#8f681b]"
                        : "text-white/78 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="tel:+9779708073356"
            className="flex items-center bg-[#d6b05b] text-[#171412] px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-black/10"
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
              scrolled ? "text-[#171412]" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation ── */}
      <motion.div
        id="mobile-navigation"
        className={`md:hidden fixed inset-0 bg-[#fffaf3] z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full justify-center items-center">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-[#171412] flex items-center justify-center">
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
                className="text-base font-bold text-[#171412] leading-none"
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
                        : "text-[#171412] hover:text-[#d4af37]"
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
            href="tel:+9779708073356"
            className="flex items-center bg-[#d6b05b] text-[#171412] px-6 py-3 rounded-full mt-8 font-bold"
            onClick={closeMenu}
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
