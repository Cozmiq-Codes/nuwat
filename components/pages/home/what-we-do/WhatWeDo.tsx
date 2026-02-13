"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import PrimaryButton from "@/components/global/PrimaryButton";

interface WhatWeDoProps {
  content: {
    title: string;
    heading: string;
  };
  aboutNuwat: string;
}

const blurFadeVariant = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const, // Power3.out
      delay,
    },
  }),
};

const WhatWeDo = ({ content, aboutNuwat }: WhatWeDoProps) => {
  return (
    <section className={"what_we_do"}>
      <div className={"main-container"}>
        <motion.div
          className={"section-wrapper"}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={"what_we_do_left"}>
            <motion.h2
              className={"wwdl_title"}
              variants={blurFadeVariant}
              custom={0}
            >
              {content.title}
            </motion.h2>
            <motion.div
              className="what_we_do_img"
              variants={blurFadeVariant}
              custom={0}
            >
              <Image
                src="/layout/what-we-do/building.webp"
                alt="Building"
                width={550}
                height={350}
              />
            </motion.div>
          </div>
          <div className={"what_we_do_right"}>
            <motion.h3
              className="wwdr_heading"
              dangerouslySetInnerHTML={{ __html: content.heading }}
              variants={blurFadeVariant}
              custom={0.15}
            />
            <motion.div
              className={"what_we_do_btn"}
              variants={blurFadeVariant}
              custom={0.3}
            >
              <PrimaryButton title={aboutNuwat} link={"/about"} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default WhatWeDo;
