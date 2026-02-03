import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className={"what_we_do"}>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"what_we_do_left"}>
            <h2 className={"wwdl_title"}>WHAT WE DO</h2>
            <div className="what_we_do_img">
              <Image
                src="/layout/what-we-do/building.png"
                alt="Building"
                width={550}
                height={350}
              />
            </div>
          </div>
          <div className={"what_we_do_right"}>
            <h3 className="wwdr_heading">
              <span className="text-cyan-400">
                Nuwat is a business transformation
              </span>{" "}
              firm built for companies that refuse to stay ordinary, outpace
              their market, and raise the standard{" "}
              <span className="text-cyan-400">of how business is done</span>.
            </h3>
            <div className={"what_we_do_btn"}>
              <button className="primary_button">
                <span>
                  <Image
                    src="/layout/what-we-do/right_icon.svg"
                    alt="Right Icon"
                    width={24}
                    height={24}
                  />
                </span>
                About Nuwat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
