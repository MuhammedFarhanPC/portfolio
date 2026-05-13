import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"
      />
    </div>
  );
};

export default SectionHeading;
