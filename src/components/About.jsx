import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./UI/GlassCard";
import SectionHeading from "./UI/SectionHeading";
import { 
  Brain, 
  Cpu, 
  Briefcase, 
  Layout, 
  GraduationCap, 
  Bot,
  CheckCircle2,
  Users
} from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "1+", icon: Briefcase },
  { label: "AI Projects Completed", value: "25+", icon: Layout },
  { label: "Experience", value: "Technical Lead", icon: Users, isText: true },
  { label: "Role", value: "AI Trainer & Mentor", icon: GraduationCap, isText: true },
  { label: "Expertise", value: "Gen & Agentic AI", icon: Bot, isText: true },
];

const highlights = [
  "Technical Lead with experience in guiding AI-based development and technical project execution.",
  "Worked as an AI Trainer, helping students learn AI concepts and build real-world projects.",
  "Developed multiple student-focused AI projects and guided practical implementations.",
  "AI Engineer passionate about AI innovation and intelligent automation.",
  "Experience in AI development, Gen AI applications, data science, and deployment.",
  "Strong focus on Agentic AI, RAG systems, Machine Learning, LangChain, LangGraph, MCP, and AI automation.",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements & Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[10%] left-[5%] w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-neon-purple/20 rounded-full blur-[120px]"
        />
        
        {/* Soft Particles Simulation */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              x: [0, i % 2 === 0 ? 40 : -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-neon-blue blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="Empowering innovation through Artificial Intelligence and Intelligent Automation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          {/* Image Container (Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-1 lg:order-1"
          >
            {/* Floating Animation Container with Glassmorphism Frame */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 p-2 rounded-full glass border-2 border-neon-blue/50 shadow-[0_0_30px_rgba(0,240,255,0.3)] group hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-500 hover:border-neon-purple/50 bg-black/40 backdrop-blur-xl"
            >
              <div className="rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 via-transparent to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src="/profile.jpg" 
                  alt="Muhammed Farhan P C" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; 
                  }}
                />
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 p-4 glass rounded-2xl border border-neon-blue/30 z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/60 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neon-blue/10 rounded-lg text-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <Brain size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Current Focus</p>
                    <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Agentic AI & RAG</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Background Glows behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-neon-blue/10 to-neon-purple/10 rounded-full blur-[60px] -z-10" />
          </motion.div>

          {/* Text Content Container (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Muhammed Farhan P C</span>
            </h3>
            
            <div className="space-y-4 mb-10 relative">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                // Make the last item span 2 columns to balance the 5 items
                const isLastAndOdd = index === stats.length - 1 && stats.length % 2 !== 0;
                
                return (
                  <GlassCard 
                    key={index} 
                    className={`relative text-center group border border-white/5 hover:border-neon-blue/50 transition-all duration-500 overflow-hidden bg-black/30 backdrop-blur-md ${isLastAndOdd ? 'col-span-2' : ''}`}
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex justify-center mb-3 text-neon-blue group-hover:text-neon-purple transition-colors duration-300 transform group-hover:scale-110">
                        <Icon size={28} />
                      </div>
                      <h4 className={`${stat.isText ? 'text-lg md:text-xl' : 'text-3xl'} font-bold text-white mb-1 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300`}>
                        {stat.value}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                        {stat.label}
                      </p>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
