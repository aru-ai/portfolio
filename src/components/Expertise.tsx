import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Java EE (Jakarta EE)",
    "JPA",
    "CDI",
    "EJB",
    "JAX-RS",
    "Spring Boot",
    "Django",
    "PHP",
    "Laravel Framework",
    "Python",
    "REST APIs",
    "Postman",
    "MySQL",
    "H2",
    "Freemarker",
];

const labelsSecond = [
    "React",
    "Vue.js",
    "Quasar Framework",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "WordPress",
    "Elementor",
    "Shopify",
];

const labelsThird = [
    "JUnit",
    "Cypress",
    "Jest",
    "Vitest",
    "PHPUnit",
    "Docker",
    "Ubuntu Linux",
    "Git/GitHub",
    "GitHub Actions",
];

const labelsFourth = [
    "Claude Code",
    "Claude AI",
    "Model Context Protocol (MCP)",
    "OpenAI Codex",
    "GitHub Copilot",
    "ChatGPT",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Enterprise Backend Development</h3>
                    <p>Java EE and Spring Boot developer with 4+ years of experience building enterprise applications. I design and integrate RESTful web services and backend modules for client-facing systems, from retail software to CRM portals, backed by well-structured SQL databases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend, CMS & E-commerce</h3>
                    <p>I build responsive, user-friendly interfaces with React, Vue.js, and the Quasar Framework, and connect them cleanly to backend APIs to deliver complete, end-to-end features. For freelance clients, I also build and customize WordPress (Elementor) websites, landing pages, and Shopify stores.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Testing & DevOps</h3>
                    <p>I improve release reliability with automated unit, integration, and end-to-end tests, and containerize and deploy applications with Docker on Linux.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>AI-Assisted Development</h3>
                    <p>I use AI coding agents like Claude Code as part of my daily workflow to ship features faster, from scaffolding and refactoring to writing tests. I also work with the Model Context Protocol (MCP) to connect AI tools to external services and data sources.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
