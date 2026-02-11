"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface DominanceProps {
  content: {
    title: string;
    cards: {
      brand: { title: string; description: string };
      scale: { title: string; description: string };
      digital: { title: string; description: string };
      systemic: { title: string; description: string };
    };
  };
}

const DominanceSection = ({ content }: DominanceProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Phase 1: Core (Center Image)
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1] as const, // slower pop
      },
    },
  };

  // Phase 3: Pulse (Breathing)
  // We'll trigger this after the entrance animation completes
  const pulseVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
        repeatType: "mirror" as const,
        delay: 0.5, // small delay before pulse starts
      },
    },
  };

  // Phase 2: Expansion (Cards)
  // Staggered delays: 0.4, 0.7, 1.0, 1.3
  const cardVariants = (x: number, y: number, delay: number) => ({
    hidden: {
      opacity: 0,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut" as const,
        delay: delay,
      },
    },
  });

  return (
    <section className={"min-h-screen overflow-hidden py-[120px]"}>
      <div className={"main-container"}>
        <div>
          <div className="flex flex-col justify-center gap-12 lg:gap-16 items-center">
            {/* Heading */}
            <h2
              className="section-heading text-center uppercase!"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />

            {/* Animation Container */}
            <div
              ref={containerRef}
              className="relative w-full min-h-[1000px] lg:min-h-[800px] flex flex-col justify-center lg:justify-between gap-12 lg:gap-0"
            >
              {/* Center Image (Absolute, behind content) */}
              <motion.div
                className="absolute inset-0 bg-center bg-contain bg-no-repeat z-0"
                style={{
                  backgroundImage: "url('/dominance/section-image.webp')",
                }}
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                onAnimationComplete={(definition) => {
                  if (definition === "visible") {
                    controls.start("pulse");
                  }
                }}
              >
                {/* Separate animation layer for the pulse to avoid conflict? 
                      Actually, simpler to animate the scale on the same element 
                      sequentially. 'controls' handles the switch. 
                      However, we need to make sure the 'visible' state doesn't overwrite 'pulse'.
                      We can use a child element for the image if needed, or just switch variants.
                      
                      Let's refine: 
                      'controls.start("visible")' completes.
                      Then 'controls.start("pulse")'.
                      
                      Wait, if we use 'variants={imageVariants}', calling 'pulse' 
                      might look for 'pulse' in 'imageVariants'. 
                      So we combine them.
                   */}
                <motion.div
                  className="w-full h-full"
                  variants={pulseVariants}
                  animate={isInView ? "pulse" : undefined} // This might start immediately.
                  // Better approach:
                  // The parent triggers entry.
                  // Step 2 triggers pulse.
                  // Actually, 'controls' controls the parent variants.
                />
              </motion.div>

              {/* Re-implementing Image Logic properly: 
                  The generic 'animate={controls}' on the div will try to run variants.
                  Let's merge variants.
               */}
              <motion.div
                className="absolute inset-0 bg-center bg-contain bg-no-repeat z-0"
                style={{
                  backgroundImage: "url('/dominance/section-image.webp')",
                }}
                initial="hidden"
                animate={controls} // "visible" then "pulse"
                variants={{
                  ...imageVariants,
                  ...pulseVariants,
                }}
              />

              {/* Top Row */}
              <div className="w-full flex flex-col items-center lg:flex-row justify-between gap-6 z-10 relative">
                {/* Top-Left Card */}
                <motion.div
                  className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full"
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants(20, 20, 0.4)} // Top-Left starts closer to center (right-down)
                >
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.brand.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.brand.description}
                  </p>
                </motion.div>

                {/* Top-Right Card */}
                <motion.div
                  className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full"
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants(-20, 20, 0.7)} // Top-Right starts closer to center (left-down)
                >
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.scale.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.scale.description}
                  </p>
                </motion.div>
              </div>

              {/* Bottom Row */}
              <div className="w-full flex flex-col items-center lg:flex-row justify-between gap-6 z-10 relative">
                {/* Bottom-Left Card */}
                <motion.div
                  className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full"
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants(20, -20, 1.0)} // Bottom-Left starts closer to center (right-up)
                >
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.digital.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.digital.description}
                  </p>
                </motion.div>

                {/* Bottom-Right Card */}
                <motion.div
                  className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full"
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants(-20, -20, 1.3)} // Bottom-Right starts closer to center (left-up)
                >
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.systemic.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.systemic.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DominanceSection;
