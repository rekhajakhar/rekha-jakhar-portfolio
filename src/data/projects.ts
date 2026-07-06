export type Project = {
  slug: string;
  name: string;
  role: string;
  timeframe: string;
  stack: string[];
  headlineMetric: string;
  summary: string;
  problem: string;
  approach: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    slug: "delta-migration",
    name: "Delta Migration",
    role: "Frontend Architect",
    timeframe: "Intuit · 2022 – 2024",
    stack: ["React", "Redux Toolkit", "TypeScript", "GraphQL"],
    headlineMetric: "117+ customers unblocked",
    summary:
      "End-to-end frontend workflow letting high-value QuickBooks customers migrate accounting data into an existing QuickBooks Online account, instead of the standard fresh migration path.",
    problem:
      "A subset of high-value QuickBooks Desktop customers already had an active QuickBooks Online account, so the standard migration flow couldn't move their data without risking duplication, partial matches, or corrupting existing records. There was no frontend workflow that could safely reconcile two live data sets.",
    approach: [
      "Architected the end-to-end frontend workflow in React and Redux Toolkit, coordinating state across qbo-desktop-widget-ui and beanstalk repositories.",
      "Designed multi-state UI flows to handle diverse failure and partial-match scenarios without introducing regressions on existing migration flows.",
      "Built custom component architecture for partial matching logic and data visualisation of transaction splitting, giving customers a clear view of how their transactions were being reconciled.",
    ],
    impact: [
      "Unblocked 117+ high-value customers who previously had no safe migration path.",
      "Successfully processed 2,700+ transactions through the partial-matching flow.",
      "Zero regression introduced on existing (non-delta) migration flows.",
    ],
  },
  {
    slug: "readiness-agent",
    name: "Readiness Agent",
    role: "Frontend Lead",
    timeframe: "Intuit · 2023 – 2024",
    stack: ["React", "Redux Toolkit", "TypeScript"],
    headlineMetric: "426+ / 305+ companies improved in 30 days",
    summary:
      "Frontend integration connecting an AI-driven readiness assessment to a personalised pre-migration experience, surfacing recommendations in context before customers attempted migration.",
    problem:
      "Many customers hit avoidable, migration-blocking data issues (unbilled charges, inactive vendors, etc.) only after starting their migration, causing failed or stalled attempts. The underlying AI agent could detect these issues in advance, but there was no frontend surface to act on its recommendations pre-migration.",
    approach: [
      "Led UI integration connecting the Readiness Agent's AI responses to a personalised pre-migration frontend experience.",
      "Designed the flow to surface specific, actionable recommendations in context, rather than generic warnings, so customers could resolve issues before migrating.",
    ],
    impact: [
      "Reduced pre-migration data issues for 426+ companies with unbilled charges within 30 days of launch.",
      "Reduced pre-migration data issues for 305+ companies with inactive vendors within 30 days of launch.",
    ],
  },
  {
    slug: "performance-and-architecture",
    name: "Performance & Architecture",
    role: "Frontend Engineer",
    timeframe: "Intuit · 2022 – 2026",
    stack: ["React", "GraphQL", "Webpack", "Chrome DevTools", "Lighthouse"],
    headlineMetric: "~3,750 daily requests migrated, zero downtime",
    summary:
      "A set of infrastructure and performance initiatives across the DTM frontend — migrating a legacy data layer to GraphQL, extending file-size limits, and cutting time-to-interactive.",
    problem:
      "The DTM frontend depended on IDMapper, an ageing data-access layer, while also facing hard limits on file size (2GB) for migrations and a heavier-than-necessary initial bundle that slowed time-to-interactive.",
    approach: [
      "Migrated critical infrastructure from IDMapper to Federation Link Service (GraphQL), taking ownership of the frontend-to-API contract throughout the cutover.",
      "Engineered a Large File Migration solution using chunked upload across both frontend and backend.",
      "Improved qbo-dtm-app performance through lazy asset loading and by optimising Page Ready Markers.",
    ],
    impact: [
      "Migrated ~3,750 daily requests to the new GraphQL-based service with zero downtime.",
      "Extended supported migration file size from 2GB to 5GB via chunked upload.",
      "Reduced bundle size and improved time-to-interactive through lazy loading.",
      "Recognised with Spotlight Awards for delivery excellence across IES DFY, Readiness Agent, and Performance Improvement programs.",
    ],
  },
];
