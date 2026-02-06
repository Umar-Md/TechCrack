import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Zap, BarChart3, Search, ShieldCheck } from 'lucide-react';

const serviceList = [
  {
    title: "Fullstack Web Development",
    icon: <Code className="text-cyan-400" size={32} />,
    desc: "Building scalable, high-performance web applications using the MERN stack and Next.js. We focus on clean architecture and edge computing.",
    features: ["Custom Web Apps", "API Integration", "Database Design"]
  },
  {
    title: "Technical SEO & Performance",
    icon: <Search className="text-purple-400" size={32} />,
    desc: "We don't just add keywords; we optimize Core Web Vitals, implement Schema markup, and ensure lightning-fast load speeds.",
    features: ["Page Speed Optimization", "Sitemap Management", "Keyword Strategy"]
  },
  {
    title: "Project Consultation",
    icon: <Zap className="text-yellow-400" size={32} />,
    desc: "Planning a major project? We help you choose the right tech stack (Vite vs Next.js) and architecture to scale from day one.",
    features: ["Code Reviews", "Architecture Planning", "Scalability Audits"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-cyan-500 font-mono tracking-widest uppercase text-sm"
          >
            Our Capabilities
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black mt-4 tracking-tighter"
          >
            TECHNICAL <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-600">EXCELLENCE</span>
          </motion.h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="mb-6 p-4 bg-black rounded-2xl w-fit border border-white/5 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <ShieldCheck size={14} className="text-cyan-500" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* SEO Performance Mockup Section */}
        <div className="rounded-3xl bg-linear-to-b from-cyan-500/10 to-transparent border border-cyan-500/20 p-8 md:p-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Built for Speed & SEO</h2>
              <p className="text-gray-400 mb-8">
                Most 3D websites fail at SEO. We solve this by using Server-Side Rendering (SSR) and optimized asset delivery, ensuring your site hits 100/100 on Google PageSpeed Insights.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 underline decoration-green-400/30">99</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 underline decoration-green-400/30">100</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold">SEO</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-400 underline decoration-green-400/30">100</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold">Best Practices</div>
                </div>
              </div>
            </div>
            
            {/* Visual Mockup of a Chart */}
            <div className="relative">
              <div className="h-64 w-full bg-black/40 rounded-xl border border-white/10 p-6 flex items-end gap-2">
                {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className="flex-1 bg-linear-to-t from-cyan-600 to-cyan-300 rounded-t-sm"
                  />
                ))}
              </div>
              <div className="absolute -top-4 -right-4 bg-purple-600 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                LIVE TRAFFIC UP
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;