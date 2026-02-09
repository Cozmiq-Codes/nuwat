import React from "react";
import Image from "next/image";

interface NuwatCodeProps {
  title: string;
  items: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
}

const NuwatCode = ({ title, items }: NuwatCodeProps) => {
  return (
    <section
      className={
        "relative bg-[url('/about/nuwat-code/bg.svg')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center w-full gap-12"}>
            <div>
              <h2 className={"section-heading"}>{title}</h2>
            </div>

            <div
              className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}
            >
              {items.map((principle) => (
                <div
                  className={"code-card-bg flex flex-col gap-8 rounded-2xl p-6"}
                  key={principle.id}
                >
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    className={"w-[48px] h-[48px]"}
                    width={48}
                    height={48}
                  />

                  <div className={"flex flex-col gap-[14px]"}>
                    <h3
                      className={
                        "text-white text-[24px] font-bold leading-[40px]"
                      }
                    >
                      {principle.title}
                    </h3>
                    <p
                      className={"text-white text-[16px] font-normal leading-6"}
                    >
                      {principle.description}
                    </p>
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
export default NuwatCode;
