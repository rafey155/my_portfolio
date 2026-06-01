import { motion } from "framer-motion";
import { certificationsData } from "../data/portfolioData";

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Awards & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="text-slate-500 max-w-md md:text-right">
            Recognitions that validate my expertise and commitment to continuous
            learning in the tech field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-4 rounded-3xl group">
              <div className="h-56 rounded-2xl overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                    {cert.organization}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold dark:text-white leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
