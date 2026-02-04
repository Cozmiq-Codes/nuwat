"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAVBAR_LINK } from "@/constant/Navbar";

const logo = "/layout/navbar/logo.svg";
const globe = "/layout/navbar/globe.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className={"main-container"}>
        <div className={"navbar-wrapper"}>
          <div>
            <Image
              src={logo}
              alt={"Nuwat Logo"}
              width={117}
              height={32}
              className={"logo"}
            />
          </div>

          <div className={`navbar-links-wrapper ${isMenuOpen ? "open" : ""}`}>
            <ul className={"lg:ml-[100px]"}>
              {NAVBAR_LINK.map((link, index) => (
                <Link
                  href={link.url}
                  key={index}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>
                    <div className={"link-wrapper"}>{link.name}</div>
                  </li>
                </Link>
              ))}
            </ul>
            <div className={"flex flex-col gap-4 lg:hidden mt-4"}>
              <button
                className={
                  "local-btn py-[10px] px-6 flex items-center gap-2 justify-center"
                }
              >
                <Image src={globe} alt={"Globe Icon"} width={24} height={24} />{" "}
                English
              </button>
              <button className={"secondary-btn"}>Register</button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={"hidden lg:flex items-center gap-2"}>
              <button
                className={"local-btn py-[10px] px-6 flex items-center gap-2"}
              >
                <Image src={globe} alt={"Globe Icon"} width={24} height={24} />{" "}
                English
              </button>
              <button className={"secondary-btn"}>Register</button>
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
