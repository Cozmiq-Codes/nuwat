import React from "react";
import Image from "next/image";
import SectionTag from "@/components/global/SectionTag";

const TopGradient = '/hero/hero-gradient-top.svg';
const BottomGradient = '/hero/hero-gradient-bottom.svg';

const Hero = () => {
  return (
      <section className={"h-screen relative"}>
          <div className={"main-container h-full"}>
              <div className={"h-full flex items-center justify-center gap-4 flex-col"}>
                    <SectionTag title={'Data-Driven Decisions'} />
                    <div className={""}>
                        <div className={"flex flex-col gap-[18px] justify-center items-center"}>
                            <h1 className={'text-[#F2F7FE] text-[56px] text-center max-w-[70%] leading-[60px] capitalize'}>Creating business transformations <span className={"heading-span"}>most companies never survive.</span></h1>
                            <p className={"max-w-[605px] text-center"}>We build customer and brand experiences through a proven framework for businesses that refuse to stay ordinary.</p>
                        </div>
                        <div>
                            <button>Apply Now</button>
                            <button>Explore our Approach</button>
                        </div>
                    </div>
              </div>
          </div>

          {/*<div className={"absolute top-[-20%] left-[-28%]"}>*/}
          {/*    <Image src={TopGradient} alt={"Hero Top Gradient"} width={1650} height={785}/>*/}
          {/*</div>*/}
          {/*<div className={"absolute bottom-[-50%] right-[-28%]"}>*/}
          {/*    <Image src={BottomGradient} alt={"Hero Top Gradient"} width={1650} height={785}/>*/}
          {/*</div>*/}
      </section>
  );
};
export default Hero;
