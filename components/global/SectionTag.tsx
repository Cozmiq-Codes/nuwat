import React from 'react'
import Image from "next/image";

const TagIcon = '/global/tag.png';

const SectionTag = ({title = 'Section Tag Title'}: {title: string}) => {
    return (
        <div className={"inline-flex bg-[#FFFFFF0A] rounded-[35px] border border-[#FFFFFF3D] justify-center items-center py-2.5 px-4"}>
            <div className={"flex gap-2"}>
                <Image src={TagIcon} alt="Section Title Image" width={100} height={100} className={"w-6 h-6"} />
                <h4>{title}</h4>
            </div>
        </div>
    )
}
export default SectionTag
