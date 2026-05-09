import React from "react";
import { motion } from "framer-motion";
const TestimonialCard = ({ quote, name, role }) => {
  return (
    <motion.div
      className="surface-card rounded-2xl p-6 transition-all duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5 text-5xl leading-none text-[#b68a2a]">"</div>
      <p className="text-sm leading-7 text-[#746b61] mb-6">"{quote}"</p>
      <div className="border-t border-[#eadfce] pt-4">
        <h3 className="text-sm font-bold text-[#171412] uppercase tracking-wide">
          {name}
        </h3>
        {role && <p className="mt-1 text-sm font-semibold text-[#8f681b]">{role}</p>}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
