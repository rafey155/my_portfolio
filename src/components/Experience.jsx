import { motion } from "framer-motion";
import { experienceData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Career <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative">
                {/* Timeline line */}
                {index !== experienceData.length - 1 && (
                  <div className="absolute left-[27px] top-[72px] bottom-[-48px] w-px bg-gradient-to-b from-primary/50 to-transparent sm:block hidden"></div>
                )}

                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Icon/Indicator */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 shadow-lg shadow-primary/20">
                      <div className="w-4 h-4 rounded-full bg-current"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 glass-panel p-8 md:p-10 rounded-3xl hover:border-primary/30 transition-colors duration-500">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-primary font-bold">
                            {exp.company}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 text-slate-500 dark:text-slate-400 mb-8">
                      {exp.responsibilities.map((task, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-primary mt-1.5">▹</span>
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm">
                      <span className="font-bold text-secondary">
                        Key Takeaway:
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {exp.learningOutcomes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
