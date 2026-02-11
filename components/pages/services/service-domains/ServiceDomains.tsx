import ServiceCard from "./ServiceCard";

interface ServiceDomainsProps {
  title: string;
  items: Array<{
    id: string;
    kicker: string;
    title: string;
    description: string;
    image: string;
    buttons: Array<{ label: string }>;
  }>;
}

const ServiceDomains = ({ title, items }: ServiceDomainsProps) => {
  return (
    <section
      className={
        "bg-[url('/about/section-bg-two.webp')] bg-cover bg-center bg-no-repeat"
      }
    >
      <div className={"main-container"}>
        <div className={"section-wrapper"}>
          <div className={"flex flex-col gap-12 w-full"}>
            <div>
              <h2
                className={"section-heading text-left!"}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <div className={"flex flex-col gap-6"}>
              {items.map((service, i) => (
                <ServiceCard key={service.id} {...service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceDomains;
