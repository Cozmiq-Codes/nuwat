"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionImage = "/services/high-engage/section-img.webp";

interface HighEngageProps {
  title: string;
  description: string;
  items: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const HighEngage = ({ title, description, items }: HighEngageProps) => {
  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="main-container">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left column */}
            <div className="flex flex-col gap-8 lg:gap-10 lg:justify-between">
              <div className="max-w-[620px] flex flex-col gap-3 sm:gap-4">
                <h2 className="section-heading !text-left">{title}</h2>

                <p className="text-[14px] sm:text-[16px] font-normal leading-6 sm:leading-7 max-w-[480px] text-white/80">
                  {description}
                </p>
              </div>

              <div className="w-full max-w-[620px] overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ scale: 1.0 }}
                  whileInView={{ scale: 1.15 }}
                  transition={{ duration: 10, ease: "linear" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "bottom center" }}
                  className="w-full h-auto"
                >
                  <Image
                    src={SectionImage}
                    alt="Section Image"
                    width={620}
                    height={300}
                    className="w-full h-auto object-cover"
                    sizes="(min-width: 1024px) 620px, (min-width: 640px) 80vw, 100vw"
                    priority={false}
                  />
                </motion.div>
              </div>
            </div>

            {/* Right column */}
            <motion.div
              className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }} // Trigger earlier than bottom of screen
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {items.map((service, index) => (
                <motion.div
                  key={service?.title ?? index}
                  className="bg-white/[0.06] p-4 sm:p-5 lg:p-6 rounded-2xl"
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                >
                  <div className="flex gap-4 sm:gap-6">
                    <motion.div
                      className="shrink-0"
                      variants={{
                        hidden: { scale: 0.5 },
                        visible: {
                          scale: [0.5, 1.2, 1.0],
                          transition: {
                            duration: 0.4,
                            times: [0, 0.6, 1],
                          },
                        },
                      }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-10 h-10 sm:w-12 sm:h-12"
                        sizes="48px"
                      />
                    </motion.div>

                    <div className="flex flex-col gap-2 sm:gap-3">
                      <h3 className="text-white text-lg sm:text-xl font-medium leading-6 sm:leading-7">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-[16px] font-normal leading-6 sm:leading-7">
                        {service.description}
                      </p>
                    </div>
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

export default HighEngage;
