import { useState } from "react";
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from "react-icons/fi";
import { projectsData } from "../data/portfolioData";
import { cn } from "../utils/cn";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

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
                  <div className="flex flex-wrap items-center gap-6">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2.5 text-white font-extrabold text-sm uppercase tracking-wider font-sans hover:text-[#22d3ee] transition-cyber cursor-pointer"
                      >
                        Live Demo
                        <FiArrowRight className="group-hover/link:translate-x-2 transition-cyber text-lg text-[#22d3ee]" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2.5 text-white/50 font-extrabold text-sm uppercase tracking-wider font-sans hover:text-white transition-cyber cursor-pointer"
                    >
                      Repository
                      <FiGithub className="text-white/40 group-hover/link:text-white transition-cyber text-base" />
                    </a>

                    {project.details && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group/link inline-flex items-center gap-2.5 text-[#a855f7] font-extrabold text-sm uppercase tracking-wider font-sans hover:text-[#f472b6] transition-cyber cursor-pointer bg-transparent border-none outline-none p-0"
                      >
                        View Details
                        <FiArrowRight className="group-hover/link:translate-x-2 transition-cyber text-lg text-[#a855f7]" />
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal/Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <style>{`
            .animate-fade-in {
              animation: modalFadeIn 0.3s ease-out forwards;
            }
            .animate-scale-up {
              animation: modalScaleUp 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            }
            @keyframes modalFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalScaleUp {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .custom-modal-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-modal-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.02);
              border-radius: 9999px;
            }
            .custom-modal-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(168, 85, 247, 0.3);
              border-radius: 9999px;
            }
            .custom-modal-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(168, 85, 247, 0.5);
            }
          `}</style>
          
          <div className="animate-scale-up glass-card max-w-4xl w-full h-[85vh] rounded-[2.5rem] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] flex flex-col relative overflow-hidden">
            
            {/* Drifting Glow blobs inside modal */}
            <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#22d3ee]/5 filter blur-[90px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#a855f7]/5 filter blur-[100px] pointer-events-none z-0" />

            {/* Modal Header */}
            <div className="relative z-10 flex justify-between items-center p-6 md:p-8 border-b border-white/5 bg-[#090e1a]/40 backdrop-blur-md">
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#a855f7] font-black mb-1.5 block font-sans">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl md:text-3xl font-display font-black text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full transition-cyber hover:scale-105"
                aria-label="Close Modal"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-10 space-y-10 custom-modal-scrollbar text-left">
              
              {/* Project Mockup / Screenshot Preview */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative h-[220px] md:h-[350px] bg-black/40">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Overview & Core Status */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Project Overview
                  </h4>
                  <p className="text-[#9ca3af] font-sans leading-relaxed text-sm md:text-base">
                    {selectedProject.details.overview}
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 h-fit bg-[#090e1a]/30">
                  <h4 className="text-xs font-display font-black text-white uppercase tracking-widest border-b border-white/10 pb-2.5">
                    Metadata
                  </h4>
                  <div className="space-y-3.5 text-xs font-sans">
                    <div className="flex justify-between items-center">
                      <span className="text-[#9ca3af] font-medium">Status:</span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 font-extrabold border border-emerald-400/20">
                        Completed
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af] font-medium">Architecture:</span>
                      <span className="text-white font-extrabold">Decoupled API</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#9ca3af] font-medium">Links:</span>
                      <div className="flex gap-2">
                        {selectedProject.demoUrl && (
                          <a
                            href={selectedProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#22d3ee] hover:text-[#22d3ee]/85 font-extrabold transition-cyber"
                          >
                            Demo
                          </a>
                        )}
                        {selectedProject.demoUrl && <span className="text-white/20">|</span>}
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#a855f7] hover:text-[#a855f7]/85 font-extrabold transition-cyber"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {selectedProject.details.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm font-sans font-medium text-[#9ca3af]">
                      <span className="w-5 h-5 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] flex items-center justify-center text-[10px] shrink-0 mt-0.5 border border-[#22d3ee]/20">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack Grid */}
              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Column 1: Frontend */}
                  <div className="glass-card p-5 rounded-2xl border border-white/5 bg-[#090e1a]/20">
                    <h5 className="text-[10px] uppercase tracking-widest text-[#22d3ee] font-black mb-3 font-sans">
                      Frontend Layout
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.techStack.frontend.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-white/[0.03] text-white/70 border border-white/10 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Backend */}
                  <div className="glass-card p-5 rounded-2xl border border-white/5 bg-[#090e1a]/20">
                    <h5 className="text-[10px] uppercase tracking-widest text-[#a855f7] font-black mb-3 font-sans">
                      Backend & Database
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        ...selectedProject.details.techStack.backend,
                        ...selectedProject.details.techStack.database
                      ].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-white/[0.03] text-white/70 border border-white/10 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Deploy & Auth */}
                  <div className="glass-card p-5 rounded-2xl border border-white/5 bg-[#090e1a]/20">
                    <h5 className="text-[10px] uppercase tracking-widest text-[#f472b6] font-black mb-3 font-sans">
                      Auth & Deployment
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        ...selectedProject.details.techStack.auth,
                        ...selectedProject.details.techStack.deployment
                      ].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-white/[0.03] text-white/70 border border-white/10 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Architecture & RBAC Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Architecture Overview
                  </h4>
                  <p className="text-[#9ca3af] font-sans leading-relaxed text-sm">
                    {selectedProject.details.architecture}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Role-Based Access Control
                  </h4>
                  <p className="text-[#9ca3af] font-sans leading-relaxed text-sm">
                    {selectedProject.details.rbac}
                  </p>
                </div>
              </div>

              {/* Auth Flow */}
              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                  Authentication Sequence
                </h4>
                <div className="glass-card p-6 rounded-2xl border border-white/5 font-mono text-xs text-[#9ca3af] leading-relaxed whitespace-pre-line bg-black/25">
                  {selectedProject.details.authFlow}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-4">
                <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                  Challenges & Implementations
                </h4>
                <div className="space-y-4">
                  {selectedProject.details.challenges.map((challenge, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.015] border border-white/5 p-5 rounded-2xl bg-[#090e1a]/10">
                      <div className="space-y-2">
                        <span className="text-[9px] font-black tracking-widest text-[#f472b6] uppercase font-sans">
                          Challenge {index + 1}
                        </span>
                        <p className="text-sm font-sans font-medium text-[#9ca3af]">
                          {challenge}
                        </p>
                      </div>
                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/5 pt-3 md:pt-0 md:pl-6">
                        <span className="text-[9px] font-black tracking-widest text-emerald-400 uppercase font-sans">
                          Solution
                        </span>
                        <p className="text-sm font-sans font-medium text-[#9ca3af]">
                          {selectedProject.details.solutions[index]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn & Improvements */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    What I Learned
                  </h4>
                  <p className="text-[#9ca3af] font-sans leading-relaxed text-sm">
                    {selectedProject.details.learned}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Future Roadmap
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.details.improvements.map((improvement, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-sans font-medium text-[#9ca3af]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shrink-0" />
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
