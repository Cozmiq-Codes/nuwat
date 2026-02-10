import React from "react";
import Image from "next/image";

const CityImage = "/empowering/city.webp";
const DriveImage = "/empowering/drive.webp";
const GrowthImage = "/empowering/growth.webp";
const OperationsImage = "/empowering/operations.webp";
const BgGrad = "/empowering/bg-grad.webp";

interface VisionDominanceProps {
  content: {
    title: string;
    items: {
      "01": { title: string; description: string };
      "02": { title: string; description: string };
      "03": { title: string; description: string };
    };
  };
}

const VisionDominance = ({ content }: VisionDominanceProps) => {
  return (
    <section className={"relative"}>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div
            className={
              "flex flex-col justify-center items-center w-full gap-10 lg:gap-[56px]"
            }
          >
            <div>
              <h2
                className={
                  "section-heading max-w-full text-3xl md:text-4xl lg:text-5xl"
                }
                dangerouslySetInnerHTML={{ __html: content.title }}
              />
            </div>

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
                          {content.items["01"].title}
                        </h3>
                        <p
                          className={
                            "max-w-[465px] text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px]"
                          }
                        >
                          {content.items["01"].description}
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
                          {content.items["02"].title}
                        </h3>
                        <p
                          className={
                            "max-w-[465px] text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px]"
                          }
                        >
                          {content.items["02"].description}
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
                          {content.items["03"].title}
                        </h3>
                        <p
                          className={
                            "max-w-[465px] text-[#E7E7E7] text-[16px] font-normal leading-[28px] tracking-[0.07px]"
                          }
                        >
                          {content.items["03"].description}
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
        <Image
          src={BgGrad}
          alt={"BgGrad"}
          width={1350}
          height={450}
          className={"w-[1050px] h-[1050px]"}
        />
      </div>
    </section>
  );
};
export default VisionDominance;
