import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import SectionHeading from "./UI/SectionHeading";
import GlassCard from "./UI/GlassCard";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A showcase of intelligent systems, autonomous agents, and scalable solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="group p-0 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 p-3 glass rounded-xl text-neon-blue">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-[10px] font-semibold bg-white/5 border border-white/10 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 glass rounded-full hover:text-neon-blue transition-colors"
                      >
                        <FaGithub size={18} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 glass rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
