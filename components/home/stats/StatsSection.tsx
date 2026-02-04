import React from "react";

const StatsSection = () => {
  return (
    <section>
      <div className={"main-container"}>
        <div
          className={
            "py-[40px] md:py-[75px] px-4 md:px-0 bg-[#FFFFFF05] flex flex-col items-center justify-center w-full rounded-3xl gap-8 md:gap-12"
          }
        >
          <div
            className={
              "max-w-full lg:max-w-[900px] flex flex-col items-center gap-4"
            }
          >
            <h2 className={"section-heading text-3xl md:text-4xl lg:text-5xl"}>
              Built for{" "}
              <span className={"heading-span"}>Companies That Expect More</span>
            </h2>
            <p
              className={
                "text-center max-w-full md:max-w-[600px] text-[#FFFFFFC2] text-sm lg:text-[16px] font-normal leading-[24px] lg:leading-[28px]"
              }
            >
              We build businesses that perform better, last longer, and raise
              the bar for everyone operating in their category.
            </p>
          </div>
          <div
            className={
              "flex flex-col md:flex-row justify-between gap-8 md:gap-16 text-center"
            }
          >
            <div className={"flex flex-col items-center gap-2"}>
              <h3
                className={
                  "heading-span text-[48px] lg:text-[64px] font-medium leading-[1.2] lg:leading-[72px] tracking-[-1.677px]"
                }
              >
               10,000+
              </h3>
              <p
                className={
                  "text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[28px] text-[#FFFFFFC2]"
                }
              >
                satisfied clients
              </p>
            </div>
            <div className={"flex flex-col items-center gap-2"}>
              <h3
                className={
                  "heading-span text-[48px] lg:text-[64px] font-medium leading-[1.2] lg:leading-[72px] tracking-[-1.677px]"
                }
              >
                92%
              </h3>
              <p
                className={
                  "text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[28px] text-[#FFFFFFC2]"
                }
              >
                client referral
              </p>
            </div>
            <div className={"flex flex-col items-center gap-2"}>
              <h3
                className={
                  "heading-span text-[48px] lg:text-[64px] font-medium leading-[1.2] lg:leading-[72px] tracking-[-1.677px]"
                }
              >
                1 in 5
              </h3>
              <p
                className={
                  "text-[14px] lg:text-[16px] font-normal leading-[24px] lg:leading-[28px] text-[#FFFFFFC2]"
                }
              >
                companies accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
