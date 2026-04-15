import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors, Palette, Smile, Wand2,
  SnailIcon as Nail, SprayCanIcon as Spray, Leaf, Gem,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

const Services = () => {
  const categories = [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair" },
    { id: "face", name: "Face & Skin" },
    { id: "nails", name: "Nails" },
    { id: "massage", name: "Massage" },
    { id: "makeup", name: "Bridal Makeup" },
  ];

  const services = [
    {
      id: 1, cat: "hair", icon: Scissors,
      title: "Haircut with Wash & Blow Dry",
      price: "From Rs.700",
      desc: "Expert haircuts tailored to your face shape and personal style. Includes consultation, shampoo, cut, and styling.",
      details: [
        { n: "Man Haircut", p: "Rs.700" },
        { n: "Ladies", p: "Rs.1,500" },
        { n: "Fringe/Bangs", p: "Rs.500" },
        { n: "Beard Trim", p: "Rs.200" },
        { n: "Clean Shave", p: "Rs.350" },
      ],
    },
    {
      id: 2, cat: "hair", icon: Palette,
      title: "Hair Color & Highlights",
      price: "From Rs.1500",
      desc: "From subtle highlights to bold transformations using premium products for vibrant, long-lasting results.",
      details: [
        { n: "Global (Per Tube)", p: "Rs.3,000" },
        { n: "Root Touch Up", p: "Rs.2,500" },
        { n: "Front Touch Up", p: "Rs.1,500" },
        { n: "Half Highlight", p: "Rs.6,000" },
        { n: "Full Highlight", p: "Rs.9,000" },
        { n: "Ombré", p: "Rs.7,000" },
        { n: "Balayage", p: "Rs.9,000+" },
        { n: "Quick Toning", p: "Rs.3,000" },
      ],
    },
    {
      id: 3, cat: "hair", icon: Smile,
      title: "Styling Set with Conditioning",
      price: "From Rs.300",
      desc: "Complete hair care with cleansing, conditioning, and professional finishing for a polished look.",
      details: [
        { n: "Ladies Blow Dry", p: "Rs.1,000" },
        { n: "Ironing/Tongs/Roller Set", p: "Rs.1,200" },
        { n: "Man Hair Style", p: "Rs.300" },
      ],
    },
    {
      id: 4, cat: "face", icon: Wand2,
      title: "Skin Care & Facial",
      price: "From Rs.500",
      desc: "Rejuvenating treatments to cleanse, hydrate, and revitalise your skin for a healthy, glowing complexion.",
      details: [
        { n: "Super Express Clean", p: "Rs.500" },
        { n: "Casmara Clean Up", p: "Rs.2,500" },
        { n: "Casmara facial mini", p: "Rs.4,500" },
        { n: "Casmara goji", p: "Rs.5,700" },
        { n: "Casmara Nacar", p: "Rs.6,900" },
        { n: "Casmara Ocean Miracle", p: "Rs.5,700" },
      ],
    },
    {
      id: 5, cat: "nails", icon: Nail,
      title: "Manicure & Pedicure",
      price: "From Rs.2000",
      desc: "Luxurious nail care with exfoliation, massage, and your choice of polish for a perfectly polished finish.",
      details: [
        { n: "Manicure", p: "Rs.2,000" },
        { n: "Pedicure", p: "Rs.2,000" },
      ],
    },
    {
      id: 6, cat: "hair", icon: Spray,
      title: "Waxing",
      price: "From Rs.500",
      desc: "Smooth, hair-free skin using high-quality wax and professional techniques for lasting results.",
      details: [
        { n: "Underarms", p: "Rs.500" },
        { n: "Whole Body", p: "Rs.7,000" },
        { n: "Legs", p: "Rs.1,700" },
        { n: "Hands", p: "Rs.1,200" },
      ],
    },
    {
      id: 7, cat: "hair", icon: Leaf,
      title: "Threading",
      price: "From Rs.50",
      desc: "Precise, gentle hair removal for eyebrows and facial hair. Suitable for all skin types.",
      details: [
        { n: "Full Face (Women)", p: "Rs.500" },
        { n: "Full Face (Men)", p: "Rs.550" },
        { n: "Eyebrows (Women)", p: "Rs.100" },
        { n: "Eyebrows (Men)", p: "Rs.120" },
        { n: "Upper Lip (Women)", p: "Rs.100" },
        { n: "Upper Lip (Men)", p: "Rs.120" },
        { n: "Chin", p: "Rs.100" },
        { n: "Forehead", p: "Rs.150" },
      ],
    },
    {
      id: 8, cat: "nails", icon: Gem,
      title: "Nail Design & Art",
      price: "From Rs.50",
      desc: "Express your style with expert nail art — from subtle accents to elaborate custom designs.",
      details: [
        { n: "French Art", p: "Rs.100" },
        { n: "Glitter Art", p: "Rs.100" },
        { n: "Chrome Art", p: "Rs.100" },
        { n: "Marble Art", p: "Rs.100" },
        { n: "Ombré Art", p: "Rs.50" },
        { n: "3D Art", p: "Rs.200" },
        { n: "Stone/Charms", p: "Rs.100" },
        { n: "Seashell Art", p: "Rs.150" },
      ],
    },
    {
      id: 9, cat: "nails", icon: Gem,
      title: "Nail Extensions",
      price: "From Rs.1500",
      desc: "Professional extensions for perfect length and shape using durable, high-quality materials.",
      isTable: true,
      details: [
        { name: "Gel Overlay/Refill", n: "Rs.2000", e: "Rs.3000" },
        { name: "French Nails", n: "Rs.2,000", e: "Rs.2,500" },
        { name: "Ombré/Airbrush", n: "Rs.2,500", e: "Rs.3,000" },
        { name: "Cat Eye Nails", n: "Rs.2,500", e: "Rs.3,000" },
        { name: "Chrome Nails", n: "Rs.2,500", e: "Rs.3,000" },
        { name: "Marble Nails", n: "Rs.2,500", e: "Rs.3,000" },
        { name: "Toe Gel Nails", n: "Rs.1,500", e: "Rs.2,000" },
        { name: "Gel Removal", n: "Rs.700", e: "—" },
      ],
    },
    {
      id: 10, cat: "massage", icon: Gem,
      title: "Massage",
      price: "From Rs.1500",
      desc: "Indulge in a soothing hair and head massage designed to relieve stress, stimulate the scalp, and promote healthy hair growth.",
      details: [
        { n: "Head(Oil)-For Men", p: "Rs.1,500" },
        { n: "Head(Oil)-For Women", p: "Rs.2,000" },
        { n: "Hair Spa(Men)", p: "Rs.1,500" },
        { n: "Hair Spa(Women) ", p: "Rs.2,500" },
      ],
    },
    {
      id: 11, cat: "hair", icon: Scissors,
      title: "Keratin, Botox, Nanoplastia(treatment) and Hair straightening",
      price: "From Rs.8000",
      desc: "Transform unruly, damaged hair into smooth and lustrous locks with our professional hair straightening and treatment services using top-quality products.",
      details: [
        { n: "G.K. Resistant", p: "Rs.9,000-10,000" },
        { n: "G.K. Best", p: "Rs.10,000-12,000" },
        { n: "G.K. cocoBest", p: "Rs.10,000-12,000" },
        { n: "Amazon series cysteine", p: "Rs.9,000-10,000" },
        { n: "Extreme protein (Brazilian)", p: "Rs.8,000-9,000" },
        { n: "Botox Hair", p: "Rs.10,000-12,000" },
        { n: "Nanoplastia", p: "Rs.10,000-12,000" },
      ],
    },
    {
      id: 12, cat: "hair", icon: Scissors,
      title: "Hair treatment with Blast Day and Hair Perm",
      price: "From Rs.8000",
      desc: "Deeply nourish and reshape your hair with our intensive blast day treatment and professional perming — perfect for adding volume, bounce, and lasting style.",
      details: [
        { n: "Fiberplex", p: "Rs.3,500" },
        { n: "Olaplex", p: "Rs.5,000" },
        { n: "Fibre Clinix", p: "Rs.3,000" },
        { n: "Repair Molecular treatment", p: "Rs.3,000" },
        { n: "Hair Perm(Men)", p: "Rs.5,000-7,000" },
        { n: "Hair Perm(Women)", p: "Rs.10,000-12,000" },
      ],
    },
    {
      id: 13, cat: "makeup", icon: Wand2,
      title: "Bridal Makeup",
      price: "From Rs.4500",
      desc: "Celebrate your big day with a stunning bridal look crafted by our professional makeup artists, using premium products for a flawless, picture-perfect finish that lasts all day.",
      details: [
        { n: "Bridal Makeup", p: "Rs.25,000" },
        { n: "Reception Makeup", p: "Rs.8,000" },
        { n: "Party Makeup", p: "Rs.4,500" },
        { n: "Soft Glam Makeup", p: "Rs.4,500" },
        { n: "Mehendi Makeup", p: "Rs.4,500" },
      ],
    },
    
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedService, setExpandedService] = useState(null);

  const filtered = activeCategory === "all"
    ? services
    : services.filter((s) => s.cat === activeCategory);

  return (
    <PageTransition>
      <SEO
        title="Salon Services — Haircut, Waxing, Nails, Facial & More"
        description="Explore all services at Mangpahang Unisex Salon in Mid-Baneshwor, Kathmandu."
        keywords="haircut Baneshwor, waxing Kathmandu, nail art Kathmandu, hair color Kathmandu"
        canonical="/services"
      />

      {/* ── HERO ── */}
      <section className="bg-[#222222] py-28 text-center">
        <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
          Mangpahang Unisex Salon · Baneshwor, Kathmandu
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-[#d4af37]">Services</span>
        </h1>
        <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-5" />
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Premium hair & beauty services crafted for you — in a relaxing, welcoming environment
        </p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16">
        <div className="container-custom">

          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">
              Premium Beauty Services
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Tap any card to see full pricing details
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#d4af37] text-white border-[#d4af37]"
                    : "bg-transparent text-gray-500 border-gray-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    expandedService === service.id
                      ? "border-[#d4af37]"
                      : "border-gray-200 hover:border-[#d4af37]"
                  }`}
                >
                  {/* Card header — clickable */}
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() =>
                      setExpandedService(
                        expandedService === service.id ? null : service.id
                      )
                    }
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-lg bg-[#f8f0e3] flex items-center justify-center flex-shrink-0">
                        <service.icon size={20} className="text-[#b8921a]" strokeWidth={1.8} />
                      </div>
                      {/* Title + price */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wide leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-[#d4af37] font-semibold text-sm mt-1">
                          {service.price}
                        </p>
                      </div>
                      {/* Chevron */}
                      <svg
                        className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                          expandedService === service.id ? "rotate-180" : ""
                        }`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {/* Description */}
                    <p className="text-gray-500 text-xs leading-relaxed mt-3 pt-3 border-t border-gray-100">
                      {service.desc}
                    </p>
                  </div>

                  {/* Expandable pricing */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-[#f8f0e3] border-t border-[#e8e0d0] px-5 py-4"
                      >
                        {service.isTable ? (
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="border-b border-[#ddd]">
                                  <th className="text-left py-2 px-1 font-semibold text-gray-500">Service</th>
                                  <th className="text-left py-2 px-1 font-semibold text-gray-500 whitespace-nowrap">Natural</th>
                                  <th className="text-left py-2 px-1 font-semibold text-gray-500 whitespace-nowrap">Extension</th>
                                </tr>
                              </thead>
                              <tbody>
                                {service.details.map((d, i) => (
                                  <tr key={i} className="border-b border-black/5 last:border-0">
                                    <td className="py-2 px-1 text-gray-600">{d.name}</td>
                                    <td className="py-2 px-1 font-semibold text-[#222]">{d.n}</td>
                                    <td className="py-2 px-1 font-semibold text-[#222]">{d.e}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="space-y-0">
                            {service.details.map((d, i) => (
                              <div
                                key={i}
                                className="flex justify-between items-center py-2 border-b border-black/5 last:border-0 text-xs"
                              >
                                <span className="text-gray-600">{d.n}</span>
                                <span className="font-semibold text-[#222]">{d.p}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ── CTA ── */}
          <div className="bg-[#222222] rounded-2xl px-8 py-12 text-center mt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-gray-400 text-sm mb-7">
              Our team is ready to help you look and feel your best
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              
               <a href="tel:+9779851234567"
                className="bg-[#d4af37] text-[#1a1a1a] px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Call Now
              </a>
              
               <a href="/contact"
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

export default Services;