import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.h2
        className={`section-title ${
          light ? "text-white" : "text-secondary dark:text-gray-200"
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`section-subtitle ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600 dark:text-gray-400"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
