interface Stats {
  title: string;
  description: string;
}

export interface StatsSectionProps {
  heading: string;
  gradientHeading?: string;
  description?: string;
  stats: Stats[];
}

export const HomeStats: Stats[] = [
  {
    title: "10,000+",
    description: "satisfied clients",
  },
  {
    title: "92%",
    description: "client referral",
  },
  {
    title: "1 in 5",
    description: "companies accepted",
  },
];

export const AboutStats: Stats[] = [
  {
    title: "$1B+",
    description: "TURNOVER SCALE",
  },
  {
    title: "9-FIGURE",
    description: "EXECUTION",
  },
  {
    title: "GLOBAL",
    description: "AUTHORITY",
  },
];
