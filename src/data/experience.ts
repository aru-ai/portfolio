export type ExperienceItem = {
  type: "work" | "education";
  period: string;
  title: string;
  org?: string;
  bullets: string[];
  tags: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    type: "work",
    period: "April 2026 – Present",
    title: "Java EE Developer",
    org: "Accenture",
    current: true,
    bullets: [
      "Develop and maintain enterprise applications using Java EE (Jakarta EE) technologies such as JPA, CDI, EJB, and JAX-RS.",
      "Design and integrate RESTful web services and backend modules for client-facing systems.",
      "Write unit and integration tests and take part in code reviews.",
      "Collaborate in Agile teams with business analysts, QA, and client stakeholders to deliver features on schedule.",
    ],
    tags: ["Java EE", "JPA", "CDI", "EJB", "JAX-RS", "REST"],
  },
  {
    type: "work",
    period: "2024 – 2026",
    title: "Software Developer",
    org: "Apollo Software Corporation",
    bullets: [
      "Built and maintained enterprise retail software using Java, Spring Boot, SQL (MySQL, H2), and Freemarker.",
      "Developed responsive front-end interfaces with Vue.js, Quasar Framework, JavaScript, HTML, and CSS.",
      "Improved release reliability by implementing automated tests with JUnit (backend) and Cypress (end-to-end).",
      "Containerized and deployed applications with Docker in a Linux (Ubuntu) environment.",
    ],
    tags: ["Java", "Spring Boot", "Vue.js", "Quasar", "MySQL", "Docker"],
  },
  {
    type: "work",
    period: "2022 – Present",
    title: "Freelance Full-Stack Developer",
    current: true,
    bullets: [
      "Build and maintain CRM portals for clients using React and Django.",
      "Build and customize WordPress (Elementor) websites, landing pages, and Shopify stores.",
      "Develop REST APIs and database-backed features for managing customer records and user access.",
      "Work directly with clients to gather requirements, prioritize features, and deliver regular updates.",
    ],
    tags: ["React", "Django", "Node.js", "WordPress", "Shopify"],
  },
  {
    type: "education",
    period: "2019 – 2023",
    title: "BS Electronics Engineering",
    org: "Don Honorio Ventura State University",
    bullets: [
      "Thesis: \"Embedded TinyML for Classification of Rice Plant Diseases: Bacterial Blight, Brown Spot, and Rice Blast\".",
      "Licensed Electronics Engineer and Licensed Electronics Technician (2024).",
    ],
    tags: ["Electronics", "Embedded", "TinyML"],
  },
];
