import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import SEO from "../components/SEO";
import AboutImage480 from "../assets/SalonImages/optimized/GallaryImage-1-480.webp";
import AboutImage768 from "../assets/SalonImages/optimized/GallaryImage-1-768.webp";
import AboutImage1200 from "../assets/SalonImages/optimized/GallaryImage-1-1200.webp";
import HeroBackground from "../assets/SalonImages/optimized/GallaryImage-8-1200.webp";


const Home = () => {
  const services = [
    {
      icon: "scissors",
      title: "Haircut & Styling",
      link: "/services/haircut",
      description:
        "Expert haircuts and styling for all hair types and preferences.",
    },
    {
      icon: "palette",
      title: "Hair Coloring",
      link: "/services/hair-color",
      description:
        "Professional hair coloring services from subtle highlights to bold transformations.",
    },
    {
      icon: "smile",
      title: "Facial & Skincare",
      description:
        "Rejuvenating facial treatments to keep your skin glowing and healthy.",
    },
    {
      icon: "wand",
      title: "Makeup",
      link: "/services/bridal-makeup",
      description:
        "Professional makeup services for any occasion, from natural to glamorous looks.",
    },
  ];

  const testimonials = [
    {
      name: "Minu Khatri",
      role: "Regular Customer",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Staffs were welcoming and hair consultation was excellent. I was thoroughly explained during consultation. I did hair wash, cut and blow dry and hairstyling, results were above my expectation.Highly recommended and will definitely revisit again",
    },
    {
      name: "Nishan Poudel",
      role: "First-time Customer",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "I had a great time here. The staff was friendly and welcoming. They really care about what they do. I was actually satisfied with the hair I got in the end. Overall, it was a really pleasant experience.",
    },
    {
      name: "Binu Neupane",
      role: "Regular Customer",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "I went there for a haircut and met this young guy, Mr. Sudeep. He has a magical hand that transformed my uneven hair into a fine haircut. I am impressed.Thank you Sudeep Bhai :)",
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Best Salon in Kathmandu for Hair, Makeup, Nails & Beauty"
        description="Searching for the best salon in Kathmandu or Nepal? Mangpahang Unisex Salon in Mid-Baneshwor offers stylish haircuts, hair coloring, bridal makeup, facial, waxing, threading, nails, manicure, pedicure, and hair treatments."
        keywords="best salon in Kathmandu, best salon in Nepal, stylish salon Kathmandu, stylish haircut Kathmandu, best hair salon Kathmandu, beauty salon Kathmandu, salon in Baneshwor, unisex salon Kathmandu, haircut Baneshwor, hair color Kathmandu, bridal makeup Kathmandu, nail salon Kathmandu, facial Kathmandu, waxing Baneshwor, threading Kathmandu, Mangpahang Salon"
        canonical="/"
        preloadImage={HeroBackground}
      />
      {/* Hero Section */}
      <section className="relative min-h-[88svh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/50 to-black/16 z-0"></div>
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#fffaf3] to-transparent z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url(${HeroBackground})`,
          }}
        ></div>
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl pt-20"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mangpahang Unisex Salon
            </motion.h1>
            <motion.p
              className="text-base md:text-xl leading-8 text-white/82 mb-9 max-w-2xl"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A polished Mid-Baneshwor salon for stylish haircuts, hair color,
              bridal makeup, nails, facials, waxing, threading, and modern
              beauty care in Kathmandu.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services" className="btn-primary text-sm text-center">
                Our Services
              </Link>
              <Link to="/contact" className="btn-secondary text-sm text-center">
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          aria-hidden="true"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={AboutImage768}
                srcSet={`${AboutImage480} 480w, ${AboutImage768} 768w, ${AboutImage1200} 1200w`}
                sizes="(min-width: 768px) 50vw, calc(100vw - 32px)"
                alt="Mangpahang Unisex Salon haircut and beauty service in Kathmandu"
                width="768"
                height="1152"
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-[0_30px_80px_rgba(23,20,18,0.18)] aspect-[4/5] w-full object-cover"
              />
            </motion.div>
            <div>
              <SectionTitle
                title="Welcome to Mangpahang Unisex Salon"
                centered={false}
              />
              <motion.p
                className="mb-6 text-[#746b61] leading-8"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At Mangpahang, we believe that everyone deserves to look and
                feel their best. Our salon in Baneshwor, Kathmandu offers a wide
                range of hair and beauty services designed to enhance your
                natural beauty and boost your confidence.
              </motion.p>
              <motion.p
                className="mb-8 text-[#746b61] leading-8"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our team of skilled professionals is dedicated to providing
                exceptional service in a relaxing and welcoming environment. We
                use premium products and stay up-to-date with the latest trends
                in stylish haircuts, hair color, skincare, nails, makeup, and
                grooming for clients across Kathmandu and Nepal.
              </motion.p>
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f7efe2]">
        <div className="container-custom">
          <SectionTitle
            title="Best Salon Services in Kathmandu"
            subtitle="Experience premium hair, beauty, nail, makeup, and grooming services tailored to your unique style and needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 premium-panel text-white">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We're committed to excellence in every aspect of our service"
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Stylists",
                description:
                  "Our team consists of highly trained professionals with years of experience",
              },
              {
                title: "Premium Products",
                description:
                  "We use only high-quality products that are gentle on your hair and skin",
              },
              {
                title: "Relaxing Environment",
                description:
                  "Enjoy a peaceful atmosphere designed for your comfort and relaxation",
              },
              {
                title: "Personalized Service",
                description:
                  "Every treatment is tailored to meet your specific needs and preferences",
              },
              {
                title: "Latest Techniques",
                description:
                  "We stay updated with the newest trends and techniques in the industry",
              },
              {
                title: "Customer Satisfaction",
                description:
                  "Your happiness is our priority - we're not satisfied until you are",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1]"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-[#d6b05b]" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-white/70">{item.description}</p>
              </motion.div>
            ))} 
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container-custom">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Hear from our satisfied customers about their experience with us"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                // image={testimonial.image}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f7efe2] text-[#171412]">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Look?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book an appointment today and experience the Mangpahang difference.
            Our team is ready to help you look and feel your best.
          </motion.p>
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="btn-primary inline-flex"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
