"use client";
import React from "react";

import { motion } from "framer-motion";
import { Award, Users, Smile, Scissors } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Years of Experience" },
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Smile, value: "15+", label: "Expert Stylists" },
    { icon: Scissors, value: "20+", label: "Services Offered" },
  ];

  const team = [
    {
      name: "Aarav Sharma",
      role: "Founder & Master Stylist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience, Aarav brings creativity and precision to every haircut and style.",
    },
    {
      name: "Priya Patel",
      role: "Senior Colorist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Priya specializes in creating stunning, personalized hair colors that complement each client's unique features.",
    },
    {
      name: "Rohan Thapa",
      role: "Makeup Artist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Rohan is known for his ability to enhance natural beauty with his expert makeup techniques for any occasion.",
    },
    {
      name: "Sita Gurung",
      role: "Nail Technician",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sita creates beautiful, long-lasting nail designs that express each client's personal style.",
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
            About Us
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn more about Mangpahang Unisex Salon and our dedicated team of
            professionals
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
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
                src="/placeholder.svg?height=600&width=800"
                alt="Mangpahang Salon Interior"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <div>
              <SectionTitle title="Our Story" centered={false} />
              <motion.p
                className="mb-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Mangpahang Unisex Salon was founded in 2013 with a vision to
                provide premium hair and beauty services in a welcoming
                environment. What started as a small salon has grown into a
                beloved establishment in Kathmandu, known for exceptional
                service and skilled professionals.
              </motion.p>
              <motion.p
                className="mb-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our founder, inspired by traditional Nepali beauty practices and
                modern techniques, created a space where clients could
                experience the best of both worlds. Today, we continue to uphold
                our commitment to excellence, using premium products and staying
                at the forefront of industry trends.
              </motion.p>
              <motion.p
                className="mb-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                At Mangpahang, we believe that beauty services should be
                accessible to everyone. Our diverse team is trained to work with
                all hair types, skin tones, and personal styles, ensuring that
                every client leaves feeling confident and beautiful.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon size={40} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Our Mission & Values"
            subtitle="What drives us and shapes our approach to beauty services"
          />
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                To provide exceptional hair and beauty services that enhance our
                clients' natural beauty and boost their confidence, while
                creating a welcoming and relaxing environment for everyone who
                walks through our doors.
              </p>
              <p className="text-gray-600">
                We strive to stay at the forefront of industry trends and
                techniques, continuously improving our skills to deliver the
                best possible results for our clients.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                Our Values
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>
                    <strong>Excellence:</strong> We are committed to delivering
                    the highest quality services and results.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>
                    <strong>Integrity:</strong> We operate with honesty,
                    transparency, and respect in all our interactions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>
                    <strong>Creativity:</strong> We encourage innovation and
                    artistic expression in our work.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>
                    <strong>Inclusivity:</strong> We welcome and celebrate
                    diversity in our clients and team.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>
                    <strong>Continuous Learning:</strong> We are dedicated to
                    ongoing education and professional development.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Our talented professionals are dedicated to helping you look and feel your best"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Don't just take our word for it - hear from our satisfied customers"
          />
          <motion.div
            className="max-w-4xl mx-auto mt-12 bg-gray-50 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl text-primary mb-6">"</div>
            <p className="text-xl text-gray-600 italic mb-6">
              I've been coming to Mangpahang Salon for over three years now, and
              I wouldn't trust anyone else with my hair. The team is
              professional, friendly, and always up-to-date with the latest
              trends. Every visit feels like a treat, and I always leave feeling
              beautiful and confident.
            </p>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Testimonial"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="font-bold text-secondary">Anita Tamang</h4>
                <p className="text-sm text-gray-500">Regular Client</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-custom text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience the Mangpahang Difference
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our community of satisfied clients and discover why we're one
            of Kathmandu's most trusted salons.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
