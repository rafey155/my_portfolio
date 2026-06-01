import { motion } from "framer-motion";
import {
  FiGithub,
  FiStar,
  FiGitBranch,
  FiUsers,
  FiArrowUpRight,
} from "react-icons/fi";
import { profileData } from "../data/portfolioData";

const GithubSection = () => {
  const stats = [
    { label: "Repositories", value: "42", icon: <FiGithub size={20} /> },
    { label: "Total Stars", value: "128", icon: <FiStar size={20} /> },
    {
      label: "Commits (2024)",
      value: "1,048",
      icon: <FiGitBranch size={20} />,
    },
    { label: "Followers", value: "56", icon: <FiUsers size={20} /> },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="glass-panel rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/20 blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Open <span className="text-gradient">Source</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                I strongly believe in the power of open source. Contributing to
                projects, building useful tools, and sharing knowledge with the
                developer community is a core part of my journey.
              </p>

              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-xl group">
                <FiGithub size={20} />
                <span>Visit my GitHub</span>
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-50/50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:border-primary/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-slate-800 dark:text-white mb-4 shadow-sm group-hover:scale-110 group-hover:text-primary transition-all">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-black dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
