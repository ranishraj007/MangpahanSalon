"use client";
import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Palette,
  Smile,
  Wand2,
  SnailIcon as Nail,
  SprayCanIcon as Spray,
  Leaf,
  Gem,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  const categories = [
    { id: "all", name: "All Services" },
    { id: "hair", name: "HAIR CUT WITH WASH AND BLOW DRY SETTING" },
    { id: "face", name: "Face & Skin" },
    { id: "body", name: "Body" },
    { id: "nails", name: "Nails" },
  ];

  const services = [
    {
      id: 1,
      title: "HAIR CUT WITH WASH AND BLOW DRY SETTING",
      category: "hair",
      icon: Scissors,
      price: "From Rs.700",
      description:
        "Our expert stylists provide precision haircuts tailored to your face shape and personal style. Includes consultation, shampoo, cut, and styling.",
      details: [
        "Man Hair Cut - Rs.700",
        "Ladies - Rs.1500",
        "Ladies Hair Trimming- Rs.1000",
        "Fringe/Bangs - Rs.250",
        "Beard Trim - Rs.200",
        "Clean Shave - Rs.350",
      ],
    },
    {
      id: 2,
      title: "HAIR COLOR AND HIGHLIGHTS",
      category: "hair",
      icon: Palette,
      price: "From Rs.500",
      description:
        "Transform your look with our professional hair coloring services. From subtle highlights to bold transformations, we use premium products for vibrant, long-lasting results.",
      details: [
        "Global (Per Tube)- Rs.5000",
        "Root Touch Up - Rs.3000",
        "Front Touch Up - Rs.2500",
        "Classic Half Highlight/ Root Highlight - Rs.1500",
        "Classic Full Highlight - Rs.6000/9000",
        "Ombre - Rs.9000/13000",
        "Balayage - Rs.7000",
        "Creative Highlight (Per Foil) - Rs.9000/13000",
        "Quick Toning (Per Tube) - Rs.3000",
      ],
    },

    {
      id: 3,
      title: "STYLING SET WITH WASH AND CONDITIONING",
      category: "hair",
      icon: Smile,
      price: "From Rs.4000",
      description:
        "A complete hair care and styling service that includes cleansing, conditioning, and professional finishing for a polished, refreshed look.",
      details: [
        "Ladies Blow Dry - Rs.1000",
        "Ironing/Tongs/Roller Set - Rs.1200",
        "Man Hair Style/Set - Rs.300",
      ],
    },
    {
      id: 4,
      title: "SKIN CARE AND FACIAL",
      category: "face",
      icon: Wand2,
      price: "From Rs.500",
      description:
        "Our makeup artists create flawless looks for any occasion. Using high-quality products, we enhance your natural beauty and ensure your makeup lasts all day.",
      details: [
        "Super Express Clean Up - Rs.500",
        "Casmara Clean Up - Rs.2000",
        "Mini Casmara Facial with Gold Mask - Rs.4000",
      ],
    },
    {
      id: 5,
      title: "MANICURE AND PEDICURE",
      category: "nails",
      icon: Nail,
      price: "From Rs.2000",
      description:
        "Treat your hands and feet to our luxurious nail services. We provide meticulous nail care, exfoliation, massage, and your choice of polish for a polished finish.",
      details: [
        "Manicure - Rs.2000",
        "Pedicure - Rs.2000",
      ],
    },
    {
      id: 6,
      title: "WAXING",
      category: "hair",
      icon: Spray,
      price: "From Rs.500",
      description:
        "Experience smooth, hair-free skin with our professional waxing services. We use high-quality wax and techniques to ensure a comfortable and effective hair removal experience.",
      details: [
        "Underarms - Rs.500",
        "Whole Body - Rs.7000",
        "Legs - Rs.1700",
        "Hand - Rs.1200",
      ],
    },
    {
      id: 7,
      title: "THREADING",
      category: "hair",
      icon: Leaf,
      price: "From Rs.50",
      description:
        "Achieve precise and clean hair removal with our threading services. Perfect for shaping eyebrows and removing facial hair, threading is a gentle and effective method suitable for all skin types.",
      details: [
        "Eyebrow - Rs.100",
        "Upper Lip - Rs.50",
      ],
    },
    {
      id: 8,
      title: "Nails Extensions & Nail Art",
      category: "nails",
      icon: Gem,
      price: "From Rs.",
      description:
        "Enhance the beauty of your nails with our expert nail extension and art services. Choose from a variety of designs and techniques to express your personal style.",
      details: [
        "Nails Exensio",
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedService, setExpandedService] = useState(null);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary">
        <div className="container-custom text-center text-black">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our comprehensive range of hair and beauty services
            designed to enhance your natural beauty
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Premium Beauty Services"
            subtitle="Explore our wide range of professional services tailored to meet your beauty needs"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-yellow-500"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Services List */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
            <AnimatePresence>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                    expandedService === service.id ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div
                    className="p-6 cursor-pointer "
                    onClick={() => toggleExpand(service.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-3 rounded-full text-black mr-4">
                          <service.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black">
                            {service.title}
                          </h3>
                          <p className="text-black font-medium">
                            {service.price}
                          </p>
                        </div>
                      </div>
                      <button
                        className={`text-gray-400 transition-transform duration-300 ${
                          expandedService === service.id ? "rotate-180" : ""
                        }`}
                        aria-label="Toggle service details"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="mt-4 text-black">{service.description}</p>
                  </div>

                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="pt-4 border-t border-gray-200">
                          <h4 className="font-bold text-black mb-2">
                            Service Options:
                          </h4>
                          <ul className="space-y-2 text-black">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-black mr-2 "></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-black/50">
        <div className="container-custom text-center">
          <SectionTitle
            title="Ready to Book Your Appointment?"
            subtitle="Experience our premium services and let our experts take care of you"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <a href="tel:+9779851234567" className="btn-primary mx-2">
              Call Now
            </a>
            <a href="/contact" className="btn-secondary mx-2">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
