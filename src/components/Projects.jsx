import { useState } from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projectsData } from "../data/portfolioData";
import { cn } from "../utils/cn";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "React",
    "JavaScript",
    "Full Stack",
    "College Projects",
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => {
          if (!project.category) return false;
          const categories = project.category.split(",").map((c) => c.trim());
          return categories.includes(filter);
        });

  return (
    <section id="projects" className="py-32 relative w-full flex justify-center">
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#f472b6]/5 to-transparent pointer-events-none rounded-tr-full filter blur-[80px]" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#f472b6] font-bold mb-4 block font-sans">
            Showcase
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6">
            Featured <span className="text-cyber-gradient">Work</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#a855f7] to-[#f472b6] mx-auto mb-6" />
          <p className="text-[#9ca3af] text-lg font-medium leading-relaxed font-sans">
            A selection of my recent engineering projects, highlighting performance, 
            scalability, and modular frontend architectures.
          </p>
        </div>

        {/* Categories / Filter Pills */}
        <div className="reveal reveal-delay-100 flex flex-wrap justify-center gap-3 mb-24 max-w-2xl mx-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider font-sans transition-cyber border relative overflow-hidden group cursor-pointer",
                filter === f
                  ? "bg-white text-black border-white shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
                  : "bg-white/[0.02] border-white/10 text-[#9ca3af] hover:text-white hover:border-white/20 hover:bg-white/[0.04]"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Alternating Zig-Zag Project List */}
        <div className="reveal reveal-delay-200 space-y-36 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={cn(
                  "flex flex-col items-center gap-12 lg:gap-20 w-full",
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* 3D Perspective Image Container */}
                <div className="w-full lg:w-1/2 perspective-container">
                  <div
                    className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-cyber cursor-pointer group bg-[#090e1a]"
                    style={{
                      transform: `rotateY(${isEven ? 2.5 : -2.5}deg) rotateX(1.5deg)`,
                      transformStyle: "preserve-3d",
                      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.6s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1.03)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = `rotateY(${isEven ? 2.5 : -2.5}deg) rotateX(1.5deg)`;
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />
                    
                    {/* Neon tint layer */}
                    <div className="absolute inset-0 bg-[#22d3ee]/5 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />

                    {/* Scale Image Transition */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[280px] sm:h-[380px] object-cover transition-cyber duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Quick Link Floating Icons */}
                    <div className="absolute top-6 right-6 z-20 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-cyber">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#090e1a]/90 hover:bg-[#22d3ee] text-white hover:text-black rounded-full transition-cyber shadow-lg border border-white/5"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub size={18} />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#090e1a]/90 hover:bg-[#22d3ee] text-white hover:text-black rounded-full transition-cyber shadow-lg border border-white/5"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
                  
                  {/* Featured Project Tag */}
                  <span className="text-[10px] font-black tracking-[0.4em] text-[#22d3ee] uppercase block mb-3.5 font-sans select-none">
                    Featured Project
                  </span>

                  {/* Project Title */}
                  <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-5 leading-tight hover:text-[#22d3ee] transition-cyber select-none">
                    {project.title}
                  </h3>

                  {/* Project Description (Glass Panel) */}
                  <div className="glass-card p-6 md:p-8 rounded-3xl mb-6 relative border border-white/5 w-full">
                    <p className="text-[#9ca3af] text-base font-medium leading-relaxed font-sans select-none">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest font-sans bg-white/[0.03] text-white/70 border border-white/10 rounded-full select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Links (Slide Right on Hover) */}
                  <div className="flex items-center gap-6">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2.5 text-white font-extrabold text-sm uppercase tracking-wider font-sans hover:text-[#22d3ee] transition-cyber cursor-pointer"
                      >
                        View Live Project
                        <FiArrowRight className="group-hover/link:translate-x-2 transition-cyber text-lg text-[#22d3ee]" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2.5 text-white/50 font-extrabold text-sm uppercase tracking-wider font-sans hover:text-white transition-cyber cursor-pointer"
                    >
                      Source Code
                      <FiGithub className="text-white/40 group-hover/link:text-white transition-cyber text-base" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
