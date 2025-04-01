"use client"
import React from "react";

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scissors, Palette, Smile, Wand2, SnailIcon as Nail, SprayCanIcon as Spray, Leaf, Gem } from "lucide-react"
import PageTransition from "../components/PageTransition"
import SectionTitle from "../components/SectionTitle"

const Services = () => {
  const categories = [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair" },
    { id: "face", name: "Face & Skin" },
    { id: "body", name: "Body" },
    { id: "nails", name: "Nails" },
  ]

  const services = [
    {
      id: 1,
      title: "Haircut & Styling",
      category: "hair",
      icon: Scissors,
      price: "From $20",
      description:
        "Our expert stylists provide precision haircuts tailored to your face shape and personal style. Includes consultation, shampoo, cut, and styling.",
      details: [
        "Women's Haircut & Style - $35+",
        "Men's Haircut & Style - $25+",
        "Children's Haircut (Under 12) - $20+",
        "Blow Dry & Style - $30+",
        "Special Occasion Styling - $60+",
      ],
    },
    {
      id: 2,
      title: "Hair Coloring",
      category: "hair",
      icon: Palette,
      price: "From $60",
      description:
        "Transform your look with our professional hair coloring services. From subtle highlights to bold transformations, we use premium products for vibrant, long-lasting results.",
      details: [
        "Root Touch-Up - $60+",
        "Full Color - $80+",
        "Highlights/Lowlights - $100+",
        "Balayage/Ombre - $150+",
        "Fashion Colors - $120+",
      ],
    },
    {
      id: 3,
      title: "Facial Treatments",
      category: "face",
      icon: Smile,
      price: "From $45",
      description:
        "Rejuvenate your skin with our customized facial treatments. Each facial is tailored to address your specific skin concerns and includes cleansing, exfoliation, and hydration.",
      details: [
        "Express Facial - $45",
        "Classic Facial - $65",
        "Deep Cleansing Facial - $75",
        "Anti-Aging Facial - $85",
        "Acne Treatment Facial - $75",
      ],
    },
    {
      id: 4,
      title: "Professional Makeup",
      category: "face",
      icon: Wand2,
      price: "From $40",
      description:
        "Our makeup artists create flawless looks for any occasion. Using high-quality products, we enhance your natural beauty and ensure your makeup lasts all day.",
      details: [
        "Everyday Makeup - $40",
        "Special Occasion Makeup - $60",
        "Bridal Makeup - $100",
        "Makeup Lesson - $75",
        "Makeup with Lashes - $55",
      ],
    },
    {
      id: 5,
      title: "Manicure & Pedicure",
      category: "nails",
      icon: Nail,
      price: "From $25",
      description:
        "Treat your hands and feet to our luxurious nail services. We provide meticulous nail care, exfoliation, massage, and your choice of polish for a polished finish.",
      details: [
        "Classic Manicure - $25",
        "Gel Manicure - $35",
        "Classic Pedicure - $35",
        "Spa Pedicure - $50",
        "Mani-Pedi Combo - $55",
      ],
    },
    {
      id: 6,
      title: "Hair Treatments",
      category: "hair",
      icon: Spray,
      price: "From $40",
      description:
        "Restore health and vitality to your hair with our specialized treatments. We address issues like dryness, damage, and frizz to leave your hair looking and feeling its best.",
      details: [
        "Deep Conditioning - $40",
        "Keratin Treatment - $150+",
        "Scalp Treatment - $45",
        "Hair Mask - $35",
        "Anti-Frizz Treatment - $60",
      ],
    },
    {
      id: 7,
      title: "Body Treatments",
      category: "body",
      icon: Leaf,
      price: "From $50",
      description:
        "Indulge in our relaxing body treatments designed to detoxify, hydrate, and rejuvenate. Each treatment includes gentle exfoliation and nourishing products for soft, glowing skin.",
      details: [
        "Body Scrub - $50",
        "Body Wrap - $70",
        "Back Facial - $60",
        "Hand & Foot Treatment - $45",
        "Full Body Package - $120",
      ],
    },
    {
      id: 8,
      title: "Nail Art & Extensions",
      category: "nails",
      icon: Gem,
      price: "From $40",
      description:
        "Express your personality with our creative nail art and extension services. Our nail technicians can create anything from subtle designs to elaborate artwork.",
      details: [
        "Basic Nail Art (per nail) - $5+",
        "Full Set Nail Art - $40+",
        "Acrylic Extensions - $60+",
        "Gel Extensions - $70+",
        "Nail Repair (per nail) - $10",
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedService, setExpandedService] = useState(null)

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  const toggleExpand = (id) => {
    setExpandedService(expandedService === id ? null : id)
  }

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
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our comprehensive range of hair and beauty services designed to enhance your natural beauty
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
                  <div className="p-6 cursor-pointer" onClick={() => toggleExpand(service.id)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                          <service.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
                          <p className="text-primary font-medium">{service.price}</p>
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <p className="mt-4 text-gray-600">{service.description}</p>
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
                          <h4 className="font-bold text-secondary mb-2">Service Options:</h4>
                          <ul className="space-y-2">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
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
      <section className="py-20 bg-gray-50">
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
  )
}

export default Services

