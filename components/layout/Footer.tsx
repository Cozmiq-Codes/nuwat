import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterImage = "/footer/footer-image.webp";
const FooterBgGrad = "/footer/bg-grad.webp";

interface FooterProps {
  content: {
    columns: {
      company: string;
      support: string;
      careers: string;
      contact: string;
    };
    links: {
      home: string;
      company: string;
      services: string;
      faq: string;
      contact: string;
      termsConditions: string;
      termsService: string;
      returnPolicy: string;
      privacyPolicy: string;
      accessibility: string;
      professionals: string;
      providers: string;
    };
    contactInfo: {
      address: string;
    };
    copyright: string;
  };
}

const Footer = ({ content }: FooterProps) => {
  return (
    <footer
      className={`pt-20 pb-10 border-t border-[#1e293b] rounded-2xl lg:h-180 bg-[url('/footer/footer-bg-img.webp')] bg-cover bg-center relative`}
    >
      <div className="main-container h-full flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          {/* Image Card */}
          <div className="w-full lg:w-auto flex justify-center lg:block">
            <div className="w-50 h-full rounded-2xl overflow-hidden border border-[#1e293b]">
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
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-8">
            {/* Company */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <h3 className="text-white text-lg font-bold">
                {content.columns.company}
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.home}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.company}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.services}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.faq}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <h3 className="text-white text-lg font-bold">
                {content.columns.support}
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.termsConditions}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.termsService}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.returnPolicy}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.privacyPolicy}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.accessibility}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Careers */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <h3 className="text-white text-lg font-bold">
                {content.columns.careers}
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.professionals}
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                  >
                    {content.links.providers}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <h3 className="text-white text-lg font-bold">
                {content.columns.contact}
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 items-center md:items-start justify-center md:justify-start group cursor-pointer select-none">
                  <div className="w-5 h-5 mt-0.5 text-[#00D1FF] shrink-0 group-hover:text-white transition-colors duration-200">
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
                  <span
                    className="text-[#94A3B8] text-sm leading-relaxed group-hover:text-white transition-colors duration-200"
                    dangerouslySetInnerHTML={{
                      __html: content.contactInfo.address,
                    }}
                  />
                </li>
                <li className="flex gap-3 items-center md:items-start justify-center md:justify-start group">
                  <a
                    href="tel:+9733801268"
                    className="flex gap-3 items-center md:items-start justify-center md:justify-start w-full cursor-pointer"
                  >
                    <div className="w-5 h-5 text-[#00D1FF] shrink-0 group-hover:text-white transition-colors duration-200">
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
                    <span className="text-[#94A3B8] text-sm group-hover:text-white transition-colors duration-200">
                      +973 3801 268
                    </span>
                  </a>
                </li>
                <li className="flex gap-3 items-center md:items-start justify-center md:justify-start group">
                  <a
                    href="mailto:info@nuwatventures.com"
                    className="flex gap-3 items-center md:items-start justify-center md:justify-start w-full cursor-pointer"
                  >
                    <div className="w-5 h-5 text-[#00D1FF] shrink-0 group-hover:text-white transition-colors duration-200">
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
                    <span className="text-[#94A3B8] text-sm group-hover:text-white transition-colors duration-200">
                      info@nuwatventures.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1e293b] text-center">
          <p className="text-[#64748B] text-xs">{content.copyright}</p>
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
