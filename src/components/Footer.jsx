import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { profileData } from "../data/portfolioData";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative pt-20 pb-10 border-t border-slate-200 dark:border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-3xl font-black tracking-tighter flex items-center gap-1 justify-center md:justify-start mb-4">
              <span className="text-gradient">M</span>
              <span>Rafey.</span>
            </a>
            <p className="text-slate-500 max-w-sm">
              Designing and building the future of the web, one line of code at
              a time.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-xl hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <FiGithub />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-xl hover:bg-secondary hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200 dark:border-white/5 text-sm font-semibold text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {profileData.name}. All rights
            reserved.
          </p>

          <button
            onClick={goToTop}
            className="flex items-center gap-2 hover:text-primary transition-colors group">
            Back to top
            <div className="w-8 h-8 rounded-full glass-panel flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <FiArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
