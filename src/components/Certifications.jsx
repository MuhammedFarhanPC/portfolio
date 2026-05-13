import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import SectionHeading from "./UI/SectionHeading";
import GlassCard from "./UI/GlassCard";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background / Particle Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-[120px]" />
        
        {/* Soft Particles Simulation */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, i % 2 === 0 ? 50 : -50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-2 h-2 rounded-full bg-neon-blue blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Certifications" 
          subtitle="Validated expertise from industry-leading institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Outer Glow on Hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
              
              <GlassCard className="relative p-0 overflow-hidden h-full flex flex-col border border-white/5 group-hover:border-neon-blue/40 transition-colors duration-500 bg-black/40 backdrop-blur-xl">
                
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                  />
                  {/* Verification Badge Float */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-neon-blue/30 shadow-[0_0_15px_rgba(0,240,255,0.3)] bg-black/50"
                  >
                    <ShieldCheck size={16} className="text-neon-blue" />
                    <span className="text-xs font-semibold text-white tracking-wider">VERIFIED</span>
                  </motion.div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 relative flex-grow flex flex-col justify-between z-20 -mt-10">
                  <div>
                    {/* Animated Icon */}
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-6 border border-white/10 group-hover:border-neon-purple/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                      <Award className="text-neon-purple group-hover:text-neon-blue transition-colors duration-300" size={24} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex justify-between items-end mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-neon-blue" />
                      <p className="text-gray-400 font-medium">{cert.issuer}</p>
                    </div>
                    <p className="text-neon-purple/80 text-sm font-bold tracking-widest bg-neon-purple/10 px-3 py-1 rounded-md">{cert.date}</p>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
