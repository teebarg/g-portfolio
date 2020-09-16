import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Stack from './Stack/Stack';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  stackData,
  skillsData,
  testimoniesData,
  footerData,
} from '../mock/data';
import Testimony from './Testimony/Testimony';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [skills, setSkills] = useState([]);
  const [testimonies, setTestimonies] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setStacks([...stackData]);
    setSkills([...skillsData]);
    setTestimonies([...testimoniesData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, stacks, skills, testimonies, footer }}>
      <Hero />
      <About />
      <Skills />
      <Stack />
      <Projects />
      <Testimony />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
