"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Smile, Scissors } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import DefaultImage from "../assets/Images/default_profile_pic.png";
import InteriorImage from "../assets/SalonImages/GallaryImage-2.jpg";

const About = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Years of Experience" },
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Smile, value: "15+", label: "Expert Stylists" },
    { icon: Scissors, value: "20+", label: "Services Offered" },
  ];

  const team = [
    {
      name: "Sudip Rai",
      role: "Founder & Master Stylist",
      image: "",
      bio: "With over 5 years of experience, Sudip brings creativity and precision to every haircut and style.",
    },
    {
      name: "Anupa Rai",
      role: "Senior Beautician",
      image: "",
      bio: "Anupa specializes in creating stunning, personalized hair colors that complement each client's unique features.",
    },
    {
      name: "Srijana Limbu",
      role: "Nail Technician",
      image: "",
      bio: "Srijana is known for her ability to enhance natural beauty with her expert nail art techniques for any occasion.",
    },
    {
      name: "Sushil Buddha",
      role: "Hair Stylist",
      image: "",
      bio: "Sushil brings a unique perspective to hair styling, combining traditional techniques with modern trends.",
    },
  ];

  const values = [
    { title: "Excellence", desc: "We are committed to delivering the highest quality services and results." },
    { title: "Integrity", desc: "We operate with honesty, transparency, and respect in all our interactions." },
    { title: "Creativity", desc: "We encourage innovation and artistic expression in our work." },
    { title: "Inclusivity", desc: "We welcome and celebrate diversity in our clients and team." },
    { title: "Continuous Learning", desc: "We are dedicated to ongoing education and professional development." },
  ];

  return (
    <PageTransition>
      <SEO
        title="About Us — Mangpahang Unisex Salon, Kathmandu"
        description="Learn about Mangpahang Unisex Salon, founded in 2024 in Baneshwor, Kathmandu. Meet our expert stylists, discover our story, mission, and commitment to premium hair and beauty services."
        keywords="about salon Kathmandu, Mangpahang story, hair salon history Kathmandu, best stylist Kathmandu, unisex salon Nepal"
        canonical="/about"
      />

      {/* ── HERO ── */}
      <section className="bg-[#222222] py-28 text-center">
        <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
          Mangpahang Unisex Salon · Baneshwor, Kathmandu
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-[#d4af37]">Us</span>
        </h1>
        <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-5" />
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Learn more about Mangpahang Unisex Salon and our dedicated team of professionals
        </p>
      </section>

      {/* ── OUR STORY ── */}
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
                src={InteriorImage}
                alt="Mangpahang Salon Interior"
                className="rounded-xl w-full object-cover"
              />
            </motion.div>
            <div>
              <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
                Who We Are
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-2">
                Our Story
              </h2>
              <div className="w-10 h-[2px] bg-[#d4af37] mb-6" />
              <motion.p
                className="mb-4 text-gray-500 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Mangpahang Unisex Salon was founded in 2024 with a vision to provide premium hair and beauty services in a welcoming environment. What started as a small salon has grown into a beloved establishment in Kathmandu, known for exceptional service and skilled professionals.
              </motion.p>
              <motion.p
                className="mb-4 text-gray-500 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our founder, inspired by traditional Nepali beauty practices and modern techniques, created a space where clients could experience the best of both worlds. Today, we continue to uphold our commitment to excellence, using premium products and staying at the forefront of industry trends.
              </motion.p>
              <motion.p
                className="text-gray-500 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                At Mangpahang, we believe that beauty services should be accessible to everyone. Our diverse team is trained to work with all hair types, skin tones, and personal styles, ensuring every client leaves feeling confident and beautiful.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-[#222222]">
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
                <div className="w-12 h-12 rounded-lg bg-[#f8f0e3]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={22} className="text-[#d4af37]" strokeWidth={1.8} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VALUES ── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
              What Drives Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-2">
              Our Mission & Values
            </h2>
            <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-4" />
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              What drives us and shapes our approach to beauty services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-7 hover:border-[#d4af37] transition-colors duration-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#f8f0e3] flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-[#b8921a]" strokeWidth={1.8} />
                </div>
                <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wide">
                  Our Mission
                </h3>
              </div>
              <div className="w-8 h-[2px] bg-[#d4af37] mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                To provide exceptional hair and beauty services that enhance our clients' natural beauty and boost their confidence, while creating a welcoming and relaxing environment for everyone who walks through our doors.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We strive to stay at the forefront of industry trends and techniques, continuously improving our skills to deliver the best possible results for our clients.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-7 hover:border-[#d4af37] transition-colors duration-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-[#f8f0e3] flex items-center justify-center flex-shrink-0">
                  <Smile size={20} className="text-[#b8921a]" strokeWidth={1.8} />
                </div>
                <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wide">
                  Our Values
                </h3>
              </div>
              <div className="w-8 h-[2px] bg-[#d4af37] mb-4" />
              <div className="space-y-0">
                {values.map((v, i) => (
                  <div key={i} className="flex justify-between items-start py-2 border-b border-black/5 last:border-0 text-xs gap-4">
                    <span className="font-semibold text-[#222] whitespace-nowrap">{v.title}</span>
                    <span className="text-gray-500 text-right">{v.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
              The Experts
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-2">
              Meet Our Team
            </h2>
            <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mb-4" />
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Our talented professionals are dedicated to helping you look and feel your best
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#d4af37] transition-all duration-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={member.image ? member.image : DefaultImage}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-[#d4af37] font-semibold text-sm mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed border-t border-gray-100 pt-3">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[4px] text-[#d4af37] uppercase font-medium mb-3">
              Client Love
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-2">
              What Our Clients Say
            </h2>
            <div className="w-12 h-[2px] bg-[#d4af37] mx-auto" />
          </div>

          <motion.div
            className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-8 hover:border-[#d4af37] transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl text-[#d4af37] mb-4 leading-none">"</div>
            <p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              I've been coming to Mangpahang Salon for over three years now, and I wouldn't trust anyone else with my hair. The team is professional, friendly, and always up-to-date with the latest trends. Every visit feels like a treat, and I always leave feeling beautiful and confident.
            </p>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f8f0e3] flex items-center justify-center flex-shrink-0">
                <span className="text-[#b8921a] text-sm font-bold">AT</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wide">Anita Tamang</h4>
                <p className="text-[#d4af37] text-sm font-semibold">Regular Client</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-[#222222] rounded-2xl px-8 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Experience the Mangpahang Difference
            </h2>
            <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto">
              Join our community of satisfied clients and discover why we're one of Kathmandu's most trusted salons.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="/contact"
                className="bg-[#d4af37] text-[#1a1a1a] px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book Your Appointment
              </a>
              <a
                href="/services"
                className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-md font-semibold text-sm hover:bg-[#d4af37]/10 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
};

export default About;
