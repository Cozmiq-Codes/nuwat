import PrimaryButton from "../PrimaryButton";
import SecondaryBtn from "../SecondaryBtn";

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
                <PrimaryButton title={common.buttons.applyNow} />
                <SecondaryBtn title={common.buttons.learnMore} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
