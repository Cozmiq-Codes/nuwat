import React from "react";

const Venture = () => {
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
                Not Every Venture Is A Fit.
              </h3>
              <p
                className={
                  "text-[#E7E7E7] text-[16px] font-medium leading-7 tracking-[0.07] max-w-[320px]"
                }
              >
                If you are seeking surface-level advice, quick fixes, or
                templated solutions, this is not the right place. NUWAT exists
                for sovereign leaders who require a surgical level of
                intervention.
              </p>
            </div>

            <div className={"max-w-[750px]"}>
              <p
                className={"text-[#E7E7E7] text-[32px] font-bold leading-10.5"}
              >
                <span className={"heading-span"}>
                  NUWAT operates with a limited number of partners
                </span>{" "}
                at any given time. Our mandates require direct access, total
                commitment, and a ruthless willingness to be challenged. We are
                deliberate about{" "}
                <span className={"heading-span"}>
                  who we work with and how we engage.
                </span>
                We don&apos;t take &quot;clients&quot;; we select partners ready
                to own their market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venture;
