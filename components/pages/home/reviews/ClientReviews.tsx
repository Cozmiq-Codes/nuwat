"use client";
import React, { useState } from "react";
import Image from "next/image";

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

const ClientReviews = ({ content }: ClientReviewsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.items.length - 1 : prevIndex - 1,
    );
  };

  const currentTestimonial = content.items[currentIndex];

  return (
    <section className="py-20 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          <h2 className="section-heading text-center text-white">
            {content.title}
          </h2>

          <div className="w-full flex justify-center items-center gap-4 lg:gap-12">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#334155] flex justify-center items-center text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer z-10"
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

            {/* Review Card */}
            <div className="relative w-full h-[400px] lg:h-[450px] rounded-[24px] overflow-hidden p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-[url('/client-reviews/review-bg.webp')] bg-cover bg-center bg-no-repeat transition-all duration-300">
              {/* Quote Icon */}
              <Image
                src={QuoteIcon}
                alt={"Quote Icon"}
                width={80}
                height={80}
                className={"w-[80px] h-[80px]"}
              />

              {/* Review Text */}
              <p
                key={`quote-${currentIndex}`}
                className="text-white text-lg lg:text-[32px] font-medium leading-relaxed lg:leading-[43px] max-w-[700px] mb-8 lg:mb-12 font-bold"
              >
                &quot;{currentTestimonial.quote}&quot;
              </p>

              {/* Author Info */}
              <div
                key={`author-${currentIndex}`}
                className="flex flex-col items-center gap-1"
              >
                <div className="h-[1px] w-12 bg-white/40 mb-3"></div>
                <p className="text-white text-sm lg:text-base font-medium">
                  {currentTestimonial.author},{" "}
                </p>
                <p className="text-white/80 text-xs lg:text-sm">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#334155] flex justify-center items-center text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer z-10"
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
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
