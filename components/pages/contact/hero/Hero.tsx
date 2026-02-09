import React from "react";

interface ContactHeroProps {
  content: {
    title: string;
    description: string;
  };
}

const ContactHero = ({ content }: ContactHeroProps) => {
  return (
    <section
      className={
        "pt-32 pb-5 bg-[url('/global/bg-grad.webp')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"bg-[#FFFFFF03] rounded-2xl mx-5 my-5 backdrop-blur-2xl"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center gap-5 w-full"}>
            <div className={"flex flex-col items-center gap-5"}>
              <h1
                className="
                text-[#F2F7FE] font-semibold capitalize
                text-5xl lg:text-[56px]
                text-center
                leading-[1.1]
                lg:leading-16.25
                max-w-[90%] md:max-w-2xl lg:max-w-140
                tracking-[-0.02em]
              "
              >
                {content.title}
              </h1>
              <p
                className="
                text-[#E7E7E7CC]
                text-[clamp(1rem,1.35vw,1.125rem)]
                leading-[1.65]
                max-w-166.25
                text-center
              "
              >
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactHero;
