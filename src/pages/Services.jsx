import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Palette,
  Smile,
  Wand2,
  ChevronDown,
  SprayCanIcon as Spray,
  Leaf,
  Gem,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { servicePages } from "../data/routes";

const serviceIcons = { Scissors, Palette, Smile, Wand2, Spray, Leaf, Gem };

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mangpahang Unisex Salon Services",
  description:
    "Salon services in Kathmandu including haircut, hair styling, hair color, balayage, facial, waxing, threading, nails, bridal makeup, hair spa, keratin, botox, nanoplastia, and massage.",
  itemListElement: [
    "Haircut with Wash & Blow Dry",
    "Hair Color & Highlights",
    "Balayage and Ombre Hair Color",
    "Facial and Skincare",
    "Manicure and Pedicure",
    "Waxing",
    "Threading",
    "Nail Design and Nail Art",
    "Nail Extensions",
    "Hair Spa and Head Massage",
    "Keratin, Botox, Nanoplastia and Hair Straightening",
    "Bridal Makeup and Party Makeup",
  ].map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      provider: { "@id": "https://mangpahang.com.np/#salon" },
      areaServed: "Kathmandu, Nepal",
    },
  })),
};

const Services = () => {
  const categories = [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair" },
    { id: "face", name: "Face & Skin" },
    { id: "nails", name: "Nails" },
    { id: "massage", name: "Massage" },
    { id: "makeup", name: "Bridal Makeup" },
  ];


  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? services
    : services.filter((s) => s.cat === activeCategory);

  return (
    <PageTransition>
      <SEO
        title="Salon Services in Kathmandu — Haircut, Makeup, Nails & Facial"
        description="Explore Mangpahang Unisex Salon services in Mid-Baneshwor, Kathmandu: stylish haircut, hair color, highlights, balayage, ombre, waxing, threading, nail art, nail extensions, facial, bridal makeup, party makeup, keratin, botox, nanoplastia, and hair spa."
        keywords="salon services Kathmandu, best salon services Nepal, haircut Baneshwor, stylish haircut Kathmandu, hair color Kathmandu, balayage Kathmandu, ombre hair Kathmandu, waxing Kathmandu, threading Kathmandu, nail art Kathmandu, nail extensions Kathmandu, facial Kathmandu, bridal makeup Kathmandu, party makeup Kathmandu, keratin treatment Kathmandu, botox hair treatment Kathmandu, nanoplastia Kathmandu"
        canonical="/services"
        schema={servicesSchema}
      />

      {/* ── HERO ── */}
      <section className="page-hero py-32 text-center">
        <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
          Mangpahang Unisex Salon · Baneshwor, Kathmandu
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-[#d4af37]">Services</span>
        </h1>
        <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-5" />
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Premium hair, makeup, nail, skincare, waxing, threading, and hair
          treatment services crafted for you in Baneshwor, Kathmandu
        </p>
      </section>
      <Breadcrumbs />

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 bg-[#fffaf3]">
        <div className="container-custom">

          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#171412]">
              Premium Beauty Services in Kathmandu
            </h2>
            <p className="text-[#746b61] text-sm mt-3">
              Tap any card to see full pricing details for one of the best
              salon service menus in Baneshwor
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10" role="list" aria-label="Service categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#171412] text-white border-[#171412]"
                    : "bg-white/70 text-[#746b61] border-[#eadfce] hover:border-[#b68a2a] hover:text-[#8f681b]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filtered.map((service) => {
                const ServiceIcon = serviceIcons[service.icon];
                const detailPage = servicePages.find((page) => page.serviceId === service.id);

                return (
                <motion.div
                  key={service.id}
                  layout
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="surface-card self-start rounded-2xl overflow-hidden"
                >
                  <details className="group">
                  <summary className="w-full p-5 text-left cursor-pointer list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b68a2a]">
                    <span className="flex items-start gap-3">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#f7efe2] text-[#8f681b]">
                        <ServiceIcon size={20} strokeWidth={1.8} />
                      </span>
                      {/* Title + price */}
                      <span className="flex-1 min-w-0">
                        <span className="mb-3 block h-1 w-10 rounded-full bg-[#d6b05b]" />
                        <span className="block text-sm font-bold text-[#171412] uppercase tracking-wide leading-snug">
                          {service.title}
                        </span>
                        <span className="block text-[#8f681b] font-semibold text-sm mt-2">
                          {service.price}
                        </span>
                      </span>
                      {/* Chevron */}
                      <ChevronDown
                        size={16}
                        className="text-gray-400 flex-shrink-0 mt-1 transition-transform group-open:rotate-180"
                      />
                    </span>
                    {/* Description */}
                    <span className="block text-[#746b61] text-xs leading-relaxed mt-4 pt-4 border-t border-[#eadfce]">
                      {service.desc}
                    </span>
                  </summary>

                  {/* Pricing stays in the HTML even when collapsed. */}
                      <div className="bg-[#f7efe2] border-t border-[#eadfce] px-5 py-4">
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
                      </div>
                  </details>
                  {detailPage && (
                    <Link to={detailPage.path} className="block px-5 pb-5 text-sm font-semibold text-[#8f681b] underline">
                      {detailPage.label} prices and booking
                    </Link>
                  )}
                </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ── CTA ── */}
          <div className="premium-panel rounded-3xl px-8 py-12 text-center mt-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-gray-400 text-sm mb-7">
              Our team is ready to help you look and feel your best
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              
               <a href="tel:+9779708073356"
                className="btn-primary"
              >
                Call Now
              </a>
              
               <a href="/contact"
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

export default Services;
