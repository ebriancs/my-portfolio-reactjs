import './App.css';
import { skills_character, achievements_character } from '.';

import React, { useState, useEffect } from 'react';


function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li><a href="">myContact</a></li>
          <li><a href="">myAchievements</a></li>
          <li><a href="">mySkills</a></li>
          <li><a href="">Home</a></li>
        </ul>
      </nav>
    </>
  );
}

function Introduction() {
  return (
    <>
      <section className="introduction">
        <div className="content"></div>
      </section>
    </>
  );
}

function Skills() {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [contentAnimation, setContentAnimation] = useState({});
  const [titleAnimation, setTitleAnimation] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const skills = document.querySelector('.skills');
      const isSkillsVisible = skills.getBoundingClientRect().bottom <= window.innerHeight;
      setIsSkillsVisible(isSkillsVisible);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isSkillsVisible) {
      setContentAnimation({
        animation: 'skills-content-entrance 1s ease forwards'
      });
      setTitleAnimation({
        animation: 'skills-title-entrance 1s ease forwards'
      });
    }
    else {
      setContentAnimation({});
      setTitleAnimation({});
    }
  }, [isSkillsVisible]);

  return (
    <>
      <section className="skills">
        <div className='content' style={contentAnimation}>

        </div>
        <div className='title' style={titleAnimation}>

        </div>
        <div className='character'>
          <img src={skills_character} alt="" />
          <div>{/* SURF BOARD */}</div>
        </div>
      </section>
    </>
  );
}

function Achievements() {
  return (
    <>
      <section className="achievements">

      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <section className="contact">

      </section>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>

      <main>
        <Introduction />
        <Skills />
        <Achievements />
      </main>

      <footer>

      </footer>

    </div>
  );
}

export default App;
