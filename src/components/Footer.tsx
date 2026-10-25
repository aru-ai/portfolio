import React from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";
import { NAV_ITEMS, scrollToSection } from "./Navigation";
import "../assets/styles/Footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <button className="footer__brand" onClick={() => scrollToSection("home")} aria-label="Back to top">
          JL<span>.</span>
        </button>
        <nav className="footer__links" aria-label="Footer">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="footer__socials">
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
          <button
            className="icon-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, TypeScript &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}

export default Footer;
