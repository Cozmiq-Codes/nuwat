import React from "react";
import Image from "next/image";

const cr = "/contact/cr.svg";
const sb = "/contact/sb.svg";
const md = "/contact/md.svg";

const Pipeline = () => {
  return (
    <section
      className={
        "bg-[url('/contact/pipeline.webp')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col items-center gap-12 w-full"}>
            <div className={"flex flex-col gap-3"}>
              <h2 className={"section-heading"}>The Intake Pipeline</h2>
              <p
                className={
                  "text-[16px] font-normal leading-7 max-w-162.5 text-center"
                }
              >
                Submissions are audited for strategic alignment. We do not
                engage unless a definitive path to market dominance is
                identified.
              </p>
            </div>

            <div
              className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}
            >
              <div
                className={
                  "p-6 rounded-[18px] bg-[#FFFFFF14] flex flex-col gap-12"
                }
              >
                <Image
                  src={cr}
                  alt={"Critical Review"}
                  width={32}
                  height={32}
                  className={"w-12 h-12"}
                />
                <div className={"flex flex-col gap-3"}>
                  <h3
                    className={"text-[#F2F7FE] text-[24px] font-bold leading-7"}
                  >
                    Critical Review
                  </h3>
                  <p>
                    We don't "evaluate" submissions; we audit them for
                    alignment. We identify if your venture possesses the scale
                    and the leadership appetite required for a NUWAT
                    intervention. If there isn't a clear path to dominance, we
                    won't initiate.
                  </p>
                </div>
              </div>
              <div
                className={
                  "p-6 rounded-[18px] bg-[#FFFFFF14] flex flex-col gap-12"
                }
              >
                <Image
                  src={sb}
                  alt={"Strategic Briefing"}
                  width={32}
                  height={32}
                  className={"w-12 h-12"}
                />
                <div className={"flex flex-col gap-3"}>
                  <h3
                    className={"text-[#F2F7FE] text-[24px] font-bold leading-7"}
                  >
                    Strategic Briefing
                  </h3>
                  <p>
                    If there is potential alignment, we initiate a high-level
                    briefing. This is a focused conversation to dissect the
                    context, the bottlenecks, and the expectations on both
                    sides. We don't do "chats"—we do briefings.
                  </p>
                </div>
              </div>
              <div
                className={
                  "p-6 rounded-[18px] bg-[#FFFFFF14] flex flex-col gap-12"
                }
              >
                <Image
                  src={md}
                  alt={"Mandate Decision"}
                  width={32}
                  height={32}
                  className={"w-12 h-12"}
                />
                <div className={"flex flex-col gap-3"}>
                  <h3
                    className={"text-[#F2F7FE] text-[24px] font-bold leading-7"}
                  >
                    Mandate Decision
                  </h3>
                  <p>
                    We move forward only when the path to a definitive outcome
                    is clear. This ensures that every partnership we enter is
                    engineered for success from day one. You either get a
                    mandate for victory or a clear "no."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
