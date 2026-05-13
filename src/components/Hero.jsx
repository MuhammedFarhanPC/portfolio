import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { socialLinks } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-neon-blue mb-4 tracking-widest uppercase">
            Welcome to the Future
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
              Muhammed Farhan P C
            </span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 h-12">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Data Scientist",
                2000,
                "AI Developer",
                2000,
                "IT Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about building intelligent AI systems, agentic workflows, 
            automation tools, Gen AI applications, and scalable modern solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-white"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold border border-transparent hover:border-secondary/50 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#00f2ff" }}
                  className="text-gray-400 transition-colors duration-300"
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
