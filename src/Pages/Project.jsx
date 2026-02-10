import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "IoT Security",
  "SOC Implementation",
  "Monitoring",
  "Threat Management",
  "Cloud Security",
  "Data Security",
  "Data Protection & Privacy",
  "VAPT",
  "SOC & Monitoring",
];

const projects = [
  {
    title: "Cyber Security Enhancement for Smart Devices",
    category: "IoT Security",
    description:
      "Advanced security solutions for IoT and smart device protection with real-time threat detection and automated response systems.",
    client: "IT Companies",
    duration: "6 Months",
    technologies: ["AI/ML", "IoT", "Blockchain", "Cloud Security"],
  },
  {
    title: "Advanced Cyber Defense & Operations Center",
    category: "SOC Implementation",
    description:
      "Comprehensive cybersecurity operations center implementation with 24/7 monitoring and incident response capabilities.",
    client: "Banking Sector",
    duration: "12 Months",
    technologies: ["SIEM", "EDR", "Threat Intelligence", "Automation"],
  },
  {
    title: "24/7 Security Monitoring & Incident Response",
    category: "Monitoring",
    description:
      "Round-the-clock security monitoring and rapid incident response system for critical infrastructure protection.",
    client: "Cyber Security",
    duration: "8 Months",
    technologies: [
      "Real-time Monitoring",
      "AI Detection",
      "Response Automation",
      "Forensics",
    ],
  },
  {
    title: "Cybersecurity Operations & Threat Management",
    category: "Threat Management",
    description:
      "Integrated threat management and cybersecurity operations for enterprise-level security infrastructure.",
    client: "Healthcare",
    duration: "10 Months",
    technologies: [
      "Threat Intelligence",
      "Risk Assessment",
      "Compliance",
      "Analytics",
    ],
  },
  {
    title: "Cloud Security & Compliance Framework",
    category: "Cloud Security",
    description:
      "Comprehensive cloud security framework ensuring compliance with industry standards and regulatory requirements.",
    client: "IT Companies",
    duration: "9 Months",
    technologies: ["AWS Security", "Azure Security", "Compliance", "Zero Trust"],
  },
  {
    title: "Enterprise Data Privacy Compliance Program",
    category: "Data Protection & Privacy",
    description:
      "Assessment and implementation of a structured privacy framework to identify data risks and improve governance.",
    client: "IT Enterprise",
    duration: "5 Months",
    technologies: [
      "Data Classification",
      "Risk Assessment",
      "Privacy Controls",
    ],
  },
  {
    title: "Web Application VAPT",
    category: "VAPT",
    description:
      "Identified web application vulnerabilities by simulating real-world attack scenarios.",
    client: "E-Commerce Platform",
    duration: "2 Months",
    technologies: ["Burp Suite", "OWASP Top 10"],
  },
  {
    title: "SOC Implementation & SIEM Deployment",
    category: "SOC & Monitoring",
    description:
      "Designed and implemented SOC with SIEM integration and escalation workflows.",
    client: "Banking Sector",
    duration: "12 Months",
    technologies: ["SIEM", "Threat Monitoring"],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView] = useState("home");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20 py-12 min-h-screen bg-slate-100 w-full overflow-x-hidden">
      {/* HERO */}
      {view !== "detail" && (
        <section className="w-full pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b2a5b] mb-6">
              Codevirus Cybersecurity Projects & Case Studies
            </h1>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Enterprise-grade cybersecurity implementations across SOC, Cloud,
              IoT, Data Protection, and Threat Management domains.
            </p>
          </div>
        </section>
      )}

      {/* CATEGORIES */}
      {view === "home" && (
        <section className="w-full pb-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setView(cat === "All" ? "home" : "category");
                }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold
                           bg-slate-900 text-white hover:bg-[#0b2a5b]
                           transition shadow"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* PROJECT CARDS */}
      {(view === "home" || view === "category") && (
        <section className="w-full bg-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                onClick={() => {
                  setActiveProject(project);
                  setView("detail");
                }}
                className="cursor-pointer bg-white rounded-2xl overflow-hidden
                           border border-slate-200 shadow-md hover:shadow-2xl transition"
              >
                <div className="p-6 bg-gradient-to-br from-slate-900 to-[#0b2a5b]">
                  <span className="text-xs text-white/80">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-2">
                    {project.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-600 line-clamp-3 mb-6">
                    {project.description}
                  </p>
                  <span className="text-sm font-semibold text-[#0b2a5b]">
                    View Case Study →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* DETAIL PAGE */}
      {view === "detail" && activeProject && (
        <section className="py-24 px-6 bg-gradient-to-br from-[#0b2a5b] to-[#081c3a] min-h-screen">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
            <button
              onClick={() => {
                setView("home");
                setActiveProject(null);
              }}
              className="mb-10 text-sm font-semibold text-[#0b2a5b] hover:underline"
            >
              ← Back to Projects
            </button>

            <h1 className="text-4xl font-extrabold text-[#0b2a5b] mb-10">
              {activeProject.title}
            </h1>

            <div className="border-l-4 border-[#0b2a5b] pl-6 space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Project Overview
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {activeProject.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Client</h4>
                  <p className="text-slate-700">{activeProject.client}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Duration
                  </h4>
                  <p className="text-slate-700">{activeProject.duration}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Technologies Used
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 text-lg">
                  {activeProject.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
