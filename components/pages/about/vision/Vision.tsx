import React from "react";
import Image from "next/image";
import { AboutVision } from "@/constant/About";

const BgGradImage = "/about/vision/bg-grad-one.webp";
const BgGradImageTwo = "/about/vision/bg-grad-two.webp";

const Vision = () => {
  return (
    <section className={"relative"}>
      <div className={"main-container relative z-[50]"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center w-full gap-12"}>
            <div className={"flex justify-center"}>
              <h2 className={"section-heading"}>
                Driven By Vision. <br />
                <span className={"heading-span"}>Defined By Dominance.</span>
              </h2>
            </div>
            <div
              className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"}
            >
              {AboutVision.map((vision, index) => (
                <div
                  className={[
                    "bg-[#07070790] rounded-[18px] p-8 flex flex-col gap-12 col-span-1",
                    index < 3 ? "lg:col-span-2" : "lg:col-span-3",
                  ].join(" ")}
                  key={vision.id}
                >
                  <Image
                    src={vision.image}
                    alt={"our-vision"}
                    width={50}
                    height={50}
                    className={"w-[48px] h-[48px]"}
                  />

                  <div className={"flex flex-col gap-[14px]"}>
                    <h3 className={"text-[24px] font-bold leading-12"}>
                      {vision.title}
                    </h3>
                    <p
                      className={"text-white text-[16px] font-normal leading-6"}
                    >
                      {vision.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={"hidden lg:block absolute -top-[150px] right-0 z-[20]"}>
        <Image
          src={BgGradImage}
          alt={"bgGradImage"}
          width={1000}
          height={1000}
          className={"w-[850px] h-full"}
        />
      </div>
      <div className={"hidden lg:block absolute top-[150px] left-0 z-[20]"}>
        <Image
          src={BgGradImageTwo}
          alt={"bgGradImage"}
          width={1000}
          height={1000}
          className={"w-[600px] h-full"}
        />
      </div>
    </section>
  );
};
export default Vision;
