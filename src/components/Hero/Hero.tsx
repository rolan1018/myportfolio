import { motion } from "motion/react";
import { Terminal, Database, Server, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            DevOps & <span className="text-blue-600">Infrastructure Specialist</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Bridging the gap between robust code and resilient infrastructure. 
            Specializing in Full Stack development, Storage & Backup solutions, 
            and Unix/Windows systems administration.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              Get in touch
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all"
            >
              View Experience
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Code, label: "Full Stack" },
              { icon: Database, label: "Storage" },
              { icon: Server, label: "Unix/Win" },
              { icon: Terminal, label: "Backup" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start">
                <item.icon className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-sm font-semibold text-slate-900">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full md:w-64 lg:w-96">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-slate-200">
              <img 
                src="/static/profile.jpg" 
                alt="Profile"
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to a professional placeholder if profile.jpg is not found
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 border-2 border-slate-200 rounded-2xl -rotate-6 z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
