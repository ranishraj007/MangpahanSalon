"use client";
import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import GalleryItem from "../components/GalleryItem";

const Gallery = () => {
  const categories = [
    { id: "all", name: "All" },
    { id: "haircuts", name: "Haircuts" },
    { id: "coloring", name: "Coloring" },
    { id: "styling", name: "Styling" },
    { id: "makeup", name: "Makeup" },
  ];

  const galleryItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=800",
      title: "Modern Bob Cut",
      category: "haircuts",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=800",
      title: "Balayage Highlights",
      category: "coloring",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=800",
      title: "Elegant Updo",
      category: "styling",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=800",
      title: "Natural Glam Makeup",
      category: "makeup",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=600&width=800",
      title: "Layered Haircut",
      category: "haircuts",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=600&width=800",
      title: "Vibrant Red Color",
      category: "coloring",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=600&width=800",
      title: "Beach Waves",
      category: "styling",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=600&width=800",
      title: "Smokey Eye Makeup",
      category: "makeup",
    },
    {
      id: 9,
      image: "/placeholder.svg?height=600&width=800",
      title: "Pixie Cut",
      category: "haircuts",
    },
    {
      id: 10,
      image: "/placeholder.svg?height=600&width=800",
      title: "Ombre Hair",
      category: "coloring",
    },
    {
      id: 11,
      image: "/placeholder.svg?height=600&width=800",
      title: "Bridal Hairstyle",
      category: "styling",
    },
    {
      id: 12,
      image: "/placeholder.svg?height=600&width=800",
      title: "Bridal Makeup",
      category: "makeup",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary">
        <div className="container-custom text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Browse through our portfolio of stunning transformations and
            beautiful styles
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Our Work"
            subtitle="Explore our collection of beautiful transformations created by our talented team"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
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

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <GalleryItem
                    image={item.image}
                    title={item.title}
                    category={
                      categories.find((cat) => cat.id === item.category)
                        ?.name || ""
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <SectionTitle
            title="Follow Us on Instagram"
            subtitle="Stay updated with our latest work and salon updates"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {[...Array(6)].map((_, index) => (
              <motion.a
                key={index}
                href="#"
                className="block overflow-hidden rounded-lg relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Instagram+${
                    index + 1
                  }`}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl">❤️</span>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#"
            className="inline-flex items-center text-primary font-medium mt-8 hover:underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Follow Us @mangpahang
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Gallery;
