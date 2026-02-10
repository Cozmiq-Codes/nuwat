"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/global/LanguageSwitcher";
import SecondaryBtn from "../global/SecondaryBtn";

const logo = "/layout/navbar/logo.svg";

interface NavbarProps {
  nav: {
    home: string;
    about: string;
    services: string;
    faq: string;
    contact: string;
  };
  common: {
    buttons: {
      register: string;
    };
  };
  lang: string;
}

const Navbar = ({ nav, common, lang }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: nav.home, url: `/${lang}` },
    { name: nav.about, url: `/${lang}/about` },
    { name: nav.services, url: `/${lang}/services` },
    { name: nav.faq, url: `/${lang}/faq` },
    { name: nav.contact, url: `/${lang}/contact` },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className={"main-container"}>
        <div className={"navbar-wrapper"}>
          <div>
            <Link href={`/${lang}`}>
              <Image
                src={logo}
                alt={"Nuwat Logo"}
                width={117}
                height={32}
                className={"logo"}
              />
            </Link>
          </div>

          <div className={`navbar-links-wrapper ${isMenuOpen ? "open" : ""}`}>
            <ul className={"lg:ml-25"}>
              {navLinks.map((link, index) => {
                const isHome = link.url === `/${lang}`;
                const isActive =
                  pathname === link.url ||
                  (pathname?.startsWith(link.url) &&
                    pathname[link.url.length] === "/" &&
                    !isHome);

                return (
                  <Link
                    href={link.url}
                    key={index}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <li>
                      <div
                        className={`link-wrapper ${isActive ? "active" : ""}`}
                      >
                        {link.name}
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div className={"flex flex-col gap-4 lg:hidden mt-4"}>
              <LanguageSwitcher />
              <SecondaryBtn title={common.buttons.register} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={"hidden lg:flex items-center gap-2"}>
              <LanguageSwitcher />
              <SecondaryBtn title={common.buttons.register} />
            </div>

            <button
              className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
