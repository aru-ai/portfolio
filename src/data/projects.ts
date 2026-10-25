import collingsPortal from "../assets/images/collings-portal.jpg";
import opalengke from "../assets/images/opalengke.jpg";
import landscapingClarksville from "../assets/images/landscaping-clarksville.jpg";
import treeServiceClarksville from "../assets/images/tree-service-clarksville.jpg";
import treeCareFranklin from "../assets/images/tree-care-franklin.jpg";

export type Project = {
  title: string;
  description: string;
  url: string;
  // Shown on the placeholder tile when there is no screenshot yet.
  domain: string;
  image?: string;
  tags: string[];
  // Featured projects span two columns on wide screens.
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Collings Self Management Portal",
    description:
      "Self-service portal for Collings Real Estate with dedicated experiences for rental providers, renters, tradespeople, and service providers: manage properties, pay rent, log maintenance requests, and handle job bookings and invoices. React frontends sit behind a Node.js gateway, with two Django backends powering the REST APIs and database-backed features.",
    url: "https://selfmanaged.collings.com.au/",
    domain: "selfmanaged.collings.com.au",
    image: collingsPortal,
    tags: ["React", "Node.js", "Django", "REST API"],
    featured: true,
  },
  {
    title: "Collings Real Estate",
    description:
      "Public website for Collings Real Estate, the Australian agency behind the Self Management Portal.",
    url: "https://www.collings.com.au/",
    domain: "collings.com.au",
    tags: ["Website", "Real Estate"],
  },
  {
    title: "Opalengke",
    description:
      "Marketplace platform connecting customers, vendors, and riders. The web app is built with Laravel following an MVC architecture, with database migrations, seeding, and testing, and uses Vite for frontend assets. The companion mobile app is built with Expo and React Native, using Expo Router for navigation on Android and iOS.",
    url: "https://opalengke.com/",
    domain: "opalengke.com",
    image: opalengke,
    tags: ["Laravel", "PHP", "React Native", "Expo", "Vite"],
    featured: true,
  },
  {
    title: "Durable Systems",
    description: "Company website for Durable Systems, an Australian business.",
    url: "https://durablesystems.com.au/",
    domain: "durablesystems.com.au",
    tags: ["Website"],
  },
  {
    title: "Clarksville TN Landscaping",
    description:
      "Lead-generation website for a landscaping company in Clarksville, Tennessee, with service pages, free-estimate calls to action, and click-to-call for mobile visitors.",
    url: "https://landscapingclarksvilletn.com/",
    domain: "landscapingclarksvilletn.com",
    image: landscapingClarksville,
    tags: ["WordPress", "Elementor", "Landing Page"],
  },
  {
    title: "Clarksville TN Tree Service",
    description:
      "Website for a Clarksville, Tennessee tree care company, built around a prominent contact form, a services menu, and a blog.",
    url: "https://treeserviceclarksvilletn.com/",
    domain: "treeserviceclarksvilletn.com",
    image: treeServiceClarksville,
    tags: ["WordPress", "Elementor"],
  },
  {
    title: "Franklin TN Tree Care",
    description:
      "Website for a tree service in Franklin, Tennessee, featuring a free-quote form, service pages, and click-to-call.",
    url: "https://treecarefranklintn.com/",
    domain: "treecarefranklintn.com",
    image: treeCareFranklin,
    tags: ["WordPress", "Elementor"],
  },
];
