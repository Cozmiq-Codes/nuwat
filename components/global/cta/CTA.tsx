import React from "react";
import Image from "next/image";

interface CTAProps {
  content: {
    title: string;
    description: string;
  };
  common: {
    buttons: {
      applyNow: string;
      learnMore: string;
    };
  };
}

const CTA = ({ content, common }: CTAProps) => {
  return (
    <section>
      <div className="main-container">
        <div>
          <div className="cta_content_wrap">
            <div className="cta_top_content">
              <h2 className={"heading_2"}>{content.title}</h2>
              <p className={"paragraph_md"}>{content.description}</p>
            </div>
            <div className="cta_bottom_content flex gap-4">
              <button className="primary_button flex">
                {common.buttons.applyNow}
                <span>
                  <Image
                    src="/layout/what-we-do/right_icon.svg"
                    alt="Right Icon"
                    width={24}
                    height={24}
                  />
                </span>
              </button>
              <button className={"secondary-btn"}>
                {common.buttons.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
