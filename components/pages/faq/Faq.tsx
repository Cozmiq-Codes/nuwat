import React from "react";
import Image from "next/image";

const DownInactiveArrow = "/faq/down-inactive-arrow.svg";
const UpActiveArrow = "/faq/up-active-arrow.svg";

const Faq = () => {
  return (
    <section>
      <div className={"max-w-225 mx-auto"}>
        <div className={"mb-8"}>
          <div className={"flex flex-col gap-8 w-full"}>
            {/* Opened FAQ */}
            <div
              className={
                "bg-[linear-gradient(226deg,rgba(0,209,255,0.12)_18.78%,rgba(81,162,255,0.12)_74.66%)] rounded-[18px] p-8 flex flex-col gap-6"
              }
            >
              <div className={"flex justify-between items-center"}>
                <h3 className={"text-2xl font-semibold leading-7"}>
                  Who is Nuwat actually for?
                </h3>
                <Image
                  src={UpActiveArrow}
                  alt={"Up Inactive Arrow"}
                  width={36}
                  height={36}
                  className={"w-9 h-9"}
                />
              </div>

              <div className={"bg-[#FFFFFF29] h-0.5"} />

              <p className={"text-lg font-normal leading-7 max-w-182.5"}>
                NUWAT is reserved for founders and sovereign leaders who have
                outgrown conventional &quote;consulting&quote;. We engage with
                those ready to be challenged, held to a ruthless standard of
                accountability, and pushed beyond the safety of comfortable
                solutions. If you are seeking superficial validation or
                surface-level &quote;fixes,&quote; NUWAT is not the fit.
              </p>
            </div>

            {/*  Closed FAQ  */}
            <div className={"bg-[#FFFFFF14] rounded-[18px] p-8"}>
              <div className={"flex justify-between items-center"}>
                <h3 className={"text-2xl font-semibold leading-7"}>
                  Who is Nuwat actually for?
                </h3>
                <Image
                  src={DownInactiveArrow}
                  alt={"Down Inactive Arrow"}
                  width={36}
                  height={36}
                  className={"w-9 h-9"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
