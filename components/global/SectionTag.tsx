import React from "react";
import Image from "next/image";

const TagIcon = "/global/tag.png";

const SectionTag = ({
  title = "Section Tag Title",
  icon = true,
}: {
  title: string;
  icon: boolean;
}) => {
  return (
    <div
      className={`inline-flex bg-[#FFFFFF0A] rounded-[35px] border border-[#FFFFFF3D] justify-center items-center ${icon ? "py-1.5 px-5" : "py-2.5 px-4"}`}
    >
      <div className={"flex gap-2"}>
        {icon && (
          <Image
            src={TagIcon}
            alt="Section Title Image"
            width={100}
            height={100}
            className={"w-6 h-6"}
          />
        )}
        <h4 className={"capitalize"}>{title}</h4>
      </div>
    </div>
  );
};
export default SectionTag;
