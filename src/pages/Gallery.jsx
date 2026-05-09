import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import GalleryItem from "../components/GalleryItem";
import SEO from "../components/SEO";

const galleryImageModules = import.meta.glob(
  "../assets/SalonImages/optimized/*.{jpg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const galleryImageSizes =
  "(min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 640px) calc((100vw - 68px) / 2), calc(100vw - 32px)";

const getOptimizedGalleryImage = (name) => {
  const imagePath = (width, extension) =>
    galleryImageModules[
      `../assets/SalonImages/optimized/${name}-${width}.${extension}`
    ];

  return {
    src: imagePath(768, "jpg"),
    webpSrcSet: [480, 768, 1200]
      .map((width) => `${imagePath(width, "webp")} ${width}w`)
      .join(", "),
    jpgSrcSet: [480, 768, 1200]
      .map((width) => `${imagePath(width, "jpg")} ${width}w`)
      .join(", "),
    sizes: galleryImageSizes,
    width: 768,
    height: 512,
  };
};

const galleryItems = [
  {
    id: 1,
    image: getOptimizedGalleryImage("GallaryImage-1"),
    title: "Modern Bob Cut",
    category: "haircuts",
    alt: "Modern bob haircut by Mangpahang Unisex Salon in Kathmandu",
  },
  {
    id: 2,
    image: getOptimizedGalleryImage("GallaryImage-2"),
    title: "Reception",
    category: "salon",
    alt: "Mangpahang Unisex Salon reception area in Mid-Baneshwor Kathmandu",
  },
  {
    id: 3,
    image: getOptimizedGalleryImage("GallaryImage-3"),
    title: "Hair Wash & Blowout",
    category: "salon",
    alt: "Hair wash and blowout service at Mangpahang Unisex Salon Kathmandu",
  },
  {
    id: 4,
    image: getOptimizedGalleryImage("GallaryImage-4"),
    title: "Natural Glam Makeup",
    category: "makeup",
    alt: "Natural glam makeup look from Mangpahang Unisex Salon Kathmandu",
  },
  {
    id: 5,
    image: getOptimizedGalleryImage("GallaryImage-5"),
    title: "Nail Art Design",
    category: "nails",
    alt: "Nail art design by Mangpahang Unisex Salon in Kathmandu",
  },
  {
    id: 6,
    image: getOptimizedGalleryImage("GallaryImage-6"),
    title: "Pedicure Treatment",
    category: "nails",
    alt: "Pedicure treatment service at Mangpahang Unisex Salon Kathmandu",
  },
  {
    id: 8,
    image: getOptimizedGalleryImage("GallaryImage-8"),
    title: "Product Application",
    category: "makeup",
    alt: "Professional beauty product application at Mangpahang Unisex Salon",
  },
  {
    id: 9,
    image: getOptimizedGalleryImage("GallaryImage-9"),
    title: "Pixie Cut",
    category: "haircuts",
    alt: "Pixie haircut transformation by Mangpahang Unisex Salon Kathmandu",
  },
  {
    id: 12,
    image: getOptimizedGalleryImage("GallaryImage-4"),
    title: "Bridal Makeup",
    category: "makeup",
    alt: "Bridal makeup look by Mangpahang Unisex Salon in Kathmandu",
  },
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Mangpahang Unisex Salon Gallery",
  url: "https://mangpahang.com.np/gallery",
  description:
    "Haircut, hair color, makeup, nail art, pedicure, and salon transformation gallery from Mangpahang Unisex Salon in Baneshwor, Kathmandu.",
  about: [
    "salon gallery Kathmandu",
    "hair transformation Kathmandu",
    "makeup gallery Nepal",
    "nail art Kathmandu",
    "stylish haircut Kathmandu",
  ],
  provider: {
    "@type": "HairSalon",
    name: "Mangpahang Unisex Salon",
    address: "Mid-Baneshwor, Kathmandu, Nepal",
  },
  associatedMedia: galleryItems.map((item) => ({
    "@type": "ImageObject",
    name: item.title,
    caption: item.alt,
  })),
};

const Gallery = () => {
  const categories = [
    { id: "all", name: "All" },
    { id: "haircuts", name: "Haircuts" },
    { id: "coloring", name: "Coloring" },
    { id: "nails", name: "Nails" },
    { id: "makeup", name: "Makeup" },
    { id: "salon", name: "Salon" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <PageTransition>
      <SEO
        title="Salon Gallery in Kathmandu — Hair, Makeup, Nails & Beauty"
        description="Browse Mangpahang Unisex Salon's Kathmandu gallery with stylish haircuts, hair color, makeup, bridal looks, nail art, pedicure, and salon transformations from Mid-Baneshwor."
        keywords="salon gallery Kathmandu, hair transformation Kathmandu, stylish haircut gallery Kathmandu, balayage Kathmandu, ombre Kathmandu, hair color gallery, nail art gallery Kathmandu, bridal makeup gallery Kathmandu, makeup gallery Nepal, best salon gallery Nepal"
        canonical="/gallery"
        schema={gallerySchema}
      />

      {/* ── HERO ── */}
      <section className="page-hero py-32 text-center">
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
          Browse our portfolio of stylish haircuts, hair color, makeup, nail
          art, pedicure care, and beauty transformations in Kathmandu
        </motion.p>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section className="py-20 bg-[#fffaf3]">
        <div className="container-custom">

          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#171412]">
              Our Work
            </h2>
            <p className="text-[#746b61] text-sm mt-3">
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
                    ? "bg-[#171412] text-white border-[#171412]"
                    : "bg-white/70 text-[#746b61] border-[#eadfce] hover:border-[#b68a2a] hover:text-[#8f681b]"
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
              {filteredItems.map((item, index) => (
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
                    alt={item.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    fetchPriority={index < 3 ? "high" : "auto"}
                    category={
                      categories.find((cat) => cat.id === item.category)?.name || ""
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ── CTA ── */}
          <div className="premium-panel rounded-3xl px-8 py-12 text-center mt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Love What You See?
            </h2>
            <p className="text-gray-400 text-sm mb-7">
              Book an appointment and let us create your perfect look
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              
               <a href="tel:+9779708073356"
                className="btn-primary"
              >
                Call Now
              </a>
              
              <a  href="/contact"
                className="btn-secondary"
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
