import React from "react";
import Image from "next/image";

const role = "/services/role/role.png";

const Role = () => {
  return (
    <section>
      <div className="main-container">
        <div className="section-wrapper">
          <div className="flex flex-col justify-between gap-6 lg:gap-12">
            <h2 className="uppercase text-[14px] md:text-[16px] font-normal leading-[1.5]">
              our role
            </h2>
            <Image
              src={role}
              alt="role image"
              className="w-[280px] md:w-[360px] h-auto"
              width={500}
              height={500}
            />
          </div>

          <div className="max-w-[760px] flex flex-col gap-6 lg:gap-8">
            <p className="text-[#E7E7E7] text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] lg:leading-[42px]">
              <span className="heading-span">NUWAT operates where clarity</span>{" "}
              is the only currency—we intervene at the highest levels of
              leadership, whether a venture is wholly{" "}
              <span className="heading-span">
                ours or under the mandate of another.
              </span>
            </p>
            <p className="text-[#FEFFFFCC] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed lg:leading-[30px]">
              We don&apos;t offer &quot;solutions&quot; for the masses. We serve
              elite entities built for permanence: organizations facing pivotal
              crossroads, high-stakes ventures that refuse to compromise, and
              sovereign leaders who demand the rigor required to own their
              market. We are the architect for those who play the long game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Role;
