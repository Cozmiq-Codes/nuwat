import React from "react";
import Image from "next/image";

import GradientButton from "@/components/global/GradientButton";
import PrimaryButton from "@/components/global/PrimaryButton";

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
              <PrimaryButton title={aboutNuwat} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
