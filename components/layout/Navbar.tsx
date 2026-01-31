import Image from "next/image";
import Link from "next/link";
import { NAVBAR_LINK } from "@/constant/Navbar";

const logo = "/layout/navbar/logo.svg";
const globe = "/layout/navbar/globe.svg";

const Navbar = () => {
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
          <div className={"navbar-links-wrapper"}>
            <ul>
              {NAVBAR_LINK.map((link, index) => (
                <Link href={link.url} key={index}>
                  <li>
                    <div className={"link-wrapper"}>{link.name}</div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className={"nav-buttons-wrapper"}>
            <button
              className={"local-btn py-[10px] px-6 flex items-center gap-2"}
            >
              <Image src={globe} alt={"Glove Icon"} width={24} height={24} />{" "}
              English
            </button>
            <button className={"secondary-btn"}>Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
