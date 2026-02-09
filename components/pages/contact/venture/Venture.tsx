import React from "react";

interface VentureProps {
  content: {
    title: string;
    description: string;
    highlight: string;
  };
}

const Venture = ({ content }: VentureProps) => {
  return (
    <section>
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div
            className={
              "flex flex-col xl:flex-row justify-between w-full gap-8 md:gap-0"
            }
          >
            <div className={"flex flex-col justify-between w-full md:w-1/2"}>
              <h3
                className={
                  "text-[16px] font-medium leading-normal heading-span"
                }
              >
                {content.title}
              </h3>
              <p
                className={
                  "text-[#E7E7E7] text-[16px] font-medium leading-7 tracking-[0.07] max-w-[320px]"
                }
              >
                {content.description}
              </p>
            </div>

            <div className={"max-w-[750px]"}>
              <p
                className={"text-[#E7E7E7] text-[32px] font-bold leading-10.5"}
                dangerouslySetInnerHTML={{ __html: content.highlight }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venture;
