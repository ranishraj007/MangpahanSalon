import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, link = "/services" }) => {
  return (
    <motion.div
      className="surface-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8f681b] via-[#d6b05b] to-[#f0d890]" />
      <p className="eyebrow mb-4">Signature Service</p>
      <h3 className="text-xl font-bold mb-3 text-[#171412]">
        {title}
      </h3>
      <p className="text-sm leading-7 text-[#746b61] mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-sm font-bold text-[#8f681b] transition-colors group-hover:text-[#171412]"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
