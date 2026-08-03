import { motion } from "motion/react";
import { Code2, Database, ShieldCheck, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "DevOps and Backend Development",
      icon: Code2,
      skills: ["Python programming", "Linux", "REST APIs", "FastAPI", "MySQL", "Docker", "Azure DevOps", "ADO Pipelines", "Git", "Grafana"],
      color: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      title: "Storage & Backup",
      icon: Database,
      skills: ["SAN/NAS Management", "Dell EMC", "HPE Storage", "IBM Storage", "Connectrix B-Series", "Brocade SAN Switch", "DELL EMC Networker", "Commvault", "Disaster Recovery"],
      color: "bg-indigo-50 text-indigo-700 border-indigo-100"
    },
    {
      title: "Systems Administration",
      icon: Cpu,
      skills: ["Unix (Solaris/AIX)", "Linux (RHEL/Ubuntu)", "Windows Server", "VMware"],
      color: "bg-slate-50 text-slate-700 border-slate-100"
    },
    {
      title: "Security & Compliance",
      icon: ShieldCheck,
      skills: ["Hardening", "Patch Management", "Backup Auditing", "Access Control", "Monitoring", "Compliance"],
      color: "bg-emerald-50 text-emerald-700 border-emerald-100"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive blend of software engineering and enterprise infrastructure management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${category.color} flex flex-col h-full`}
            >
              <category.icon className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 bg-white/50 rounded-md text-xs font-semibold border border-current/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
