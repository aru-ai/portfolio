import React, { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import {
  Navigation,
  Hero,
  TechMarquee,
  Expertise,
  Timeline,
  Projects,
  Contact,
  Footer,
} from "./components";
import { Theme } from "./theme";
import "./index.scss";

function getInitialTheme(): Theme {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Storage can be unavailable (e.g. private browsing); the theme still applies for this visit.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <MotionConfig reducedMotion="user">
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TechMarquee />
        <Expertise />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
