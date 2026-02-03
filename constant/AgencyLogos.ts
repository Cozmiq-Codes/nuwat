import { StaticImageData } from "next/image";

import Aecon from "@/public/hero/agency-logos/aecon.png";
import AirLiquid from "@/public/hero/agency-logos/air-liquid.png";
import Buttcon from "@/public/hero/agency-logos/buttcon.png";
import Electric from "@/public/hero/agency-logos/electric.png";
import Flour from "@/public/hero/agency-logos/flour.png";
import Jacobs from "@/public/hero/agency-logos/jacobs.png";
import Jempak from "@/public/hero/agency-logos/jempak.png";
import Marafiq from "@/public/hero/agency-logos/marafiq.png";
import Maxim from "@/public/hero/agency-logos/maxim.png";
import Sadara from "@/public/hero/agency-logos/sadara.png";

export type AgencyLogo = {
  id: string;
  name: string;
  src: StaticImageData;
  alt: string;
};

export const AgencyLogos: AgencyLogo[] = [
  { id: "aecon", name: "Aecon", src: Aecon, alt: "Aecon logo" },
  {
    id: "air-liquid",
    name: "Air Liquide",
    src: AirLiquid,
    alt: "Air Liquide logo",
  },
  { id: "buttcon", name: "Buttcon", src: Buttcon, alt: "Buttcon logo" },
  { id: "electric", name: "Electric", src: Electric, alt: "Electric logo" },
  { id: "flour", name: "Flour", src: Flour, alt: "Flour logo" },
  { id: "jacobs", name: "Jacobs", src: Jacobs, alt: "Jacobs logo" },
  { id: "jempak", name: "Jempak", src: Jempak, alt: "Jempak logo" },
  { id: "marafiq", name: "Marafiq", src: Marafiq, alt: "Marafiq logo" },
  { id: "maxim", name: "Maxim", src: Maxim, alt: "Maxim logo" },
  { id: "sadara", name: "Sadara", src: Sadara, alt: "Sadara logo" },
];
