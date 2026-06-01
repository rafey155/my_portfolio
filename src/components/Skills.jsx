import { skillsData } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative w-full flex justify-center">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#a855f7]/5 to-transparent pointer-events-none rounded-bl-full filter blur-[80px]" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <div className="reveal lg:w-1/3">
            <span className="text-xs uppercase tracking-[0.35em] text-[#a855f7] font-bold mb-4 block font-sans">
              Technical Stack
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6 leading-[0.95]">
              Technical <br />
              <span className="text-cyber-gradient filter drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                Arsenal
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#f472b6] mb-8" />
            <p className="text-[#9ca3af] text-lg font-medium leading-relaxed font-sans mb-6">
              I specialize in a modern, full-stack ecosystem, crafting highly fluid interactive frontends 
              coupled with optimized, lightweight backend architectures.
            </p>
            <p className="text-[#9ca3af]/60 text-sm font-sans font-medium">
              Hover over individual technologies to test their responsive interactivity and gradient boundary glows.
            </p>
          </div>

          {/* Right Skills Grid Column */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {Object.entries(skillsData).map(([category, skills], catIndex) => {
              const categoryColorMap = {
                Frontend: { text: "text-[#22d3ee]", bg: "bg-[#22d3ee]/10", border: "hover:border-[#22d3ee]/40", accent: "#22d3ee" },
                Backend: { text: "text-[#a855f7]", bg: "bg-[#a855f7]/10", border: "hover:border-[#a855f7]/40", accent: "#a855f7" },
                Database: { text: "text-[#f472b6]", bg: "bg-[#f472b6]/10", border: "hover:border-[#f472b6]/40", accent: "#f472b6" },
                Tools: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "hover:border-emerald-400/40", accent: "#34d399" },
              };

              const style = categoryColorMap[category] || {
                text: "text-white",
                bg: "bg-white/10",
                border: "hover:border-white/40",
                accent: "#ffffff",
              };

              const delayClasses = [
                "reveal-delay-100",
                "reveal-delay-200",
                "reveal-delay-300",
                "reveal-delay-400",
              ];

              return (
                <div
                  key={category}
                  className={`reveal ${delayClasses[catIndex]}`}
                >
                  <div 
                    className={`glass-card p-8 rounded-[2rem] transition-cyber hover:bg-white/[0.015] border-white/5 border group relative overflow-hidden`}
                  >
                    {/* Background blob inside card on hover */}
                    <div 
                      className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full filter blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: style.accent, opacity: 0.05 }}
                    />

                    {/* Category Header */}
                    <h3 className="text-xl font-display font-bold mb-6 text-white capitalize flex items-center gap-3.5">
                      <span className={`w-9 h-9 rounded-xl ${style.bg} flex items-center justify-center ${style.text} text-sm font-black tracking-wider transition-cyber group-hover:scale-110 shadow-lg`}>
                        {category[0]}
                      </span>
                      {category}
                    </h3>

                    {/* Technical Chips Grid */}
                    <div className="flex flex-wrap gap-2.5">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-4 py-2 bg-white/[0.03] border border-white/5 rounded-xl text-sm font-semibold font-sans text-slate-300 transition-cyber cursor-default shadow-sm ${style.border} hover:text-white hover:-translate-y-0.5 hover:bg-white/[0.06]`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
