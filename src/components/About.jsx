import { motion } from "framer-motion";
import { FiUser, FiCode, FiBox, FiFeather } from "react-icons/fi";
import { PiGraduationCap, PiRocketLaunch } from "react-icons/pi";

const About = () => {
  const cards = [
    {
      icon: <PiGraduationCap size={28} />,
      title: "Education",
      desc1: "B.Tech CSE",
      desc2: "Graduated",
    },
    {
      icon: <FiCode size={28} />,
      title: "Frontend",
      desc1: "React, JavaScript",
      desc2: "Tailwind CSS",
    },
    {
      icon: <FiBox size={28} />,
      title: "Backend",
      desc1: "Node.js, Express",
      desc2: "MongoDB",
    },
    {
      icon: <PiRocketLaunch size={28} />,
      title: "Passion",
      desc1: "UI/UX Design",
      desc2: "Interactive Web",
    },
  ];

  return (
    <section id="about" className="py-20 relative w-full flex justify-center">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#070314]/60 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle glowing orb inside the container */}
          <div
            className="absolute top-0 right-0 w-125 
          h-125 bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 text-sm font-medium text-slate-300">
                <FiUser className="text-primary" />
                <span>About Me</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Get to know me{" "}
                <span className="text-primary-light inline-block relative">
                  better
                  <svg
                    className="absolute w-full h-3 -bottom-2 left-0 text-primary-light/60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none">
                    <path
                      d="M0 5 Q 50 15 100 5"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer who loves turning ideas
                into real-world digital solutions. I enjoy building clean,
                user-friendly, and performant web applications.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                With a strong foundation in Computer Science, I am constantly
                exploring modern technologies and pushing the boundaries of
                interactive web experiences to deliver high-quality software.
              </p>
            </div>

            {/* Right Content - Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#0b0524]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/[0.03] transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="text-primary-light mb-6">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-sm font-medium text-slate-400">
                    <p>{card.desc1}</p>
                    <p>{card.desc2}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
