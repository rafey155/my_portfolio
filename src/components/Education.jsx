import { motion } from "framer-motion";
import { educationData } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              {/* Decorative Number */}
              <div className="absolute -right-6 -top-10 text-[120px] font-black text-slate-100 dark:text-white/5 z-0 group-hover:scale-110 transition-transform duration-500 pointer-events-none select-none">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="inline-flex px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
                  {edu.year}
                </div>

                <h3 className="text-xl font-bold dark:text-white mb-2 leading-snug">
                  {edu.title}
                </h3>
                <h4 className="text-secondary font-bold text-sm mb-6">
                  {edu.institution}
                </h4>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
                      Score
                    </span>
                    <span className="text-lg font-black dark:text-white">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
