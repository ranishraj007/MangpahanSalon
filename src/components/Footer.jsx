"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Mangpahang</h3>
            <p className="mb-4 text-gray-300">
              Mangpahang Unisex Salon offers premium hair and beauty services in
              a relaxing environment. Our skilled professionals are dedicated to
              enhancing your natural beauty.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/people/Mangpahang-Unisex-Salon/61564606314717/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Gallery", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
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
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3 h-5 w-5" />
                <span className="text-gray-300">
                  Mid-Baneswor, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 h-5 w-5" />
                <a
                  href="tel:+9779851234567"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  +977 9851234567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 h-5 w-5" />
                <a
                  href="mailto:info@mangpahang.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  info@mangpahang.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="text-primary mt-1 mr-3 h-5 w-5" />
                <div className="text-gray-300">
                  <p>Mon-Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Mangpahang Unisex Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
