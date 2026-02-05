import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterImage = "/footer/footer-image.png";
const FooterBgGrad = "/footer/bg-grad.png";

const Footer = () => {
  return (
    <footer
      className={`pt-20 pb-10 border-t border-[#1e293b] rounded-[16px] lg:h-[720px] bg-[url('/footer/footer-bg-img.png')] bg-cover bg-center relative`}
    >
      <div className="main-container h-full flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          {/* Image Card */}
          <div className="w-full lg:w-auto flex justify-center lg:block">
            <div className="w-[200px] h-full rounded-2xl overflow-hidden border border-[#1e293b]">
              <Image
                src={FooterImage}
                alt="Nuwat HQ"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">
            {/* Company */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-lg font-bold">Company</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-lg font-bold">Support</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Terms of Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>

            {/* Careers */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-lg font-bold">Careers</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Professionals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    Providers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-lg font-bold">Contact Us</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <div className="w-5 h-5 mt-0.5 text-[#00D1FF] shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#94A3B8] text-sm leading-relaxed">
                    Alwane Business Center,
                    <br />
                    ABC Mall, Road 4026, Building
                    <br />
                    1301, Block 340, Juffair
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5 h-5 text-[#00D1FF] shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#94A3B8] text-sm">+973 3801 268</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5 h-5 text-[#00D1FF] shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#94A3B8] text-sm">
                    info@nuwatventures.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1e293b] text-center">
          <p className="text-[#64748B] text-xs">
            © 2025 Nuwat Ventures W.L.L. All rights reserved. Nuwat and its
            affiliated brands are trademarks of Nuwat Ventures W.L.L.
          </p>
        </div>
      </div>

      <div>
        <Image
          src={FooterBgGrad}
          alt={"Bg Grad"}
          className={"absolute bottom-0 right-[25%]"}
          width={845}
          height={410}
        />
        <Image
          src={FooterBgGrad}
          alt={"Bg Grad"}
          className={"absolute bottom-0 right-[1%]"}
          width={845}
          height={410}
        />
      </div>
    </footer>
  );
};

export default Footer;
