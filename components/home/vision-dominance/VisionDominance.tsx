import React from "react";
import Image from "next/image";

const CityImage = "/empowering/city.png";
const DriveImage = "/empowering/drive.png";
const GrowthImage = "/empowering/growth.png";
const OperationsImage = "/empowering/operations.png";
const BgGrad = "/empowering/bg-grad.png";

const VisionDominance = () => {
  return (
    <section className={"relative"}>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div
            className={
              "flex flex-col justify-center items-center w-full gap-10 lg:gap-[56px]"
            }
          >
            <h2
              className={
                "section-heading max-w-full text-3xl md:text-4xl lg:text-5xl"
              }
            >
                ENGINEERED BY VISION. <br/>
              <span className={"heading-span"}>
                DEFINED BY DOMINANCE.
              </span>
            </h2>

            <div className={"flex flex-col lg:flex-row gap-12 lg:gap-12"}>
              <div>
                <div
                  className={
                    "flex flex-col gap-10 lg:gap-0 lg:justify-between h-full"
                  }
                >
                  <div className={"flex gap-6 lg:gap-12"}>
                    <div
                      className={
                        "text-[#F2F7FE] text-3xl lg:text-[40px] font-bold leading-[32px]"
                      }
                    >
                      01
                    </div>
                    <div className={"flex flex-col gap-5"}>
                      <Image
                        src={DriveImage}
                        alt={"Growth"}
                        width={48}
                        height={48}
                      />
                      <div className={"flex flex-col gap-6"}>
                        <h3
                          className={
                            "text-[#F2F7FE] text-2xl lg:text-[28px] font-bold leading-[32px]"
                          }
                        >
                            MANDATING EXCELLENCE
                        </h3>
                        <p
                          className={
                            "max-w-[465px] text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px]"
                          }
                        >
                            "We partner with leadership teams to identify the exact levers that move the needle. Through disciplined strategy and surgical execution, we eliminate noise and command market direction".
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={"flex gap-6 lg:gap-12"}>
                    <div
                      className={
                        "text-[#F2F7FE] text-3xl lg:text-[40px] font-bold leading-[32px]"
                      }
                    >
                      02
                    </div>
                    <div className={"flex flex-col gap-5"}>
                      <Image
                        src={GrowthImage}
                        alt={"Growth"}
                        width={48}
                        height={48}
                      />
                      <div className={"flex flex-col gap-6"}>
                        <h3
                          className={
                            "text-[#F2F7FE] text-2xl lg:text-[28px] font-bold leading-[32px]"
                          }
                        >
                            ARCHITECTING UNASSAILABLE GROWTH
                        </h3>
                        <p
                          className={
                            "max-w-[465px] text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px]"
                          }
                        >
                          Growth is not tactics stacked on tactics. We design
                          systems that support sustainable expansion, aligned
                          teams, and long-term value creation. Everything we
                          touch is built to hold under pressure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={"flex gap-6 lg:gap-12"}>
                    <div
                      className={
                        "text-[#F2F7FE] text-3xl lg:text-[40px] font-bold leading-[32px]"
                      }
                    >
                      03
                    </div>
                    <div className={"flex flex-col gap-5"}>
                      <Image
                        src={OperationsImage}
                        alt={"Growth"}
                        width={48}
                        height={48}
                      />
                      <div className={"flex flex-col gap-6"}>
                        <h3
                          className={
                            "text-[#F2F7FE] text-2xl lg:text-[28px] font-bold leading-[32px]"
                          }
                        >
                            INDUSTRIAL RECONSTRUCTION
                        </h3>
                        <p
                          className={
                            "max-w-[465px] text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px]"
                          }
                        >
                          We don&apos;t optimize around broken structures. We
                          challenge assumptions, redesign processes, and help
                          organizations operate at a higher standard across
                          brand, customer experience, and internal decision
                          making.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={CityImage}
                  alt={"City Image"}
                  className={
                    "w-full lg:w-[650px] h-auto lg:h-full object-cover rounded-2xl"
                  }
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className={"hidden lg:block absolute bottom-0 left-0"}>
            <Image src={BgGrad} alt={"BgGrad"} width={1350} height={450} className={"w-[1050px] h-[1050px]"}/>
        </div>
    </section>
  );
};
export default VisionDominance;
