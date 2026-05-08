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

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Mangpahang Unisex Salon",
  alternateName: [
    "Mangpahang Salon",
    "Mangpahang Unisex Salon Kathmandu",
    "Mangpahang Salon Baneshwor",
  ],
  url: "https://mangpahang.com.np/",
  image: "https://mangpahang.com.np/Logo.jpg",
  telephone: "+9779708073356",
  email: "mangpahangsalon@gmail.com",
  priceRange: "Rs.50 - Rs.25000",
  description:
    "Mangpahang Unisex Salon is a hair and beauty salon in Mid-Baneshwor, Kathmandu offering haircut, styling, hair color, balayage, facial, waxing, threading, nails, bridal makeup, party makeup, keratin, botox, nanoplastia, hair spa, and grooming services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mid-Baneshwor",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati Province",
    postalCode: "44600",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.695287,
    longitude: 85.334901,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    "Kathmandu",
    "Baneshwor",
    "Mid-Baneshwor",
    "New Baneshwor",
    "Koteshwor",
    "Tinkune",
    "Maitidevi",
    "Putalisadak",
    "Lalitpur",
    "Bhaktapur",
    "Nepal",
  ],
  knowsAbout: [
    "best salon in Kathmandu",
    "best salon in Nepal",
    "stylish haircut",
    "hair color",
    "bridal makeup",
    "nail art",
    "facial",
    "waxing",
    "threading",
    "hair treatment",
    "keratin treatment",
  ],
  sameAs: [
    "https://www.facebook.com/people/Mangpahang-Unisex-Salon/61564606314717/",
    "https://www.instagram.com/mangpahangunisexsalon/",
  ],
};

const Home = () => {
  const services = [
    {
      icon: "scissors",
      title: "Haircut & Styling",
      description:
        "Expert haircuts and styling for all hair types and preferences.",
    },
    {
      icon: "palette",
      title: "Hair Coloring",
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
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url(${HeroBackground})`,
          }}
        ></div>
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Your True Beauty at{" "}
              <span className="text-[#c9a84c]">Mangpahang</span>
            </motion.h1>
            <motion.p
              className="text-sm md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Searching for the best salon in Kathmandu? Visit our Mid-Baneshwor
              unisex salon for stylish haircuts, hair color, bridal makeup,
              nails, facial, waxing, threading, and modern beauty care.
            </motion.p>
            <motion.div
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services" 
              className="btn-primary px-6 py-3 text-sm font-medium rounded-md">
                Our Services
              </Link>
              <Link to="/contact" 
              className="btn-secondary px-6 py-3 text-sm font-medium rounded-md">
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
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
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <div>
              <SectionTitle
                title="Welcome to Mangpahang Unisex Salon"
                centered={false}
              />
              <motion.p
                className="mb-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
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
                className="mb-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
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
                initial={{ opacity: 0, y: 20 }}
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
      <section className="py-20 bg-gray-50">
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
              />
            ))}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
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

      {/* Local Search Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="A Salon People Search for in Kathmandu"
              subtitle="Mangpahang Unisex Salon serves clients looking for reliable beauty care, stylish haircuts, bridal makeup, nails, facial, waxing, threading, and professional hair treatments in Baneshwor and across Kathmandu."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 text-sm text-gray-600">
              {[
                "Best salon in Kathmandu",
                "Best salon in Nepal",
                "Hair salon in Baneshwor",
                "Stylish haircut Kathmandu",
                "Bridal makeup Kathmandu",
                "Nail salon Kathmandu",
                "Facial in Kathmandu",
                "Waxing and threading",
              ].map((term) => (
                <span
                  key={term}
                  className="border border-gray-200 rounded-md px-3 py-2 bg-white"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We're committed to excellence in every aspect of our service"
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👩‍💼",
                title: "Expert Stylists",
                description:
                  "Our team consists of highly trained professionals with years of experience",
              },
              {
                icon: "✨",
                title: "Premium Products",
                description:
                  "We use only high-quality products that are gentle on your hair and skin",
              },
              {
                icon: "🌿",
                title: "Relaxing Environment",
                description:
                  "Enjoy a peaceful atmosphere designed for your comfort and relaxation",
              },
              {
                icon: "💯",
                title: "Personalized Service",
                description:
                  "Every treatment is tailored to meet your specific needs and preferences",
              },
              {
                icon: "🔄",
                title: "Latest Techniques",
                description:
                  "We stay updated with the newest trends and techniques in the industry",
              },
              {
                icon: "💖",
                title: "Customer Satisfaction",
                description:
                  "Your happiness is our priority - we're not satisfied until you are",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-lg backdrop-blur-sm border border-black/25 bg-amber-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-black">{item.description}</p>
              </motion.div>
            ))} 
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
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
      <section className="py-20 bg-primary text-black">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Look?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book an appointment today and experience the Mangpahang difference.
            Our team is ready to help you look and feel your best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-yellow-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary "
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
