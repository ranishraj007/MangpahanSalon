"use client";
import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";

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
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Mid-Baneswor, Kathmandu, Nepal"],
      link: "https://www.google.com/maps/place/Mangpahang+Unisex+Salon+(Mid-Baneswor)/@27.6952872,85.3374764,17z/",
      linkText: "View on Google Maps",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+977 9708073356", "+977 9708073356"],
      link: "tel:+9779708073356",
      linkText: "Call Us",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["mangpahangsalon@gmail.com", "info@mangpahang.com.np"],
      link: "mailto:mangpahangsalon@gmail.com",
      linkText: "Send Email",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["sunday - Saturday: 10:00 AM - 8:00 PM"],
      link: null,
      linkText: null,
    },
  ];

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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with us for appointments, inquiries, or feedback
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible."
                centered={false}
              />

              {submitSuccess ? (
                <motion.div
                  className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="haircut">Haircut & Styling</option>
                        <option value="coloring">Hair Coloring</option>
                        <option value="facial">Facial & Skincare</option>
                        <option value="makeup">Makeup</option>
                        <option value="nails">Manicure & Pedicure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary w-full ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </motion.form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <SectionTitle
                title="Contact Information"
                subtitle="Here's how you can reach us"
                centered={false}
              />
              <div className="space-y-8 mt-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-full text-primary mr-4">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 mb-1">
                          {detail}
                        </p>
                      ))}
                      {item.link && (
                        <a
                          href={item.link}
                          target={
                            item.title === "Our Location" ? "_blank" : "_self"
                          }
                          rel="noopener noreferrer"
                          className="text-primary font-medium hover:underline inline-flex items-center mt-2"
                        >
                          {item.linkText}
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
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Social Media */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/people/Mangpahang-Unisex-Salon/61564606314717/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5762714553636!2d85.33490107547936!3d27.695287176195683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19de8c6534ef%3A0x4c847f36fa6441fe!2sMangpahang%20Unisex%20Salon%20(Mid-Baneswor)!5e0!3m2!1sen!2sus!4v1682345678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mangpahang Unisex Salon Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                question: "Do I need to make an appointment?",
                answer:
                  "While we do accept walk-ins, we recommend making an appointment to ensure you get your preferred time slot and stylist. You can book by phone or through our contact form.",
              },
              {
                question: "How early should I arrive for my appointment?",
                answer:
                  "We recommend arriving 10-15 minutes before your scheduled appointment time to complete any necessary paperwork and relax before your service begins.",
              },
              {
                question: "What if I need to cancel or reschedule?",
                answer:
                  "We understand that plans change. We appreciate at least 24 hours notice for cancellations or rescheduling to allow us to offer your slot to another client.",
              },
              {
                question: "Do you offer gift certificates?",
                answer:
                  "Yes, we offer gift certificates for all our services. They make perfect gifts for birthdays, anniversaries, or any special occasion.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, credit/debit cards, and mobile payment options like eSewa and Khalti.",
              },
              {
                question: "Do you use high-quality products?",
                answer:
                  "Yes, we only use premium, professional-grade products that are gentle on your hair and skin while providing excellent results.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
