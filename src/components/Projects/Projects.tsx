import { motion } from "motion/react";
import { Code, GitBranch, Database, Activity, Terminal, Server, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Commvault Python Automation SDK",
      description: "Developed a custom Python library to automate bulk registration of virtual machine clients, standardize backup policy creation, and streamline database operations for client management.",
      icon: Code,
      tags: ["Python", "SDK", "Automation", "Commvault"],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Automated Backup Onboarding Pipeline",
      description: "Engineered an Azure DevOps pipeline to automate the registration of virtual machine clients into backup software, significantly reducing manual configuration time.",
      icon: GitBranch,
      tags: ["Azure DevOps", "CI/CD", "Infrastructure", "Automation"],
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      title: "Standardized Backup Policy Automation",
      description: "Implemented a DevOps pipeline for the automated creation of enterprise-standard backup policies, ensuring consistency and compliance across all environments.",
      icon: Terminal,
      tags: ["DevOps", "Policy-as-Code", "Automation"],
      bgColor: "bg-slate-100",
      iconColor: "text-slate-600"
    },
    {
      title: "Data-Driven Observability Infrastructure",
      description: "Architected and built a MySQL-backed data infrastructure integrated with Grafana to provide real-time observability, meaningful analytics, and proactive monitoring of backup systems.",
      icon: Database,
      tags: ["MySQL", "Grafana", "Observability", "Analytics"],
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Automated Configuration Management Scripts",
      description: "Developed PowerShell scripts to facilitate the automated installation of backup agents via configuration management tools, accelerating deployment across large-scale infrastructures.",
      icon: Activity,
      tags: ["PowerShell", "Configuration Management", "Deployment"],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "OneAPI - Management API for Storage and Backup",
      description: "Unified automation interface designed to provision, manage, and monitor heterogeneous storage and backup infrastructures which also exposing metrics for operational insights through a single API.",
      icon: Server,
      tags: ["Python", "FastAPI", "MySQL"],
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Key Accomplishments
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of projects where I've bridged the gap between software engineering and enterprise infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl ${project.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon className={`w-6 h-6 ${project.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                  >
                    {tag}
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
