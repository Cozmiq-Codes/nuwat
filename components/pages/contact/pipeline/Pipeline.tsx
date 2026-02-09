import React from "react";
import Image from "next/image";

const cr = "/contact/cr.svg";
const sb = "/contact/sb.svg";
const md = "/contact/md.svg";

interface PipelineProps {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

const Pipeline = ({ title, subtitle, items }: PipelineProps) => {
  const icons: Record<string, string> = {
    review: cr,
    briefing: sb,
    mandate: md,
  };

  return (
    <section
      className={
        "bg-[url('/contact/pipeline.webp')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center gap-12 w-full"}>
            <div className={"flex flex-col gap-3"}>
              <h2 className={"section-heading"}>{title}</h2>
              <p
                className={
                  "text-[16px] font-normal leading-7 max-w-162.5 text-center"
                }
              >
                {subtitle}
              </p>
            </div>

            <div
              className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className={
                    "p-6 rounded-[18px] bg-[#FFFFFF14] flex flex-col gap-12"
                  }
                >
                  <Image
                    src={icons[item.id] || cr}
                    alt={item.title}
                    width={32}
                    height={32}
                    className={"w-12 h-12"}
                  />
                  <div className={"flex flex-col gap-3"}>
                    <h3
                      className={
                        "text-[#F2F7FE] text-[24px] font-bold leading-7"
                      }
                    >
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
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

export default Pipeline;
