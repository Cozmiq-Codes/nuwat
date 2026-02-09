import React from "react";
import Image from "next/image";

const DownInactiveArrow = "/faq/down-inactive-arrow.svg";
const UpActiveArrow = "/faq/up-active-arrow.svg";

interface FaqProps {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

const Faq = ({ items }: FaqProps) => {
  return (
    <section className={"mt-5"}>
      <div className={"max-w-225 mx-auto"}>
        <div className={"mb-8"}>
          <div className={"flex flex-col gap-8 w-full"}>
            {items.map((item, index) => (
              <div key={item.id}>
                {/* 
                  To match the original static design which had one opened and one closed example,
                  we'll render the first as "opened" and others as "closed".
                  Note: A real interactive FAQ would use state here.
                */}
                {index === 0 ? (
                  <div
                    className={
                      "bg-[linear-gradient(226deg,rgba(0,209,255,0.12)_18.78%,rgba(81,162,255,0.12)_74.66%)] rounded-[18px] p-8 flex flex-col gap-6"
                    }
                  >
                    <div className={"flex justify-between items-center"}>
                      <h3 className={"text-2xl font-semibold leading-7"}>
                        {item.question}
                      </h3>
                      <Image
                        src={UpActiveArrow}
                        alt={"Up Inactive Arrow"}
                        width={36}
                        height={36}
                        className={"w-9 h-9"}
                      />
                    </div>

                    <div className={"bg-[#FFFFFF29] h-0.5"} />

                    <p className={"text-lg font-normal leading-7 max-w-182.5"}>
                      {item.answer}
                    </p>
                  </div>
                ) : (
                  <div className={"bg-[#FFFFFF14] rounded-[18px] p-8"}>
                    <div className={"flex justify-between items-center"}>
                      <h3 className={"text-2xl font-semibold leading-7"}>
                        {item.question}
                      </h3>
                      <Image
                        src={DownInactiveArrow}
                        alt={"Down Inactive Arrow"}
                        width={36}
                        height={36}
                        className={"w-9 h-9"}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
