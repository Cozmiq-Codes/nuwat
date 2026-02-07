import React from "react";
import Image from "next/image";
import { Services } from "@/constant/Services";

const ServiceDomains = () => {
  return (
    <section className={"bg-[url('/about/section-bg-two.png')] bg-cover bg-center bg-no-repeat"}>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col gap-12 w-full"}>
            <div>
              <h2 className={"section-heading text-left!"}>
                Service Domains
                <br /> The Mechanics of Dominance
              </h2>
            </div>
            <div className={"flex flex-col gap-6"}>
              {Services.map((service) => (
                <div
                  key={service.id}
                  className={"bg-[#FFFFFF14] py-6 px-8 rounded-3xl"}
                >
                  <div className={"flex flex-col lg:flex-row gap-8 lg:gap-12"}>
                    <div className={"w-full lg:max-w-55"}>
                      <h4
                        className={"heading-span text-lg font-medium leading-6"}
                      >
                        {service.kicker}
                      </h4>
                    </div>
                    <div
                      className={
                        "relative w-full lg:w-87.5 h-62.5 md:h-87.5 lg:h-75"
                      }
                    >
                      <Image
                        src={service.image || ""}
                        alt={service.title}
                        fill
                        className={"object-cover rounded-xl"}
                      />
                    </div>
                    <div
                      className={
                        "max-w-full lg:max-w-150 flex flex-col justify-end gap-5"
                      }
                    >
                      <h3
                        className={
                          "text-white text-[28px] md:text-[32px] font-bold leading-8"
                        }
                      >
                        {service.title}
                      </h3>
                      <p
                        className={
                          "text-white text-[16px] font-normal leading-6.5"
                        }
                      >
                        {service.description}
                      </p>
                      <div className={"flex flex-wrap gap-4"}>
                        {service.buttons.map((button, idx) => (
                          <button
                            key={idx}
                            className={
                              "py-3 px-6 border border-[#00D1FF] rounded-[60px] text-white hover:bg-[#00D1FF20] transition-colors whitespace-nowrap"
                            }
                          >
                            {button.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceDomains;
