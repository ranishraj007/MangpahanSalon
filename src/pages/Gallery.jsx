import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import GalleryItem from "../components/GalleryItem";
import SEO from "../components/SEO";

import GalleryImage_1 from "../assets/SalonImages/GallaryImage-1.jpg";
import GalleryImage_2 from "../assets/SalonImages/GallaryImage-2.jpg";
import GalleryImage_3 from "../assets/SalonImages/GallaryImage-3.jpg";
import GalleryImage_4 from "../assets/SalonImages/GallaryImage-4.jpg";
import GalleryImage_5 from "../assets/SalonImages/GallaryImage-5.jpg";
import GalleryImage_6 from "../assets/SalonImages/GallaryImage-6.jpg";
import GalleryImage_7 from "../assets/SalonImages/GallaryImage-7.jpg";
import GalleryImage_8 from "../assets/SalonImages/GallaryImage-8.jpg";
import GalleryImage_9 from "../assets/SalonImages/GallaryImage-9.jpg";
import GalleryImage_10 from "../assets/SalonImages/GallaryImage-10.jpg";
import GalleryImage_11 from "../assets/SalonImages/GallaryImage-11.jpg";
import GalleryImage_12 from "../assets/SalonImages/GallaryImage-2.jpg";

const Gallery = () => {
  const categories = [
    { id: "all", name: "All" },
    { id: "haircuts", name: "Haircuts" },
    { id: "coloring", name: "Coloring" },
    { id: "nails", name: "Nails" },
    { id: "makeup", name: "Makeup" },
    { id: "salon", name: "Salon" },
  ];

  const galleryItems = [
    { id: 1, image: GalleryImage_1, title: "Modern Bob Cut", category: "haircuts" },
    { id: 2, image: GalleryImage_2, title: "Reception", category: "salon" },
    { id: 3, image: GalleryImage_3, title: "Hair Wash & Blowout", category: "salon" },
    { id: 4, image: GalleryImage_4, title: "Natural Glam Makeup", category: "makeup" },
    { id: 5, image: GalleryImage_5, title: "Nail Art Design", category: "nails" },
    { id: 6, image: GalleryImage_6, title: "Pedicure Treatment", category: "nails" },
    { id: 7, image: GalleryImage_7, title: "Salon Styling Session", category: "salon" },
    { id: 8, image: GalleryImage_8, title: "Product Application", category: "makeup" },
    { id: 9, image: GalleryImage_9, title: "Pixie Cut", category: "haircuts" },
    { id: 10, image: GalleryImage_10, title: "Ombre Hair", category: "coloring" },
    { id: 11, image: GalleryImage_11, title: "Bridal Hairstyle", category: "haircuts" },
    { id: 12, image: GalleryImage_12, title: "Bridal Makeup", category: "makeup" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      <SEO
        title="Gallery — Hair, Makeup & Beauty Transformations"
        description="Browse the Mangpahang Unisex Salon gallery showcasing haircuts, balayage, ombre, hair coloring, makeup, nail art, and styling transformations from our Kathmandu salon."
        keywords="salon gallery Kathmandu, hair transformation Kathmandu, balayage Kathmandu, hair color gallery, nail art gallery Kathmandu, makeup gallery Nepal"
        canonical="/gallery"
      />

      {/* ── HERO ── */}
      <section className="bg-[#222222] py-28 text-center">
        <motion.p
          className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mangpahang Unisex Salon · Baneshwor, Kathmandu
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our <span className="text-[#d4af37]">Gallery</span>
        </motion.h1>
        <motion.div
          className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.p
          className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Browse through our portfolio of stunning transformations and beautiful styles
        </motion.p>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section className="py-16">
        <div className="container-custom">

          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">
              Our Work
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Explore our collection of beautiful transformations by our talented team
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#d4af37] text-white border-[#d4af37]"
                    : "bg-transparent text-gray-500 border-gray-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Gallery grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <GalleryItem
                    image={item.image}
                    title={item.title}
                    category={
                      categories.find((cat) => cat.id === item.category)?.name || ""
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── CTA ── */}
          <div className="bg-[#222222] rounded-2xl px-8 py-12 text-center mt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Love What You See?
            </h2>
            <p className="text-gray-400 text-sm mb-7">
              Book an appointment and let us create your perfect look
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              
               <a href="tel:+9779851234567"
                className="bg-[#d4af37] text-[#1a1a1a] px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Call Now
              </a>
              
              <a  href="/contact"
                className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default Gallery;