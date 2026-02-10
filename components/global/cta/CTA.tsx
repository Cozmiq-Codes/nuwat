import GradientButton from "@/components/global/GradientButton";

interface CTAProps {
  content: {
    title: string;
    description: string;
  };
  common: {
    buttons: {
      applyNow: string;
      learnMore: string;
    };
  };
}

const CTA = ({ content, common }: CTAProps) => {
  return (
    <section>
      <div className="main-container">
        <div>
          <div className="cta_content_wrap">
            <div className="flex flex-col items-center gap-6">
              <h2
                className="text-4xl md:text-5xl font-bold text-center text-white"
                dangerouslySetInnerHTML={{ __html: content.title }}
              />

              <p className="text-gray-400 text-center max-w-2xl text-lg">
                {content.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <GradientButton className="min-w-[200px]">
                  {common.buttons.applyNow}
                </GradientButton>

                <GradientButton variant="secondary" className="min-w-[200px]">
                  {common.buttons.learnMore}
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
