import React from "react";

const DominanceSection = () => {
  return (
    <section className={"min-h-screen overflow-hidden py-[120px]"}>
      <div className={"main-container"}>
        <div>
          <div className="flex flex-col justify-center gap-12 lg:gap-16 items-center">
            {/* Heading */}
            <h2 className="section-heading text-center uppercase!">
              The Mechanics <span className="heading-span">of Dominance</span>
            </h2>

            <div
              className="w-full min-h-[1000px] lg:min-h-[800px] bg-center bg-contain bg-no-repeat flex flex-col justify-center lg:justify-between gap-12 lg:gap-0"
              style={{
                backgroundImage: "url('/dominance/section-image.png')",
              }}
            >
              {/* Parent Card Wrapper */}
              <div className="w-full flex flex-col items-center lg:flex-row justify-between gap-6">
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF]">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    SOVEREIGN BRAND ARCHITECTURE.
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    We design to move markets, not impress judges. Our work
                    delivers unmatched clarity, authority, and presence in brand
                    identity, visual systems, and packaging.
                  </p>
                </div>
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF]">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    UNASSAILABLE SCALE ENGINES.
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    Growth isn&apos;t noise, hacks, or short-term wins. We build
                    disciplined marketing and growth systems that reach the
                    right audience, convert with intent, and scale without
                    collapsing under pressure.
                  </p>
                </div>
              </div>

              {/* Parent Card Wrapper */}
              <div className="w-full flex flex-col items-center lg:flex-row justify-between gap-6">
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF]">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    DIGITAL FRONTIERS, FORTIFIED.
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    Brand strategy isn&apos;t a presentation deck. It&apos;s a
                    decision-making weapon. We define positioning, narrative,
                    and direction so your brand shows up consistently,
                    confidently,
                  </p>
                </div>
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF]">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    SYSTEMIC RECONSTRUCTION.
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    We don&apos;t ship websites that look good for six months.
                    We build digital platforms designed to hold up as your
                    business grows, evolves, and outpaces competitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DominanceSection;
