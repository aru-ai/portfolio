import { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  FiDatabase,
  FiGlobe,
  FiLayout,
  FiMessageSquare,
  FiServer,
  FiSettings,
  FiTerminal,
} from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import {
  SiAnthropic,
  SiApachefreemarker,
  SiClaude,
  SiCss,
  SiCypress,
  SiDjango,
  SiDocker,
  SiElementor,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJunit5,
  SiLaravel,
  SiModelcontextprotocol,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiQuasar,
  SiReact,
  SiSass,
  SiShopify,
  SiSpringboot,
  SiTypescript,
  SiUbuntu,
  SiVitest,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: IconType;
  // Brand colour. Leave unset for logos that are black/white so they follow the theme's text colour.
  color?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

const java: Skill = { name: "Java", icon: FaJava, color: "#F89820" };
const javaEE: Skill = { name: "Java EE (Jakarta EE)", icon: FaJava, color: "#F89820" };
const springBoot: Skill = { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" };
const django: Skill = { name: "Django", icon: SiDjango, color: "#44B78B" };
const php: Skill = { name: "PHP", icon: SiPhp, color: "#777BB4" };
const laravel: Skill = { name: "Laravel", icon: SiLaravel, color: "#FF2D20" };
const python: Skill = { name: "Python", icon: SiPython, color: "#3776AB" };
const restApis: Skill = { name: "REST APIs", icon: FiGlobe };
const postman: Skill = { name: "Postman", icon: SiPostman, color: "#FF6C37" };
const mysql: Skill = { name: "MySQL", icon: SiMysql, color: "#4479A1" };
const h2: Skill = { name: "H2", icon: FiDatabase };
const freemarker: Skill = { name: "Freemarker", icon: SiApachefreemarker, color: "#326CAC" };
const nodejs: Skill = { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" };

const react: Skill = { name: "React", icon: SiReact, color: "#61DAFB" };
const vue: Skill = { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" };
const quasar: Skill = { name: "Quasar Framework", icon: SiQuasar, color: "#1976D2" };
const typescript: Skill = { name: "TypeScript", icon: SiTypescript, color: "#3178C6" };
const javascript: Skill = { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" };
const html: Skill = { name: "HTML5", icon: SiHtml5, color: "#E34F26" };
const css: Skill = { name: "CSS", icon: SiCss, color: "#663399" };
const sass: Skill = { name: "Sass", icon: SiSass, color: "#CC6699" };
const wordpress: Skill = { name: "WordPress", icon: SiWordpress, color: "#21759B" };
const elementor: Skill = { name: "Elementor", icon: SiElementor, color: "#D30C5C" };
const shopify: Skill = { name: "Shopify", icon: SiShopify, color: "#7AB55C" };

const junit: Skill = { name: "JUnit", icon: SiJunit5, color: "#25A162" };
const cypress: Skill = { name: "Cypress", icon: SiCypress, color: "#69D3A7" };
// Named jestSkill rather than jest so it doesn't shadow Jest's global in tests.
const jestSkill: Skill = { name: "Jest", icon: SiJest, color: "#C21325" };
const vitest: Skill = { name: "Vitest", icon: SiVitest, color: "#6E9F18" };
const phpunit: Skill = { name: "PHPUnit", icon: SiPhp, color: "#777BB4" };
const docker: Skill = { name: "Docker", icon: SiDocker, color: "#2496ED" };
const ubuntu: Skill = { name: "Ubuntu Linux", icon: SiUbuntu, color: "#E95420" };
const github: Skill = { name: "Git / GitHub", icon: SiGithub };
const githubActions: Skill = { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" };

const claudeCode: Skill = { name: "Claude Code", icon: SiClaude, color: "#D97757" };
const claudeAI: Skill = { name: "Claude AI", icon: SiAnthropic };
const mcp: Skill = { name: "Model Context Protocol (MCP)", icon: SiModelcontextprotocol };
const codex: Skill = { name: "OpenAI Codex", icon: FiTerminal };
const copilot: Skill = { name: "GitHub Copilot", icon: SiGithubcopilot };
const chatgpt: Skill = { name: "ChatGPT", icon: FiMessageSquare };

export const skillGroups: SkillGroup[] = [
  {
    title: "Enterprise Backend Development",
    description:
      "Java EE and Spring Boot developer with 4+ years of experience building enterprise applications. I design and integrate RESTful web services and backend modules for client-facing systems, from retail software to CRM portals, backed by well-structured SQL databases.",
    icon: FiServer,
    skills: [java, javaEE, springBoot, django, php, laravel, python, restApis, postman, mysql, h2, freemarker],
  },
  {
    title: "Frontend, CMS & E-commerce",
    description:
      "I build responsive, user-friendly interfaces with React, Vue.js, and the Quasar Framework, and connect them cleanly to backend APIs to deliver complete, end-to-end features. For freelance clients, I also build and customize WordPress (Elementor) websites, landing pages, and Shopify stores.",
    icon: FiLayout,
    skills: [react, vue, quasar, typescript, javascript, html, css, sass, wordpress, elementor, shopify],
  },
  {
    title: "Testing & DevOps",
    description:
      "I improve release reliability with automated unit, integration, and end-to-end tests, and containerize and deploy applications with Docker on Linux.",
    icon: FiSettings,
    skills: [junit, cypress, jestSkill, vitest, phpunit, docker, ubuntu, github, githubActions],
  },
  {
    title: "AI-Assisted Development",
    description:
      "I use AI coding agents like Claude Code as part of my daily workflow to ship features faster, from scaffolding and refactoring to writing tests. I also work with the Model Context Protocol (MCP) to connect AI tools to external services and data sources.",
    icon: RiRobot2Line,
    skills: [claudeCode, claudeAI, mcp, codex, copilot, chatgpt],
  },
];

// Shown in the scrolling strip under the hero.
export const marqueeSkills: Skill[] = [
  java,
  springBoot,
  react,
  vue,
  typescript,
  django,
  python,
  nodejs,
  docker,
  mysql,
  laravel,
  wordpress,
  cypress,
  claudeCode,
  githubActions,
];
