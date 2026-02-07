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
                src="/layout/what-we-do/building.webp"
                alt="Building"
                width={550}
                height={350}
              />
            </div>
          </div>
          <div className={"what_we_do_right"}>
            <h3 className="wwdr_heading">
              <span className={"heading-span"}>
                NUWAT is a sovereign operating partner
              </span>{" "}
              built for companies that refuse to stay ordinary, outpace their
              market,{" "}
              <span className={"heading-span"}>
                and dictate the standard of their industry.
              </span>
            </h3>
            <div className={"what_we_do_btn"}>
              <button className="primary_button flex">
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
