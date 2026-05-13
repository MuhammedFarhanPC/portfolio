import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("home");
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-xl font-bold cursor-pointer flex items-center gap-1 group">
            <span className="text-neon-blue group-hover:text-white transition-colors duration-300">FARHAN</span>
            <span className="text-white group-hover:text-neon-purple transition-colors duration-300">P C</span>
          </span>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-neon-blue" : "text-gray-400"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-300 relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 ${active === link.title ? "w-full" : ""}`} />
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X /> : <Menu />}
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="p-6 glass absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-neon-blue" : "text-gray-400"
                      } font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
