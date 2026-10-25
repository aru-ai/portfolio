import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGlobe } from "react-icons/fi";
import { projects, Project } from "../data/projects";
import SectionHeading from "./SectionHeading";
import "../assets/styles/Projects.scss";

type CardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: CardProps) {
  return (
    <motion.article
      className={`project-card${project.featured ? " project-card--featured" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <a
        className="project-card__media"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.title}`}
      >
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        ) : (
          <div className="project-card__placeholder">
            <FiGlobe />
            <span>{project.domain}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <span className="btn btn--primary btn--sm">
            Visit site <FiExternalLink />
          </span>
        </div>
      </a>
      <div className="project-card__body">
        <div className="project-card__title-row">
          <h3>{project.title}</h3>
          <a
            className="icon-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} in a new tab`}
          >
            <FiExternalLink />
          </a>
        </div>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Products and websites I've built for clients and on my own."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
