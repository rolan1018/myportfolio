import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      title: "Infrastructure Operations Engineer (Specialist)",
      company: "Vestas",
      period: "2024 - Present",
      description: "Leading the storage transformation project, migrating legacy systems to modern hybrid-cloud storage solutions. Implementing automated backup strategies across Unix and Windows environments."
    },
    {
      title: "Storage and Backup Administrator (Lead)",
      company: "Globe Telecom",
      period: "2021 - 2024",
      description: "Lead, mentor, and oversee daily operations for the Storage and Backup team, fostering professional growth and high-performance standards."
    },
    {
      title: "Advisor, Field Support Specialist",
      company: "DELL EMC",
      period: "2013 - 2017",
      description: "Responsible for the diagnosis, implementation, and use of EMC software and hardware products."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Professional Journey
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              A decade of experience in building and maintaining mission-critical systems.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full self-start md:self-center">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
