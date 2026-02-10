import React from "react";
import Image from "next/image";

import GradientButton from "@/components/global/GradientButton";

interface WhatWeDoProps {
  content: {
    title: string;
    heading: string;
  };
  aboutNuwat: string;
}

const WhatWeDo = ({ content, aboutNuwat }: WhatWeDoProps) => {
  return (
    <section className={"what_we_do"}>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"what_we_do_left"}>
            <h2 className={"wwdl_title"}>{content.title}</h2>
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
            <h3
              className="wwdr_heading"
              dangerouslySetInnerHTML={{ __html: content.heading }}
            />
            <div className={"what_we_do_btn"}>
              <GradientButton className="flex w-max">
                <span>
                  <Image
                    src="/layout/what-we-do/right_icon.svg"
                    alt="Right Icon"
                    width={24}
                    height={24}
                  />
                </span>
                {aboutNuwat}
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
