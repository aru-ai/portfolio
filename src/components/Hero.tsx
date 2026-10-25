import React, { CSSProperties, useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { SiDjango, SiDocker, SiReact, SiSpringboot, SiVuedotjs } from "react-icons/si";
import avatar from "../assets/images/avatar.jpg";
import { profile } from "../data/profile";
import { scrollToSection } from "./Navigation";
import "../assets/styles/Hero.scss";

type Badge = {
  Icon: IconType;
  color: string;
  label: string;
  style: CSSProperties;
  duration: number;
};

// Floating tech badges placed around the avatar.
const BADGES: Badge[] = [
  { Icon: SiReact, color: "#61DAFB", label: "React", style: { top: "2%", left: "2%" }, duration: 5 },
  { Icon: FaJava, color: "#F89820", label: "Java", style: { top: "-4%", right: "18%" }, duration: 6 },
  { Icon: SiSpringboot, color: "#6DB33F", label: "Spring Boot", style: { top: "40%", right: "-8%" }, duration: 5.5 },
  { Icon: SiVuedotjs, color: "#4FC08D", label: "Vue.js", style: { bottom: "4%", right: "4%" }, duration: 6.5 },
  { Icon: SiDjango, color: "#44B78B", label: "Django", style: { bottom: "-4%", left: "20%" }, duration: 5.2 },
  { Icon: SiDocker, color: "#2496ED", label: "Docker", style: { top: "42%", left: "-9%" }, duration: 6.2 },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((index) => (index + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="hero__pill">
            <span className="hero__pill-dot" />
            {profile.role}
          </motion.span>
          <motion.p variants={item} className="hero__greeting">
            Hello, I'm
          </motion.p>
          <motion.h1 variants={item} className="hero__name">
            {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
          </motion.h1>
          <motion.div variants={item} className="hero__role">
            <span>I build</span>
            <span className="hero__role-swap">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="text-gradient"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
          <motion.p variants={item} className="hero__summary">
            {profile.summary}
          </motion.p>
          <motion.div variants={item} className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollToSection("projects")}>
              View Projects
            </button>
            <button className="btn btn--ghost" onClick={() => scrollToSection("contact")}>
              Contact Me
            </button>
          </motion.div>
          <motion.div variants={item} className="hero__meta">
            <span className="hero__location">
              <FiMapPin /> {profile.location}
            </span>
            <div className="hero__socials">
              {profile.github && (
                <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
              )}
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__avatar">
            <img src={avatar} alt={profile.name} />
          </div>
          {BADGES.map(({ Icon, color, label, style, duration }, index) => (
            <motion.div
              key={label}
              className="hero__badge"
              style={style}
              title={label}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            >
              <Icon style={{ color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll"
        onClick={() => scrollToSection("expertise")}
        aria-label="Scroll to expertise"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <FiArrowDown />
      </motion.button>
    </section>
  );
}

export default Hero;
