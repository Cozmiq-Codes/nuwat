import React from "react";
import Image from "next/image";

const SectionImage = "/capabilities/section-image.png";

const Capabilities = () => {
  return (
    <section className={"min-h-screen overflow-hidden py-[120px]"}>
      <div className={"main-container"}>
        <div>
          <div className="flex flex-col justify-center gap-12 lg:gap-16 items-center">
            {/* Heading */}
            <h2 className="section-heading text-center uppercase! tracking-wider">
              The Mechanics <span className="heading-span">of Dominance</span>
            </h2>

            <div>
              {/* Left Column Cards */}
              {/*<div className="flex flex-col gap-6 w-full lg:w-1/4 z-10">*/}
              {/*  <div className="bg-[#0f1218]/90 border border-[#1e293b] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-300">*/}
              {/*    <h3 className="text-[#F2F7FE] text-lg lg:text-[20px] font-bold leading-tight uppercase">*/}
              {/*      Sovereign Brand Architecture.*/}
              {/*    </h3>*/}
              {/*    <p className="text-[#94A3B8] text-[14px] lg:text-[15px] leading-relaxed">*/}
              {/*      We design to move markets, not impress judges. Our work*/}
              {/*      delivers unmatched clarity, authority, and presence in brand*/}
              {/*      identity, visual systems, and packaging.*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*  <div className="bg-[#0f1218]/90 border border-[#1e293b] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-300">*/}
              {/*    <h3 className="text-[#F2F7FE] text-lg lg:text-[20px] font-bold leading-tight uppercase">*/}
              {/*      Digital Frontiers, Fortified.*/}
              {/*    </h3>*/}
              {/*    <p className="text-[#94A3B8] text-[14px] lg:text-[15px] leading-relaxed">*/}
              {/*      Brand strategy isn&apos;t a presentation deck. It&apos;s a*/}
              {/*      decision-making weapon. We define positioning, narrative,*/}
              {/*      and direction so your brand shows up consistently,*/}
              {/*      confidently.*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/* Center Image */}
              <div className="w-full lg:w-[50%] relative z-0 my-8 lg:my-0">
                <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px]">
                  <Image
                    src={SectionImage}
                    alt="The Mechanics of Dominance"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Right Column Cards */}
              {/*<div className="flex flex-col gap-6 w-full lg:w-1/4 z-10">*/}
              {/*  <div className="bg-[#0f1218]/90 border border-[#1e293b] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-300">*/}
              {/*    <h3 className="text-[#F2F7FE] text-lg lg:text-[20px] font-bold leading-tight uppercase">*/}
              {/*      Unassailable Scale Engines.*/}
              {/*    </h3>*/}
              {/*    <p className="text-[#94A3B8] text-[14px] lg:text-[15px] leading-relaxed">*/}
              {/*      Growth isn&apos;t noise, hacks, or short-term wins. We build*/}
              {/*      disciplined marketing and growth systems that reach the*/}
              {/*      right audience, convert with intent, and scale without*/}
              {/*      collapsing under pressure.*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*  <div className="bg-[#0f1218]/90 border border-[#1e293b] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-300">*/}
              {/*    <h3 className="text-[#F2F7FE] text-lg lg:text-[20px] font-bold leading-tight uppercase">*/}
              {/*      Systemic Reconstruction.*/}
              {/*    </h3>*/}
              {/*    <p className="text-[#94A3B8] text-[14px] lg:text-[15px] leading-relaxed">*/}
              {/*      We don&apos;t ship websites that look good for six months.*/}
              {/*      We build digital platforms designed to hold up as your*/}
              {/*      business grows, evolves, and outpaces competitors.*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Capabilities;
