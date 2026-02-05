import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <section>
      <div className="main-container">
        <div>
          <div className="cta_content_wrap">
            <div className="cta_top_content">
              <h2 className={"heading_2"}>
                Ready to Operate at a Higher Level?
              </h2>
              <p className={"paragraph_md"}>
                Show us one workflow. If it qualifies, we&apos;ll outline a
                two-week pilot. Access is limited.
              </p>
            </div>
            <div className="cta_bottom_content flex gap-4">
              <button className="primary_button flex">
                Apply Now
                <span>
                  <Image
                    src="/layout/what-we-do/right_icon.svg"
                    alt="Right Icon"
                    width={24}
                    height={24}
                  />
                </span>
              </button>
              <button className={"secondary-btn"}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
