import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import SectionHeading from "./UI/SectionHeading";
import GlassCard from "./UI/GlassCard";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="A comprehensive toolkit of cutting-edge technologies and frameworks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <GlassCard className="h-full border-t-2 border-t-primary/30">
                <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-neon-blue text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 w-2 h-full bg-white blur-[2px] opacity-50" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Background (Optional/Decorative) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
           <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 right-[10%] opacity-10"
           >
             <div className="w-20 h-20 border border-primary rounded-xl rotate-12" />
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
