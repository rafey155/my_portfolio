import { useRef } from "react";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";

// Reusable dynamic 3D Perspective Card component
export const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 5 degrees tilt as specified
    const rotateX = ((centerY - y) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * -5; // negative to match normal camera tilt behavior

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.025)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="perspective-container h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`perspective-card h-full glass-card p-8 md:p-10 rounded-[2rem] transition-cyber select-none cursor-default ${className}`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.5s, background-color 0.5s",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: <FiCode className="text-[#22d3ee] text-2xl" />,
      accentColor: "#22d3ee",
      tintBg: "rgba(34, 211, 238, 0.1)",
      glowColor: "rgba(34, 211, 238, 0.15)",
      title: "Frontend Engineering",
      desc: "Creating pixel-perfect, responsive web architectures utilizing React, Next.js, and high-performance WebGL frameworks for state-of-the-art visual experiences.",
    },
    {
      icon: <FiDatabase className="text-[#a855f7] text-2xl" />,
      accentColor: "#a855f7",
      tintBg: "rgba(168, 85, 247, 0.1)",
      glowColor: "rgba(168, 85, 247, 0.15)",
      title: "Backend Development",
      desc: "Architecting modular API structures and scalable microservices powered by Node.js, Express, and robust database layers designed for secure data delivery.",
    },
    {
      icon: <FiLayers className="text-[#f472b6] text-2xl" />,
      accentColor: "#f472b6",
      tintBg: "rgba(244, 114, 182, 0.1)",
      glowColor: "rgba(244, 114, 182, 0.15)",
      title: "Creative Design Systems",
      desc: "Crafting visually jaw-dropping user interfaces utilizing glassmorphism, responsive grid geometry, micro-animations, and fluid design layouts.",
    },
  ];

  return (
    <section id="services" className="py-32 relative w-full flex justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="reveal text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs uppercase tracking-[0.35em] text-[#22d3ee] font-bold mb-4 block font-sans">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6">
            Services & <span className="text-cyber-gradient">Expertise</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#22d3ee] to-[#a855f7] mx-auto mb-6" />
          <p className="text-[#9ca3af] text-lg font-medium leading-relaxed font-sans">
            Fusing highly polished engineering standards with dynamic visual design 
            to construct premium digital products.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesList.map((service, index) => {
            const delayClasses = [
              "reveal-delay-100",
              "reveal-delay-200",
              "reveal-delay-300",
            ];
            
            return (
              <div 
                key={service.title} 
                className={`reveal ${delayClasses[index]}`}
              >
                <TiltCard className="group hover:border-white/20 hover:bg-white/[0.02]">
                  {/* Card Glow Blob Internals */}
                  <div
                    className="absolute -top-12 -left-12 w-32 h-32 rounded-full filter blur-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: service.accentColor, opacity: 0.05 }}
                  />

                  {/* 56px Icon Container with Accent Tint */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 relative"
                    style={{ 
                      backgroundColor: service.tintBg,
                      boxShadow: `0 0 20px ${service.glowColor}`,
                      transform: "translateZ(40px)" // preserve-3d layering effect
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Header text-2xl bold */}
                  <h3 
                    className="text-2xl font-display font-bold text-white mb-5 group-hover:text-[#22d3ee] transition-cyber"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description text */}
                  <p 
                    className="text-[#9ca3af] text-sm md:text-base leading-relaxed font-medium font-sans"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {service.desc}
                  </p>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
