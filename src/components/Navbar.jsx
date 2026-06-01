import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "../utils/cn";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleSectionScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full",
        isScrolled 
          ? "bg-[#090e1a]/80 backdrop-blur-[12px] border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Diagonal Gradient Logo Box + Logo Text */}
        <a
          href="#home"
          onClick={(e) => handleSectionScroll(e, "#home")}
          className="flex items-center gap-3 group transition-cyber"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22d3ee] to-[#a855f7] flex items-center justify-center font-black text-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-cyber">
            R
          </div>
          <span className="text-xl font-bold tracking-tighter text-white group-hover:text-[#22d3ee] transition-cyber">
            Rafey<span className="text-[#a855f7]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSectionScroll(e, link.href)}
                className="text-[#9ca3af] hover:text-[#22d3ee] text-sm font-semibold tracking-wide transition-cyber relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#22d3ee] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>

          <div className="w-px h-5 bg-white/10 mx-2" />

          {/* White Pill CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleSectionScroll(e, "#contact")}
            className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-full font-extrabold text-sm transition-cyber hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center"
          >
            Let's Work
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/5 transition-cyber"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#090e1a]/95 backdrop-blur-[12px] border-b border-white/10 py-6 px-8 flex flex-col gap-5 overflow-hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSectionScroll(e, link.href)}
                className="text-lg font-bold text-[#9ca3af] hover:text-[#22d3ee] transition-cyber py-1.5 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSectionScroll(e, "#contact")}
              className="bg-white text-black hover:bg-white/90 py-3.5 rounded-full font-extrabold text-center transition-cyber mt-4 w-full block shadow-lg"
            >
              Let's Work
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
