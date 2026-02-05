const con = '/about/nuwat-code/con-nuwat.svg';
const ua = '/about/nuwat-code/ua.svg';
const pie = '/about/nuwat-code/pie.svg';
const time = '/about/nuwat-code/time.svg';
const sa = '/about/nuwat-code/sa.svg';
const boe = '/about/nuwat-code/boe.svg';

export type ContentSection = {
  id: string;
  title: string;
  body: string;
  image: string;
};

export type PrincipleId =
    | "clarity"
    | "accountability"
    | "precision"
    | "long_term"
    | "alignment"
    | "excellence";

export type Principle = {
    id: PrincipleId;
    title: string;
    description: string;
    image: string;
};


export const AboutVision: ContentSection[] = [
  {
    id: "vision",
    title: "Our Vision",
    body: 'Our Vision NUWAT does not just "elevate" standards; we dictate them. We partner exclusively with elite leadership teams facing extreme complexity to engineer precise, durable architectures built for total market advantage. If the stakes aren’t high, we aren’t in the room.',
    image: "/about/vision/our-vision.svg",
  },
  {
    id: "differentiation",
    title: "What Sets Us Apart",
    body: "NUWAT is defined not by services, but by depth of engagement. We work closely with leadership teams to challenge assumptions, strengthen execution, and drive outcomes that hold—until decisions stick and performance improves.",
    image: "/about/vision/wsua.svg",
  },
  {
    id: "mission",
    title: "Mission Statement",
    body: "NUWAT ensures performance where failure is not an option. We bring clarity and disciplined execution to the world’s most pressurized environments, turning high-level strategy into a permanent state of durable performance. We are the partner for those who intend to lead their industry, not just participate in it.",
    image: "/about/vision/mission.svg",
  },
  {
    id: "growth",
    title: "Our Growth",
    body: "Our expansion has been calculated and deliberate, moving from the rigid markets of North America into the sovereign economic core of Bahrain and the GCC. We maintain a portfolio of limited, high-impact engagements where trust is earned through results that others simply cannot replicate.",
    image: "/about/vision/our-growth.svg",
  },
  {
    id: "markets",
    title: "Markets We Serve",
    body: "NUWAT aligns with organizations that operate at a global scale within high-pressure industrial and energy sectors. We serve leadership teams who are no longer interested in incremental growth, but are committed to building the strongest, most resilient operations in their region.",
    image: "/about/vision/mws.svg",
  },
];

export const AboutPrinciples: Principle[] = [
    {
        id: "clarity",
        title: "Clarity Over Noise",
        description:
            "We prioritize ruthless intellectual honesty. We strip away superficial narratives and unnecessary complexity to reveal the core mechanics of a problem. At this level, the only thing that matters is a clear assessment of the truth.",
        image: con,
    },
    {
        id: "accountability",
        title: "Uncompromising Accountability",
        description:
            "We do not hide behind \"consulting\" reports. We hold ourselves and our partners to a sovereign standard of responsibility. We stand behind every architecture we build because, in our world, your word is the only currency that never devalues.",
        image: ua,
    },
    {
        id: "precision",
        title: "Precision in Execution",
        description:
            "The world is full of \"strong ideas\" that fail at the first sign of pressure. We focus relentlessly on surgical implementation. Our work is engineered to hold under extreme market conditions where there is zero margin for error.",
        image: pie,
    },
    {
        id: "long_term",
        title: "The Multi-Decade Lens",
        description:
            "We don’t play for quarterly wins or short-term optics that fade. We value decisions that compound over generations. Every move we make is designed to build a legacy of durable, permanent impact.",
        image: time,
    },
    {
        id: "alignment",
        title: "Strategic Alignment",
        description:
            "We do not take \"clients\"—we select partners. We engage only where there is mutual respect and a shared obsession with excellence. If the commitment to the mission isn’t absolute, we don’t enter the room.",
        image: sa,
    },
    {
        id: "excellence",
        title: "The Baseline of Excellence",
        description:
            "Excellence is not a goal; it is the entry requirement. We expect total rigor and professional mastery in everything we touch. At NUWAT, we don’t strive for the standard—we define it.",
        image: boe
    }
];
