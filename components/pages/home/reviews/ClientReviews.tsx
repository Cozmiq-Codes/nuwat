"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const QuoteIcon = "/client-reviews/quote.svg";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface ClientReviewsProps {
  content: {
    title: string;
    items: Testimonial[];
  };
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ClientReviews = ({ content }: ClientReviewsProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 items based on previous data, but let's make it robust
  const imageIndex = Math.abs(page % content.items.length);
  const currentTestimonial = content.items[imageIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading text-center text-white"
          >
            {content.title}
          </motion.h2>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 relative">
            {/* Left Button - Desktop */}
            <button
              onClick={() => paginate(-1)}
              className="hidden lg:flex w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#334155] justify-center items-center text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer z-10"
              aria-label="Previous review"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Review Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative w-full h-[400px] lg:h-[450px] overflow-hidden flex justify-center items-center"
            >
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 80, damping: 20 },
                    opacity: { duration: 0.5 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }: PanInfo) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full h-full rounded-[24px] overflow-hidden p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-[url('/client-reviews/review-bg.webp')] bg-cover bg-center bg-no-repeat cursor-grab active:cursor-grabbing"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center w-full h-full justify-center"
                  >
                    {/* Quote Icon */}
                    <motion.div variants={itemVariants}>
                      <Image
                        src={QuoteIcon}
                        alt={"Quote Icon"}
                        width={80}
                        height={80}
                        className={"w-[80px] h-[80px] mb-6 lg:mb-8"}
                        draggable={false}
                      />
                    </motion.div>

                    {/* Review Text */}
                    <motion.p
                      variants={itemVariants}
                      className="text-white text-lg lg:text-[32px] font-medium leading-relaxed lg:leading-[43px] max-w-[700px] mb-8 lg:mb-12 font-bold select-none"
                    >
                      &quot;{currentTestimonial.quote}&quot;
                    </motion.p>

                    {/* Author Info */}
                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col items-center gap-1 select-none"
                    >
                      <div className="h-[1px] w-12 bg-white/40 mb-3"></div>
                      <p className="text-white text-sm lg:text-base font-medium">
                        {currentTestimonial.author},{" "}
                      </p>
                      <p className="text-white/80 text-xs lg:text-sm">
                        {currentTestimonial.company}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Button - Desktop */}
            <button
              onClick={() => paginate(1)}
              className="hidden lg:flex w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#334155] justify-center items-center text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer z-10"
              aria-label="Next review"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Navigation Buttons */}
            <div className="flex lg:hidden gap-6 mt-4 z-10">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-[#334155] flex justify-center items-center text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                aria-label="Previous review"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-[#334155] flex justify-center items-center text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                aria-label="Next review"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
