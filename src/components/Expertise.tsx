import React, { MouseEvent } from "react";
import { motion } from "framer-motion";
import { skillGroups, SkillGroup } from "../data/skills";
import SectionHeading from "./SectionHeading";
import "../assets/styles/Expertise.scss";

type CardProps = {
  group: SkillGroup;
  index: number;
};

function SkillCard({ group, index }: CardProps) {
  const Icon = group.icon;

  // Feed the cursor position to the CSS spotlight that follows it across the card.
  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.div
      className="skill-card"
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="skill-card__icon">
        <Icon />
      </div>
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <ul className="skill-list">
        {group.skills.map((skill) => (
          <li className="skill-chip" key={skill.name}>
            <skill.icon style={skill.color ? { color: skill.color } : undefined} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="section__inner">
        <SectionHeading
          eyebrow="Expertise"
          title="What I work with"
          subtitle="From enterprise Java backends to modern frontends, deployment pipelines, and AI-assisted workflows."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
