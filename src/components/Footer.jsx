import React from "react";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-8 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
        
        <p className="text-gray-500 text-sm mb-2">
          © {new Date().getFullYear()} Muhammed Farhan P C. All rights reserved.
        </p>
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
          Built with <span className="text-neon-blue">Intelligence</span> & <span className="text-neon-purple">Precision</span>
        </p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-primary/10 rounded-full blur-[100px]" />
    </footer>
  );
};

export default Footer;
