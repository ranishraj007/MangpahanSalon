"use client";
import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <section className="py-20 min-h-[70vh] flex items-center">
        <div className="container-custom text-center">
          <motion.h1
            className="text-9xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
