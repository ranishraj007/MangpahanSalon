"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171412] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#d6b05b]">
              Mangpahang
            </h3>
            <p className="mb-5 text-white/70 leading-7">
              Mangpahang Unisex Salon offers premium hair and beauty services in
              a relaxing environment. Our skilled professionals are dedicated to
              enhancing your natural beauty.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/people/Mangpahang-Unisex-Salon/61564606314717/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mangpahang Unisex Salon Facebook"
                className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-[#d6b05b] hover:text-[#171412] transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mangpahangunisexsalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mangpahang Unisex Salon Instagram"
                className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-[#d6b05b] hover:text-[#171412] transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#d6b05b]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Services", "Gallery", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-white/70 hover:text-[#d6b05b] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#d6b05b]">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                "Haircut & Styling",
                "Hair Coloring",
                "Facial & Skincare",
                "Makeup",
                "Manicure & Pedicure",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-[#d6b05b] transition-colors duration-300 "
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#d6b05b]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-[#d6b05b] mt-1 mr-3 h-5 w-5" />
                <span className="text-white/70">
                  Mid-Baneshwor, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#d6b05b] mr-3 h-5 w-5" />
                <a
                  href="tel:+9779708073356"
                  className="text-white/70 hover:text-[#d6b05b] transition-colors duration-300"
                >
                  +977-970-8073356
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#d6b05b] mr-3 h-5 w-5" />
                <a
                  href="mailto:mangpahangsalon@gmail.com"
                  className="text-white/70 hover:text-[#d6b05b] transition-colors duration-300"
                >
                  mangpahangsalon@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="text-[#d6b05b] mt-1 mr-3 h-5 w-5" />
                <div className="text-white/70">
                  <p>Sun-Sat: 10:00 AM - 7:00 PM</p>
                  {/* <p>Sunday: Closed</p> */}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/55">
          <p>
            <span className="text-[#d4af37]">&copy;</span> {currentYear}{" "}
            Mangpahang Unisex Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
