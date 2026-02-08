import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Cybersecurity Operations Center (CSOC)",
    desc: "24/7 enterprise monitoring, detection, and coordinated incident response through a centralized SOC model.",
  },
  {
    title: "Incident Response & Management",
    desc: "Rapid identification, containment, investigation, and remediation of cyber incidents to minimize business impact.",
  },
  {
    title: "Incident Response Plans & Procedures",
    desc: "Customized response playbooks aligned with regulatory, operational, and organizational requirements.",
  },
  {
    title: "Threat Intelligence Integration",
    desc: "Integration of real-time threat intelligence to strengthen detection, prevention, and response capabilities.",
  },
  {
    title: "Role of Security Analysts in a CSOC",
    desc: "Clearly defined Tier 1, Tier 2, and Tier 3 analyst responsibilities for effective SOC operations.",
  },
  {
    title: "CSOC Staffing & Talent Retention",
    desc: "Strategic advisory to reduce analyst burnout and improve long-term talent retention.",
  },
  {
    title: "Aadhaar Authentication & eKYC Integration",
    desc: "UIDAI-compliant Aadhaar authentication and secure eKYC integration services.",
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    desc: "Comprehensive vulnerability discovery and exploitation across applications, networks, and cloud.",
  },
  {
    title: "Cloud Security",
    desc: "Security architecture, monitoring, and protection for AWS, Azure, and Google Cloud platforms.",
  },
  {
    title: "Application Security",
    desc: "Secure SDLC practices, code reviews, and application security testing.",
  },
  {
    title: "Network Implementation",
    desc: "Design and deployment of secure, scalable enterprise network infrastructure.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div id="services" className="bg-gray-50 relative">
      {/* HERO */}
      <section className="bg-gradient-to-br from-white to-[#e6f0fa] text-[#0b2a5b] py-28 px-6 rounded-b-3xl">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-blue-400 font-semibold">
              Our Services
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              Enterprise Cybersecurity <br /> Services
            </h1>

            <p className="text-blue-800 max-w-xl text-lg leading-relaxed">
              We provide end-to-end cybersecurity solutions designed to protect
              modern enterprises across networks, applications, cloud, and identity.
            </p>

            <button
              onClick={() => navigate("/services-details")}
              className="mt-8 px-7 py-3 rounded-full bg-[#0b2a5b] text-white font-semibold hover:bg-[#163d82] transition"
            >
              Explore Service Details
            </button>
          </div>

          <div className="bg-white/50 border border-white/30 rounded-3xl p-10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4">
              Why Organizations Trust Us
            </h3>
            <ul className="space-y-3 text-blue-800">
              <li>✔ Enterprise-grade security frameworks</li>
              <li>✔ Global compliance alignment</li>
              <li>✔ 24/7 monitoring & response</li>
              <li>✔ Proven industry expertise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-[#0b2a5b] mb-3">
              Security Capabilities
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              A comprehensive portfolio covering cybersecurity operations,
              compliance, cloud, application, and infrastructure security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-xl p-8 hover:border-[#0b2a5b] hover:shadow-xl transition"
              >
                <div className="h-1 w-12 bg-[#0b2a5b] mb-6 rounded-full" />

                <h3 className="text-lg font-semibold text-[#0b2a5b] mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON - BOTTOM RIGHT */}
          <div className="absolute bottom-6 right-6">
            <button
              onClick={() => navigate("/services-details")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              View Detailed Service Overview
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
