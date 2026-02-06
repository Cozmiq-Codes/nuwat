export type ServiceId =
  | "strategic-mandate"
  | "operational-reconstruction"
  | "scale-architecture"
  | "identity-market-presence";

export type ServiceButton = {
  label: string;
};

export type ServiceCard = {
  id: ServiceId;
  kicker: string;
  title: string;
  description: string;
  buttons: ServiceButton[];
  image?: string;
};

export type EngageCriterion = {
  title: string;
  description: string;
  icon: string;
};

export const Services: ServiceCard[] = [
  {
    id: "strategic-mandate",
    kicker: "Surgical Audits For Sovereign Operations.",
    title: "Strategic Mandate",
    description:
      'NUWAT Provides Elite-Level Strategic Intervention. We Align Internal Structures To A Sovereign Vision, Ensuring Companies Operate With Surgical Precision. Our Perspective Is Not "Practical"—It Is Definitive. We Ensure Leaders Move With Total Market Clarity.',
    buttons: [{ label: "Hardwire Results" }, { label: "Value Extraction" }],
    image: "/services/service-domains/strategic-mandate.png",
  },
  {
    id: "operational-reconstruction",
    kicker: "Reengineering The Mechanics Of Dominance.",
    title: "Operational Reconstruction",
    description:
      'We Don’t Just "Streamline" Workflows; We Redesign How A Business Actually Performs At Its Core. From End-To-End System Overhauls To Ruthless Process Engineering, We Build The Engine That Drives The Strategy. We Don’t Just Structure The Business; We Weaponize It.',
    buttons: [
      { label: "Deep Sector Dominance" },
      { label: "Calculated Expansion" },
    ],
    image: "/services/service-domains/operational-reconstruction.png",
  },
  {
    id: "scale-architecture",
    kicker: "Architecting Assets For Unassailable Scale.",
    title: "Scale Architecture",
    description:
      'Market Analysis And Positioning For Those Who Refuse To Chase Empty Metrics. We Architect The Foundation For Permanent, Multi-Generational Growth. We Don’t Move At The "Right Pace"—We Move At The Pace Of Market Capture.',
    buttons: [
      { label: "Vast Industrial Expertise" },
      { label: "Force-Multiplier Development" },
    ],
    image: "/services/service-domains/scale-architecture.png",
  },
  {
    id: "identity-market-presence",
    kicker: "Engineering The Aura Of Industrial Authority.",
    title: "Identity & Market Presence",
    description:
      'We Craft The Visual And Strategic Identity Of Giants. From Distinctive Market Presence To Touchpoints That Demand Respect. We Engineer The Perception Of Authority. This Isn’t About "Relationships"; It’s About Defining How The World Perceives Your Power.',
    buttons: [
      { label: "Authoritative Identity" },
      { label: "Holistic Dominance" },
    ],
    image: "/services/service-domains/identity-market-presence.png",
  },
];

export const ServicesStakes: EngageCriterion[] = [
  {
    title: "Critical Mandates",
    description:
      "When Decisions Are So Complex They Cross Multiple Teams And Carry The Weight Of The Company's Future.",
    icon: "/services/high-engage/cm.svg",
  },
  {
    title: "Peak Complexity",
    description:
      'Your Team Is Elite, But The Environment Has Become So Volatile That Only A Veteran "Sovereign Operator" Can See The Path Through.',
    icon: "/services/high-engage/pc.svg",
  },
  {
    title: "Structural Lag",
    description:
      "Your Growth Is Outstripping Your Foundation, And You Need To Re-Engineer The Organization Before It Fractures Under Its Own Weight.",
    icon: "/services/high-engage/sl.svg",
  },
  {
    title: "Absolute Involvement",
    description:
      'You Don\'t Want A "Slide Deck" Or A "Presentation." You Need A High-Level Intervention And The Deep Involvement Of A Man Who Has Already Won.',
    icon: "/services/high-engage/ai.svg",
  },
];
