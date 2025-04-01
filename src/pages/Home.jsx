import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BG_Image from "../assets/SalonImages/GallaryImage-1.jpg";
import BG_Image_2 from "../assets/SalonImages/GallaryImage-2.jpg";

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
      name: "Sarah Johnson",
      role: "Regular Customer",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Mangpahang Salon has been my go-to place for years. Their attention to detail and friendly service keeps me coming back!",
    },
    {
      name: "Michael Chen",
      role: "First-time Customer",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "I was nervous about trying a new salon, but the staff made me feel comfortable and I love my new haircut!",
    },
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The best salon experience in Kathmandu! Professional service with amazing results every time.",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url(${BG_Image_2})`,
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Your True Beauty at{" "}
              <span className="text-primary">Mangpahang</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience premium hair and beauty services in a relaxing
              environment. Our skilled professionals are dedicated to enhancing
              your natural beauty.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services" className="btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn-secondary">
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
                src={BG_Image}
                alt="About Mangpahang Salon"
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
                feel their best. Our salon offers a wide range of services
                designed to enhance your natural beauty and boost your
                confidence.
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
                use only premium products and stay up-to-date with the latest
                trends and techniques.
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
            title="Our Services"
            subtitle="Experience premium hair and beauty services tailored to your unique style and needs"
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
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
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
                image={testimonial.image}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
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
              className="bg-white text-black px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-primary "
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
