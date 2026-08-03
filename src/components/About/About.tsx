import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Storage, SAN, and Data Protection specialist with extensive experience in Systems Administration of Unix, Linux, Windows, and server virtualization. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Passionate about automation and scripting using Python programming language API development. I bridge the gap between enterprise infrastructure and modern software engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-slate-400 font-mono ml-2">terminal — 80x24</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-blue-400">$ whoami</p>
                <p className="text-slate-300">rolan_saad</p>
                <p className="text-blue-400">$ skills --category infrastructure</p>
                <p className="text-slate-300">["SAN", "Storage", "Backup", "Virtualization"]</p>
                <p className="text-blue-400">$ skills --category automation</p>
                <p className="text-slate-300">["Python", "API", "DevOps"]</p>
                <p className="text-blue-400">$ status</p>
                <p className="text-green-400">"Ready to build extraordinary things."</p>
                <p className="animate-pulse inline-block w-2 h-4 bg-white ml-1"></p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl -rotate-3 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
