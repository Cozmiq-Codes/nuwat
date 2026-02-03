import React from "react";
import Image from "next/image";

const BgGrad = "/capabilities/bg-grad.png";
const SectionImage = "/capabilities/section-image.png";

const Capabilities = () => {
  return (
    <section className={"min-h-screen relative overflow-hidden"}>
      <div className={"main-container relative z-20"}>
        <div className={"section-wrapper"}>
          <div
            className={
              "flex flex-col gap-8 lg:gap-12 justify-center items-center"
            }
          >
            <h2 className={"section-heading"}>Our Capabilities</h2>
            <div
              className={
                "flex flex-col lg:flex-row gap-6 justify-between items-center w-full"
              }
            >
              <div className={"flex flex-col gap-6 w-full lg:w-1/3"}>
                <div
                  className={
                    "bg-[#FFFFFF14] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 lg:gap-6"
                  }
                >
                  <h3
                    className={
                      "text-[#F2F7FE] text-xl lg:text-[26px] font-bold leading-tight lg:leading-[36px]"
                    }
                  >
                    Design That Sets the Standard
                  </h3>
                  <p className="text-[#E7E7E7] text-[15px] lg:text-[16px] leading-[26px] lg:leading-[28px]">
                    We design to move markets, not impress judges. Our work
                    delivers unmatched clarity, authority, and presence in brand
                    identity, visual systems, and packaging.
                  </p>
                </div>
                <div
                  className={
                    "bg-[#FFFFFF14] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 lg:gap-6"
                  }
                >
                  <h3
                    className={
                      "text-[#F2F7FE] text-xl lg:text-[26px] font-bold leading-tight lg:leading-[36px]"
                    }
                  >
                    Brand Strategy With Teeth
                  </h3>
                  <p className="text-[#E7E7E7] text-[15px] lg:text-[16px] leading-[26px] lg:leading-[28px]">
                    Brand strategy isn&apos;t a presentation deck. It&apos;s a
                    decision-making weapon. We define positioning, narrative,
                    and direction so your brand shows up consistently,
                    confidently, and unmistakably ahead of the rest.
                  </p>
                </div>
              </div>

              <Image
                src={SectionImage}
                alt={"Section Image"}
                className={
                  "w-full lg:w-[425px] h-auto md:h-[600px] lg:h-full object-contain md:object-cover lg:object-cover mb-6 lg:mb-0"
                }
                width={425}
                height={600}
              />

              <div className={"flex flex-col gap-6 w-full lg:w-1/3"}>
                <div
                  className={
                    "bg-[#FFFFFF14] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 lg:gap-6"
                  }
                >
                  <h3
                    className={
                      "text-[#F2F7FE] text-xl lg:text-[26px] font-bold leading-tight lg:leading-[36px]"
                    }
                  >
                    Growth Built to Last
                  </h3>
                  <p className="text-[#E7E7E7] text-[15px] lg:text-[16px] leading-[26px] lg:leading-[28px]">
                    Growth isn&apos;t noise, hacks, or short-term wins. We build
                    disciplined marketing and growth systems that reach the
                    right audience, convert with intent, and scale without
                    collapsing under pressure.
                  </p>
                </div>
                <div
                  className={
                    "bg-[#FFFFFF14] p-6 lg:p-8 rounded-[18px] flex flex-col gap-4 lg:gap-6"
                  }
                >
                  <h3
                    className={
                      "text-[#F2F7FE] text-xl lg:text-[26px] font-bold leading-tight lg:leading-[36px]"
                    }
                  >
                    Websites That Don&apos;t Age Poorly
                  </h3>
                  <p className="text-[#E7E7E7] text-[15px] lg:text-[16px] leading-[26px] lg:leading-[28px]">
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

      <div>
        <Image
          src={BgGrad}
          alt={"Gradient Image"}
          className={"absolute z-10 top-0 right-0 w-[1500px]"}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
export default Capabilities;
