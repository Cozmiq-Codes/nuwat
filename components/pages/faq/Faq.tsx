"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DownInactiveArrow = "/faq/down-inactive-arrow.svg";

interface FaqProps {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

const FaqItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: FaqProps["items"][0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      onClick={onClick}
      className={`relative overflow-hidden rounded-[18px] cursor-pointer transition-colors duration-300 ${
        isOpen
          ? "bg-[linear-gradient(226deg,rgba(0,209,255,0.12)_18.78%,rgba(81,162,255,0.12)_74.66%)]"
          : "bg-[#FFFFFF14]"
      }`}
    >
      {/* Circuit Border - Top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00D1FF] origin-left z-10"
      />

      <div className="p-8 flex flex-col gap-6">
        <div className="flex justify-between items-center z-20 relative">
          <h3 className="text-2xl font-semibold leading-7">{item.question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={DownInactiveArrow}
              alt="Toggle Arrow"
              width={36}
              height={36}
              className="w-9 h-9"
            />
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  height: "auto",
                  transition: { duration: 0.4, ease: "easeInOut" },
                },
                collapsed: {
                  height: 0,
                  transition: { duration: 0.4, ease: "easeInOut" },
                },
              }}
              className="overflow-hidden"
            >
              <div className="bg-[#FFFFFF29] h-0.5 mb-6" />
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }} // "Snappy" as requested, but timing to finish after border
                className="text-lg font-normal leading-7 max-w-182.5"
              >
                {item.answer}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Faq = ({ items }: FaqProps) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mt-5 px-5">
      <div className="max-w-225 mx-auto">
        <div className="mb-8">
          <div className="flex flex-col gap-8 w-full">
            {items.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
