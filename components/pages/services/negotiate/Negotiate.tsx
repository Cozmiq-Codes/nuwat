import React from "react";
import Image from "next/image";

const NegotiateImage = "/services/negotiate/negotiate.webp";
const CancelIcon = "/services/negotiate/cancel-circle.svg";
const UpArrowIcon = "/services/negotiate/arrow-up.svg";
const DownArrowIcon = "/services/negotiate/arrow-down.svg";

const Negotiate = () => {
  return (
    <section>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div
            className={
              "flex flex-col lg:flex-row justify-between gap-6 lg:gap-10"
            }
          >
            <div
              className={
                "bg-[#131313] rounded-2xl p-6 md:p-10 lg:p-12 flex flex-col gap-6 lg:gap-8"
              }
            >
              <h2
                className={
                  "text-white text-[32px] sm:text-[40px] lg:text-[48px]! font-bold leading-tight lg:leading-[60px] max-w-[480px]"
                }
              >
                What We Don&apos;t Do The Non-Negotiables
              </h2>

              <div className={"flex flex-col gap-4 sm:gap-5"}>
                {/* Open FAQ */}
                <div
                  className={
                    "bg-[linear-gradient(226deg,rgba(0,209,255,0.08)_18.78%,rgba(81,162,255,0.08)_74.66%)] p-4 sm:p-5 rounded-xl flex items-start sm:items-center justify-between gap-3"
                  }
                >
                  <Image
                    src={CancelIcon}
                    alt={"Cancel Icon"}
                    width={24}
                    height={24}
                    className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-1 sm:mt-0"}
                  />
                  <div className={"flex flex-col gap-2 sm:gap-3 flex-1"}>
                    <h3
                      className={
                        "text-white text-lg sm:text-[20px] font-bold leading-snug sm:leading-7"
                      }
                    >
                      We don&apos;t run vanity campaigns.
                    </h3>
                    <p
                      className={
                        "text-white/80 text-sm sm:text-base font-normal leading-relaxed sm:leading-7 max-w-[590px]"
                      }
                    >
                      We are not a marketing firm; we are an industrial engine.
                      If it doesn&apos;t move the bottom line or secure the
                      foundation, we don&apos;t touch it.
                    </p>
                  </div>
                  <Image
                    src={UpArrowIcon}
                    alt={"Up arrow icon"}
                    width={24}
                    height={24}
                    className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-1 sm:mt-0"}
                  />
                </div>

                {/*  Closed FAQS   */}
                <div
                  className={
                    "bg-[#1C1C1C52] p-4 sm:p-5 rounded-xl flex items-center justify-between gap-3 relative"
                  }
                >
                  <div className={"flex items-center gap-3"}>
                    <Image
                      src={CancelIcon}
                      alt={"Cancel Icon"}
                      width={24}
                      height={24}
                      className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                    />
                    <h3
                      className={
                        "text-white text-lg sm:text-[20px] font-bold leading-snug sm:leading-7"
                      }
                    >
                      NUWAT Does Not Give Superficial
                    </h3>
                  </div>
                  <Image
                    src={DownArrowIcon}
                    alt={"Down arrow icon"}
                    width={24}
                    height={24}
                    className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                  />
                </div>
                <div
                  className={
                    "bg-[#1C1C1C52] p-4 sm:p-5 rounded-xl flex items-center justify-between gap-3 relative"
                  }
                >
                  <div className={"flex items-center gap-3"}>
                    <Image
                      src={CancelIcon}
                      alt={"Cancel Icon"}
                      width={24}
                      height={24}
                      className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                    />
                    <h3
                      className={
                        "text-white text-lg sm:text-[20px] font-bold leading-snug sm:leading-7"
                      }
                    >
                      We Do Not Offer Cookie-Cutter Solutions
                    </h3>
                  </div>
                  <Image
                    src={DownArrowIcon}
                    alt={"Down arrow icon"}
                    width={24}
                    height={24}
                    className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                  />
                </div>
                <div
                  className={
                    "bg-[#1C1C1C52] p-4 sm:p-5 rounded-xl flex items-center justify-between gap-3 relative"
                  }
                >
                  <div className={"flex items-center gap-3"}>
                    <Image
                      src={CancelIcon}
                      alt={"Cancel Icon"}
                      width={24}
                      height={24}
                      className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                    />
                    <h3
                      className={
                        "text-white text-lg sm:text-[20px] font-bold leading-snug sm:leading-7"
                      }
                    >
                      We Don&apos;t Promise Targets Based On A Spreadsheet.
                    </h3>
                  </div>
                  <Image
                    src={DownArrowIcon}
                    alt={"Down arrow icon"}
                    width={24}
                    height={24}
                    className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                  />
                </div>
                <div
                  className={
                    "bg-[#1C1C1C52] p-4 sm:p-5 rounded-xl flex items-center justify-between gap-3 relative"
                  }
                >
                  <div className={"flex items-center gap-3"}>
                    <Image
                      src={CancelIcon}
                      alt={"Cancel Icon"}
                      width={24}
                      height={24}
                      className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                    />
                    <h3
                      className={
                        "text-white text-lg sm:text-[20px] font-bold leading-snug sm:leading-7"
                      }
                    >
                      We Work Upstream.
                    </h3>
                  </div>
                  <Image
                    src={DownArrowIcon}
                    alt={"Down arrow icon"}
                    width={24}
                    height={24}
                    className={"w-5 h-5 sm:w-6 sm:h-6 shrink-0"}
                  />
                </div>
              </div>
            </div>
            <div className={"w-full lg:w-auto flex justify-center lg:block"}>
              <Image
                src={NegotiateImage}
                alt={"negotiate image"}
                width={1000}
                height={670}
                className={"w-full max-h-[850px]"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Negotiate;
