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

            <div
              className="w-full min-h-[1000px] lg:min-h-[800px] bg-center bg-contain bg-no-repeat flex flex-col justify-center lg:justify-between gap-12 lg:gap-0"
              style={{
                backgroundImage: "url('/dominance/section-image.webp')",
              }}
            >
              {/* Parent Card Wrapper */}
              <div className="w-full flex flex-col items-center lg:flex-row justify-between gap-6">
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.brand.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.brand.description}
                  </p>
                </div>
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.scale.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.scale.description}
                  </p>
                </div>
              </div>

              {/* Parent Card Wrapper */}
              <div className="w-full flex flex-col items-center lg:flex-row justify-between gap-6">
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.digital.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.digital.description}
                  </p>
                </div>
                <div className="p-8 max-w-[425px] bg-[#FFFFFF14] backdrop-blur-md rounded-[18px] flex flex-col gap-6 border border-[#00D1FF] w-full">
                  <h3 className="text-[#F2F7FE] text-lg lg:text-[26px] font-bold leading-[37px] uppercase">
                    {content.cards.systemic.title}
                  </h3>
                  <p className="text-[#E7E7E7] text-[14px] lg:text-[16px] leading-[25px] font-normal">
                    {content.cards.systemic.description}
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
export default DominanceSection;
