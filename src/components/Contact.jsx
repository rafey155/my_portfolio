import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { profileData } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    // Construct the pre-filled Gmail Web compose link
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Mohd Rafey,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );

    // Open directly in Gmail Web in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.email}&su=${mailtoSubject}&body=${mailtoBody}`;
    window.open(gmailUrl, "_blank");

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="contact" className="py-32 relative w-full flex justify-center">
      {/* Outer background glow */}
      <div className="absolute right-1/4 bottom-1/4 w-[40vw] h-[40vw] rounded-full bg-[#f472b6]/5 filter blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Centered Glass Card */}
        <div className="reveal glass-card max-w-5xl mx-auto rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
          
          {/* Internal Drifting Glow Blobs */}
          <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#22d3ee]/8 filter blur-[110px] pointer-events-none z-0 animate-pulse duration-[8s]" />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#a855f7]/8 filter blur-[110px] pointer-events-none z-0 animate-pulse duration-[10s]" style={{ animationDelay: "2s" }} />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Header Badge */}
            <span className="text-xs uppercase tracking-[0.35em] text-[#22d3ee] font-bold mb-6 block font-sans select-none">
              Transmission
            </span>

            {/* 7xl Title Gradient Text */}
            <h2 className="text-5xl md:text-7xl font-display font-black text-cyber-gradient filter drop-shadow-[0_0_30px_rgba(34,211,238,0.2)] mb-8 tracking-tighter leading-[0.9] select-none max-w-3xl">
              Let's Architect <br /> Something Great.
            </h2>

            {/* Satoshi Description Text */}
            <p className="text-[#9ca3af] text-lg font-medium font-sans max-w-2xl mb-16 leading-relaxed select-none">
              I am currently accepting direct engineering client contracts, full-stack opportunities, 
              and technical collaborations. Send a package below.
            </p>

            {/* High-Fidelity Form Layout */}
            <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-6 mb-20 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-white/[0.03] border ${
                      errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#22d3ee]"
                    } hover:border-white/20 rounded-2xl px-6 py-4.5 text-white placeholder-white/30 focus:outline-none transition-cyber font-sans font-medium text-base`}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-2 font-bold font-sans pl-2">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-white/[0.03] border ${
                      errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#22d3ee]"
                    } hover:border-white/20 rounded-2xl px-6 py-4.5 text-white placeholder-white/30 focus:outline-none transition-cyber font-sans font-medium text-base`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs mt-2 font-bold font-sans pl-2">
                      {errors.email}
                    </span>
                  )}
                </div>

              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <textarea
                  rows="5"
                  placeholder="Tell me about your project, target objectives, or timelines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-white/[0.03] border ${
                    errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-[#22d3ee]"
                  } hover:border-white/20 rounded-2xl px-6 py-4.5 text-white placeholder-white/30 focus:outline-none transition-cyber font-sans font-medium text-base resize-none`}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs mt-2 font-bold font-sans pl-2">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Action Response Status Box */}
              {status === "success" && (
                <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl text-center font-bold font-sans transition-cyber">
                  Opening Gmail in a new tab with your pre-filled message... Thank you!
                </div>
              )}
              {status === "sending" && (
                <div className="p-5 bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] rounded-2xl text-center font-bold font-sans animate-pulse transition-cyber">
                  Preparing transmission...
                </div>
              )}

              {/* White Pill Action Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4.5 rounded-2xl bg-white hover:bg-white/90 text-black font-black text-base transition-cyber hover:scale-[1.01] active:scale-95 shadow-[0_4px_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Transmitting..." : "Send Transmission"}
                <FiSend className="text-base" />
              </button>

            </form>

            {/* Footer Area inside the Card: 4-Column Metadata Grid */}
            <div className="w-full pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-left relative z-10 select-none">
              
              {/* Column 1: Email */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#22d3ee] font-black mb-3 font-sans">
                  Email
                </h4>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm lg:text-base font-extrabold text-white hover:text-[#22d3ee] transition-cyber font-sans block truncate"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Column 2: Social */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#a855f7] font-black mb-3 font-sans">
                  Socials
                </h4>
                <div className="flex items-center gap-2 text-sm lg:text-base font-extrabold text-white font-sans">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#a855f7] transition-cyber"
                  >
                    GitHub
                  </a>
                  <span className="text-white/20">/</span>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#a855f7] transition-cyber"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Column 3: Location */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#f472b6] font-black mb-3 font-sans">
                  Location
                </h4>
                <span className="text-sm lg:text-base font-extrabold text-white font-sans block">
                  {profileData.location || "Remote / India"}
                </span>
              </div>

              {/* Column 4: Timezone */}
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-black mb-3 font-sans">
                  Timezone
                </h4>
                <span className="text-sm lg:text-base font-extrabold text-white font-sans block">
                  IST (UTC+5:30)
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
