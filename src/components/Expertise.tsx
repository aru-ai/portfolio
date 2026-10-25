import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faDocker, faWordpress } from '@fortawesome/free-brands-svg-icons';
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
    "Claude AI",
    "OpenAI Codex",
    "GitHub Copilot",
    "ChatGPT",
];

const labelsFourth = [
    "WordPress",
    "Elementor",
    "Shopify",
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
                    <h3>Frontend Development</h3>
                    <p>I build responsive, user-friendly interfaces with React, Vue.js, and the Quasar Framework, and connect them cleanly to backend APIs to deliver complete, end-to-end features.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Testing, DevOps & AI Tools</h3>
                    <p>I improve release reliability with automated unit, integration, and end-to-end tests, and containerize and deploy applications with Docker on Linux. I also use AI coding tools to ship features faster.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faWordpress} size="3x"/>
                    <h3>CMS & E-commerce</h3>
                    <p>For freelance clients, I build and customize WordPress (Elementor) websites, landing pages, and Shopify stores, working directly with them to gather requirements and deliver regular updates.</p>
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
