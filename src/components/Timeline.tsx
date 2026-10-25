import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <section id="experience" className="section section--alt timeline-section">
      <div className="section__inner">
        <SectionHeading
          eyebrow="Career"
          title="Experience & Education"
          subtitle="Where I've worked and what I've built along the way."
        />
        <div className="timeline">
          <motion.div
            className="timeline__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          {experience.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            const Icon = item.type === "work" ? FiBriefcase : RiGraduationCapLine;
            return (
              <div className={`timeline__item timeline__item--${side}`} key={`${item.title}-${item.period}`}>
                <motion.div
                  className={`timeline__dot${item.current ? " is-current" : ""}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                >
                  <Icon />
                </motion.div>
                <motion.article
                  className="timeline__card"
                  initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="timeline__period">
                    {item.period}
                    {item.current && <span className="timeline__badge">Current</span>}
                  </span>
                  <h3>{item.title}</h3>
                  {item.org && <p className="timeline__org">{item.org}</p>}
                  <ul className="timeline__bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
