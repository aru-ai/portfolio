import React from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}

export default SectionHeading;
