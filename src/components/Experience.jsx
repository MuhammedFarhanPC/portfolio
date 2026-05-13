import React from "react";
import { motion } from "framer-motion";
import { experience } from "../constants";
import SectionHeading from "./UI/SectionHeading";
import GlassCard from "./UI/GlassCard";
import { Briefcase, Brain, Cpu, Database, CheckCircle2 } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="A timeline of my growth and contributions in the field of AI."
        />

        <div className="relative mt-16">
          {/* Timeline Center Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent opacity-50 shadow-[0_0_15px_rgba(0,240,255,0.5)]" 
          />

          <div className="space-y-16">
            {experience.map((exp, index) => {
              const Icon = exp.icon || Briefcase;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline Pulse Indicator */}
                  <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 mt-6 z-20 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-8 h-8 rounded-full bg-neon-blue/20 blur-sm"
                    />
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-5 h-5 bg-background border-2 border-neon-blue rounded-full shadow-[0_0_15px_rgba(0,240,255,0.8)] relative z-10 hover:border-neon-purple transition-colors duration-300" 
                    />
                  </div>

                  {/* Card Content Container */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pt-1`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <GlassCard className="relative overflow-hidden group hover:border-neon-purple/50 transition-all duration-500 border border-white/5">
                        {/* Glow Behind Card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        {/* Period Tag */}
                        <div className="flex flex-wrap items-center justify-between mb-4 gap-4 relative z-10">
                          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neon-blue tracking-wide shadow-[0_0_10px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-shadow">
                            {exp.period}
                          </span>
                          
                          {/* Animated Icons (Top Right of Card) */}
                          <div className="flex gap-2 text-gray-500 group-hover:text-neon-purple transition-colors">
                             <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Cpu size={18} /></motion.div>
                          </div>
                        </div>

                        {/* Title & Company */}
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                          <motion.div 
                            whileHover={{ rotate: 15 }}
                            className="p-3 glass rounded-xl text-neon-blue group-hover:text-neon-purple transition-colors duration-300 relative"
                          >
                            <div className="absolute inset-0 bg-neon-blue/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Icon size={28} className="relative z-10" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{exp.company}</p>
                          </div>
                        </div>

                        {/* Description List */}
                        <ul className="text-gray-400 mb-6 space-y-3 relative z-10">
                          {Array.isArray(exp.description) ? exp.description.map((desc, i) => (
                            <motion.li 
                              key={i} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                              className="flex items-start gap-3 group/item"
                            >
                              <span className="text-neon-blue mt-1 opacity-70 group-hover/item:opacity-100 group-hover/item:text-neon-purple transition-colors">
                                <CheckCircle2 size={16} />
                              </span>
                              <span className="text-sm md:text-base leading-relaxed group-hover/item:text-gray-300 transition-colors">
                                {desc}
                              </span>
                            </motion.li>
                          )) : (
                            <li className="text-sm md:text-base leading-relaxed">{exp.description}</li>
                          )}
                        </ul>

                        {/* Experience Badges */}
                        {exp.badges && exp.badges.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 relative z-10">
                            {exp.badges.map((badge, i) => (
                              <span key={i} className="px-3 py-1 text-xs font-medium tracking-wide rounded-md bg-neon-blue/10 border border-neon-blue/20 text-neon-blue group-hover:border-neon-purple/40 group-hover:text-neon-purple transition-colors">
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                        
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
