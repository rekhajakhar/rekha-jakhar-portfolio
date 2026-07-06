export type ExperienceGroup = {
  heading: string;
  bullets: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  title: string;
  dates: string;
  intro?: string;
  groups?: ExperienceGroup[];
  bullets?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Intuit",
    location: "Bengaluru",
    title: "Software Engineer 2, Frontend",
    dates: "Nov 2021 – Mar 2026",
    intro:
      "Led frontend development for the QuickBooks Desktop-to-Online Migration (DTM) platform, enabling customers to migrate from legacy desktop software to QuickBooks Online. Worked primarily in React/TypeScript with Redux Toolkit for state management, GraphQL for data layer integration, and performance optimisation across the DTM frontend.",
    groups: [
      {
        heading: "Delta Migration",
        bullets: [
          "Architected end-to-end frontend workflow using React and Redux Toolkit, unblocking 117+ high-value customers from migrating accounting data into existing QuickBooks Online accounts.",
          "Designed complex multi-state UI flows across qbo-desktop-widget-ui and beanstalk repositories, handling diverse failure and partial-match scenarios with zero regression on existing migration flows.",
          "Implemented partial matching logic and data visualisation for transaction splitting, processing 2,700+ transactions successfully — built entirely in React with custom component architecture.",
        ],
      },
      {
        heading: "Readiness Agent",
        bullets: [
          "Led UI integration for the Readiness Agent, connecting intelligent AI responses to a personalised pre-migration frontend experience.",
          "Reduced pre-migration data issues for 426+ companies (unbilled charges) and 305+ companies (inactive vendors) within 30 days of launch — driven by frontend UI flows that surfaced AI recommendations in context.",
        ],
      },
      {
        heading: "Performance and Architecture",
        bullets: [
          "Migrated critical infrastructure from IDMapper to Federation Link Service (GraphQL), securing approximately 3,750 daily requests with zero downtime — required deep frontend-to-API contract ownership.",
          "Engineered Large File Migration solution with chunked upload in the frontend and backend, extending support from legacy 2GB to 5GB files.",
          "Improved qbo-dtm-app frontend performance via lazy asset loading, reducing bundle size and optimising Page Ready Markers for faster time-to-interactive.",
          "Recognised with Spotlight Awards for delivery excellence across IES DFY, Readiness Agent, and Performance Improvement programs.",
        ],
      },
    ],
  },
  {
    company: "Elektrobit India Pvt Ltd",
    location: "Bengaluru",
    title: "Senior Engineer — Embedded / C++",
    dates: "Sep 2018 – Nov 2021",
    bullets: [
      "Developed sensor fusion algorithms for ADAS (Static Object Detection) in C++; optimised real-time camera and radar processing pipelines for Volkswagen and BMW.",
    ],
  },
  {
    company: "Robert Bosch",
    location: "Bengaluru",
    title: "Senior Engineer — Embedded / C++",
    dates: "Jun 2014 – Sep 2018",
    bullets: [
      "Built safety-critical brake assist systems validated to international CNCAP standards, deployed in JLR and Honda production vehicles.",
    ],
  },
];
