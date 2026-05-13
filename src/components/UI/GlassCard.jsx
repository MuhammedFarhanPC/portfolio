import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`glass-card p-6 rounded-2xl overflow-hidden relative group ${className}`}
    >
      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      {/* Card Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
