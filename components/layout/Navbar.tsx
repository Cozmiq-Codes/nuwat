import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {NAVBAR_LINK} from "@/constant/Navbar";

const logo = '/layout/navbar/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className={"main-container"}>
                <div className={"navbar-wrapper"}>
                    <div>
                        <Image src={logo} alt={"Nuwat Logo"} width={117} height={32} className={"logo"}/>
                    </div>
                    <div className={"navbar-links-wrapper"}>
                        <ul>
                            {
                                NAVBAR_LINK.map((link, index) => (
                                    <li key={index}>
                                        <div className={"link-wrapper"}>
                                            <Link href={link.url}>{link.name}</Link>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={"nav-buttons-wrapper"}>
                        <button className={"local-btn"}>English</button>
                        <button className={"secondary-btn"}>Register</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
