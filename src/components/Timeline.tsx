import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2026 - present"
            iconStyle={{ background: '#ff8c00', color: 'rgb(34, 37, 40)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Java EE Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <p>Develop and maintain enterprise applications using Java EE (Jakarta EE) technologies such as JPA, CDI, EJB, and JAX-RS. Design and integrate RESTful web services and backend modules for client-facing systems, write unit and integration tests, and collaborate in Agile teams with business analysts, QA, and client stakeholders.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2026"
            iconStyle={{ background: '#ff8c00', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Apollo Software Corporation</h4>
            <p>Built and maintained enterprise retail software using Java, Spring Boot, SQL (MySQL, H2), and Freemarker, with responsive front ends in Vue.js and Quasar. Improved release reliability with JUnit and Cypress tests, and containerized and deployed applications with Docker on Ubuntu Linux.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - present"
            iconStyle={{ background: '#ff8c00', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Full-Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance Clients</h4>
            <p>Build and maintain CRM portals for Collings using React and Django. Build and customize WordPress (Elementor) websites, landing pages, and Shopify stores, and develop REST APIs and database-backed features for managing customer records and user access.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2023"
            iconStyle={{ background: '#ff8c00', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BS Electronics Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Don Honorio Ventura State University</h4>
            <p>Consistent Dean's Lister; President's Lister (1st Semester A.Y. 2022–2023). Thesis: "Embedded TinyML for Classification of Rice Plant Diseases." Licensed Electronics Engineer and Licensed Electronics Technician (2024).</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
