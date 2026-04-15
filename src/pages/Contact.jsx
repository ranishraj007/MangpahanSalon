import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, ChevronDown } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  const contactCards = [
    {
      id: 1,
      icon: MapPin,
      title: "Our Location",
      summary: "Mid-Baneshwor, Kathmandu",
      details: [
        { label: "Address", value: "Mid-Baneswor, Kathmandu, Nepal" },
        { label: "Landmark", value: "Near Mid-Baneshwor Chowk" },
      ],
      link: "https://www.google.com/maps/place/Mangpahang+Unisex+Salon+(Mid-Baneswor)/@27.6952872,85.3374764,17z/",
      linkText: "View on Google Maps",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone Number",
      summary: "+977 9708073356",
      details: [
        { label: "Primary", value: "+977 9708073356" },
      ],
      link: "tel:+9779708073356",
      linkText: "Call Us",
    },
    {
      id: 3,
      icon: Mail,
      title: "Email Address",
      summary: "mangpahangsalon@gmail.com",
      details: [
        { label: "Email", value: "mangpahangsalon@gmail.com" },
      ],
      link: "mailto:mangpahangsalon@gmail.com",
      linkText: "Send Email",
    },
    {
      id: 4,
      icon: Clock,
      title: "Opening Hours",
      summary: "Open Daily · 10 AM – 7 PM",
      details: [
        { label: "Sunday – Saturday", value: "10:00 AM – 7:00 PM" },
        { label: "Public Holidays", value: "Subject to change" },
      ],
      link: null,
      linkText: null,
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Do I need to make an appointment?",
      answer:
        "While we do accept walk-ins, we recommend making an appointment to ensure you get your preferred time slot and stylist. You can book by phone or through our contact form.",
    },
    {
      id: 2,
      question: "How early should I arrive?",
      answer:
        "We recommend arriving 10–15 minutes before your scheduled appointment to complete any necessary paperwork and relax before your service begins.",
    },
    {
      id: 3,
      question: "What if I need to cancel or reschedule?",
      answer:
        "We appreciate at least 24 hours notice for cancellations or rescheduling to allow us to offer your slot to another client.",
    },
    {
      id: 4,
      question: "Do you offer gift certificates?",
      answer:
        "Yes, we offer gift certificates for all our services. They make perfect gifts for birthdays, anniversaries, or any special occasion.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit/debit cards, and mobile payment options like eSewa and Khalti.",
    },
    {
      id: 6,
      question: "Do you use high-quality products?",
      answer:
        "Yes, we only use premium, professional-grade products that are gentle on your hair and skin while providing excellent results.",
    },
  ];

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#d4af37] transition-colors duration-200";

  return (
    <PageTransition>
      <SEO
        title="Contact & Book Appointment — Baneshwor, Kathmandu"
        description="Book an appointment at Mangpahang Unisex Salon, Mid-Baneshwor, Kathmandu. Call +977-9708073356, email mangpahangsalon@gmail.com, or use our contact form. Open daily 10 AM – 7 PM."
        keywords="book salon appointment Kathmandu, Mangpahang contact, salon Baneshwor address, hair appointment Kathmandu, beauty salon booking Nepal"
        canonical="/contact"
      />

      {/* ── HERO ── */}
      <section className="bg-[#222222] py-28 text-center">
        <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
          Mangpahang Unisex Salon · Baneshwor, Kathmandu
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact <span className="text-[#d4af37]">Us</span>
        </h1>
        <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-5" />
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Get in touch with us for appointments, inquiries, or feedback
        </p>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="py-16">
        <div className="container-custom">

          {/* Section heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">
              How to Reach Us
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Tap any card to see more details
            </p>
          </div>

          {/* Info cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            <AnimatePresence>
              {contactCards.map((card) => (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    expandedFaq === `card-${card.id}`
                      ? "border-[#d4af37]"
                      : "border-gray-200 hover:border-[#d4af37]"
                  }`}
                >
                  {/* Card header — clickable */}
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() =>
                      setExpandedFaq(
                        expandedFaq === `card-${card.id}` ? null : `card-${card.id}`
                      )
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-lg bg-[#f8f0e3] flex items-center justify-center flex-shrink-0">
                        <card.icon size={20} className="text-[#b8921a]" strokeWidth={1.8} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wide leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-[#d4af37] font-semibold text-sm mt-1">
                          {card.summary}
                        </p>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                          expandedFaq === `card-${card.id}` ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {expandedFaq === `card-${card.id}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-[#f8f0e3] border-t border-[#e8e0d0] px-5 py-4"
                      >
                        <div className="space-y-0">
                          {card.details.map((d, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center py-2 border-b border-black/5 last:border-0 text-xs"
                            >
                              <span className="text-gray-500">{d.label}</span>
                              <span className="font-semibold text-[#222]">{d.value}</span>
                            </div>
                          ))}
                          {card.link && (
                            <div className="pt-3">
                              <a
                                href={card.link}
                                target={card.title === "Our Location" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[#d4af37] text-xs font-semibold hover:underline"
                              >
                                {card.linkText}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ── FORM + MAP GRID ── */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="mb-6">
                <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-2">
                  Get In Touch
                </p>
                <h2 className="text-xl font-bold text-[#222222] mb-1">
                  Send Us a Message
                </h2>
                <div className="w-8 h-[2px] bg-[#d4af37]" />
              </div>

              {submitSuccess ? (
                <motion.div
                  className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-base font-bold mb-1">Thank You!</h3>
                  <p className="text-sm">Your message has been sent successfully. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Your Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+977 98XXXXXXXX" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                        Service Interested In
                      </label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select a service</option>
                        <option value="haircut">Haircut & Styling</option>
                        <option value="coloring">Hair Coloring</option>
                        <option value="facial">Facial & Skincare</option>
                        <option value="makeup">Makeup</option>
                        <option value="nails">Manicure & Pedicure</option>
                        <option value="waxing">Waxing</option>
                        <option value="threading">Threading</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      Your Message *
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell us about your appointment or inquiry..." className={inputClass} />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#d4af37] text-white py-3 rounded-lg font-semibold text-sm tracking-wide transition-opacity duration-200 ${
                      isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5762714553636!2d85.33490107547936!3d27.695287176195683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19de8c6534ef%3A0x4c847f36fa6441fe!2sMangpahang%20Unisex%20Salon%20(Mid-Baneswor)!5e0!3m2!1sen!2sus!4v1682345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "260px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mangpahang Unisex Salon Location"
                />
              </div>

              {/* Social media card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[#f8f0e3] flex items-center justify-center flex-shrink-0">
                    <Facebook size={20} className="text-[#b8921a]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wide">Follow Us</h3>
                    <p className="text-[#d4af37] font-semibold text-sm mt-1">Stay connected with us</p>
                  </div>
                </div>
                <div className="flex gap-3 border-t border-gray-100 pt-4">
                  <a
                    href="https://www.facebook.com/people/Mangpahang-Unisex-Salon/61564606314717/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Tap any question to see the answer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                    expandedFaq === `faq-${faq.id}`
                      ? "border-[#d4af37]"
                      : "border-gray-200 hover:border-[#d4af37]"
                  }`}
                >
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() =>
                      setExpandedFaq(
                        expandedFaq === `faq-${faq.id}` ? null : `faq-${faq.id}`
                      )
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-lg bg-[#f8f0e3] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#b8921a] text-sm font-bold">Q</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wide leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                          expandedFaq === `faq-${faq.id}` ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedFaq === `faq-${faq.id}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-[#f8f0e3] border-t border-[#e8e0d0] px-5 py-4"
                      >
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-[#222222] rounded-2xl px-8 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-gray-400 text-sm mb-7">
              Our team is ready to help you look and feel your best
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="tel:+9779708073356"
                className="bg-[#d4af37] text-[#1a1a1a] px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/place/Mangpahang+Unisex+Salon+(Mid-Baneswor)/@27.6952872,85.3374764,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
};

export default Contact;
