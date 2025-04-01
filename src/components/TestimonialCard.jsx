import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Palette, Smile, Wand2, Gem } from "lucide-react";

const iconMap = {
  scissors: Scissors,
  palette: Palette,
  smile: Smile,
  wand: Wand2,
  gem: Gem,
};

const ServiceCard = ({ icon, title, description, link = "/services" }) => {
  const IconComponent =
    typeof icon === "string" ? iconMap[icon] || Scissors : icon;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
        {/* <IconComponent size={28} /> */}
      </div>
      <h3 className="text-xl font-bold mb-2 text-secondary dark:text-gray-200">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link
        to={link}
        className="text-primary font-medium hover:underline inline-flex items-center"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
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
