"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface VisionProps {
  title: string;
  items: Array<{
    id: number;
    title: string;
    body: string;
    image: string;
  }>;
}

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Vision = ({ title, items }: VisionProps) => {
  return (
    <section
      className={
        "relative bg-[url('/about/section-bg.webp')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container relative z-50"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center w-full gap-12"}>
            <div className={"flex justify-center"}>
              <motion.h2
                variants={headlineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={"section-heading"}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"}
            >
              {items.map((vision, index) => (
                <motion.div
                  className={[
                    "bg-[#07070790] rounded-[18px] p-8 flex flex-col gap-12 col-span-1 border border-transparent",
                    index < 3 ? "lg:col-span-2" : "lg:col-span-3",
                  ].join(" ")}
                  key={vision.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    borderColor: "#2F80ED",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Image
                    src={vision.image}
                    alt={"our-vision"}
                    width={50}
                    height={50}
                    className={"w-12 h-12"}
                  />

                  <div className={"flex flex-col gap-3.5"}>
                    <h3 className={"text-[24px] font-bold leading-12"}>
                      {vision.title}
                    </h3>
                    <p
                      className={"text-white text-[16px] font-normal leading-6"}
                    >
                      {vision.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Vision;
