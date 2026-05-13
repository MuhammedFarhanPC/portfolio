import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./UI/SectionHeading";
import GlassCard from "./UI/GlassCard";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  { icon: Mail, label: "Email", value: "farhanartificialintelligence@gmail.com", link: "mailto:farhanartificialintelligence@gmail.com" },
  { icon: FaLinkedin, label: "LinkedIn", value: "Muhammed Farhan P C", link: "https://www.linkedin.com/in/muhammed-farhan-p-c-1ab697330" },
  { icon: FaGithub, label: "GitHub", value: "muhammedfarhanpc", link: "https://github.com/muhammedfarhanpc" },
  { icon: MapPin, label: "Location", value: "Kerala, India", link: "#" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's discuss how we can build the future together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Reach out through any 
              of these platforms.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-4 glass rounded-2xl group transition-all"
                  >
                    <div className="p-4 bg-white/5 rounded-xl text-neon-blue group-hover:text-neon-purple transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-lg font-semibold text-white">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Hi Farhan, I'd like to talk about..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
