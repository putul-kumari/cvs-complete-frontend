import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#0b2a5b]" size={28} />
              <h3 className="text-xl font-bold text-[#0b2a5b]">
                Codevirus Security
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Enterprise cybersecurity consulting and assurance services, supporting organizations across evolving digital threats.
            </p>

            <div className="mt-6">
              <span className="text-xs font-semibold text-gray-700 uppercase">
                Trusted Partner
              </span>
              <p className="text-sm text-gray-600">GoodFirms – Cybersecurity Services</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0b2a5b] mt-0.5" />
                <span>Lucknow, India</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#0b2a5b] mt-0.5" />
                <a href="mailto:services@codevirussec.in" className="hover:text-[#071a36] transition">
                  services@codevirussec.in
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#0b2a5b] mt-0.5" />
                <a href="mailto:contact@codevirussec.in" className="hover:text-[#071a36] transition">
                  contact@codevirussec.in
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#0b2a5b] mt-0.5" />
                <span>+91 9918103909</span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-[#071a36] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#071a36] transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#071a36] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#071a36] transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#071a36] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#071a36] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#071a36] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Cybersecurity Services
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>Vulnerability Assessment & Penetration Testing</li>
              <li>Cloud Security</li>
              <li>Data Protection & Privacy</li>
              <li>IT & System Security Audits</li>
              <li>Aadhaar Security Audit</li>
              <li>Digital Forensics</li>
              <li>IoT & Network Security</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Codevirus Security. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
