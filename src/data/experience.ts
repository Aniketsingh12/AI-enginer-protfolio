export type Experience = {
  period: string;
  role: string;
  org: string;
  points: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    period: 'Jun 2024 — Now',
    role: 'AI Engineer',
    org: 'Acadally',
    points: [
      'Built an AI-powered tutoring platform for grades 5–8, improving student engagement through personalised content delivery at scale.',
      'Engineered an IRT-based agent that calibrates question difficulty dynamically, replacing static assessment methods across the platform.',
    ],
  },
  {
    period: 'Apr — Jun 2024',
    role: 'Graduate Engineer Trainee',
    org: 'Radius Synergies',
    points: [
      'Developed a forecasting system for electricity consumption, delivering actionable insights for resource planning across multiple regions.',
      'Built an ETL pipeline processing 17M+ records with optimised transformations and automated data quality checks.',
    ],
  },
];
