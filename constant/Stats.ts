interface Stats {
    title: string;
    description: string;
}

export interface StatsSectionProps {
    heading: string;
    gradientHeading?: string;
    description?: string;
}

export const HomeStats: Stats[] = [
    {
        title: '10,000+',
        description: 'satisfied clients'
    },
    {
        title: '92%',
        description: 'client referral'
    },
    {
        title: '1 in 5',
        description: 'companies accepted'
    },
]