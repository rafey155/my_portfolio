import { motion } from "framer-motion";
import { experienceData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative w-full flex justify-center">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-br from-[#22d3ee]/5 to-transparent pointer-events-none rounded-br-full filter blur-[80px]" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#22d3ee] font-bold mb-4 block font-sans">
            Career
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6">
            Professional <span className="text-cyber-gradient">Journey</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#22d3ee] to-[#a855f7] mx-auto mb-6" />
          <p className="text-[#9ca3af] text-lg font-medium leading-relaxed font-sans">
            Real-world experience building AI products, full-stack web applications, and software solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="reveal reveal-delay-200 max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#22d3ee]/40 via-[#a855f7]/30 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col sm:flex-row gap-8"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-[#22d3ee] group-hover:scale-110 group-hover:bg-[#22d3ee] group-hover:text-black transition-cyber z-10 shadow-[0_0_20px_rgba(34,211,238,0.15)] border border-[#22d3ee]/20">
                    <div className="w-3.5 h-3.5 rounded-full bg-current" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card p-8 md:p-10 rounded-3xl hover:border-[#22d3ee]/20 transition-cyber group-hover:shadow-[0_20px_50px_rgba(34,211,238,0.05)]">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-display font-black text-white mb-2 leading-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[#22d3ee] font-bold text-sm font-sans">
                          {exp.company}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider font-sans">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    {/* Current badge for ongoing roles */}
                    {exp.duration.toLowerCase().includes("present") && (
                      <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-400/20 font-sans">
                        Current
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((task, idx) => (
                      <li key={idx} className="flex gap-3 text-[#9ca3af] text-sm font-medium font-sans leading-relaxed">
                        <span className="text-[#22d3ee] mt-1 shrink-0">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.learningOutcomes && (
                    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm font-sans">
                      <span className="font-black text-[#a855f7] text-xs uppercase tracking-wider">Key Takeaway</span>
                      <span className="w-px h-3.5 bg-white/10" />
                      <span className="text-[#9ca3af] font-medium">{exp.learningOutcomes}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
