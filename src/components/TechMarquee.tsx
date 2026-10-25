import React from "react";
import { marqueeSkills } from "../data/skills";
import "../assets/styles/TechMarquee.scss";

// The list is rendered twice so the strip can loop seamlessly.
const items = [...marqueeSkills, ...marqueeSkills];

function TechMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((skill, index) => (
          <div className="marquee__item" key={`${skill.name}-${index}`}>
            <skill.icon style={skill.color ? { color: skill.color } : undefined} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
