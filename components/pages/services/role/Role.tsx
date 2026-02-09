import React from "react";
import Image from "next/image";

const role = "/services/role/role.webp";

interface RoleProps {
  content: {
    title: string;
    description1: string;
    description2: string;
  };
}

const Role = ({ content }: RoleProps) => {
  return (
    <section>
      <div className="main-container">
        <div className="section-wrapper">
          <div className="flex flex-col justify-between gap-6 lg:gap-12">
            <h2 className="uppercase text-[14px] md:text-[16px] font-normal leading-[1.5]">
              {content.title}
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
            <p
              className="text-[#E7E7E7] text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] lg:leading-[42px]"
              dangerouslySetInnerHTML={{ __html: content.description1 }}
            />
            <p className="text-[#FEFFFFCC] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed lg:leading-[30px]">
              {content.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Role;
