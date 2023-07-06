import './App.css';
import './Test.css';
import { skills_character, achievements_character } from '.';

import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

// FUNCTIONS
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

function Skills({ onSkillsComplete }) {
  const [isSkillsElementVisible, setIsSkillsElementVisible] = useState(false);
  const [isCharacterAnimationStarted, setIsCharacterAnimationStarted] = useState(false);
  const [isCharacterAnimationFinished, setIsCharacterAnimationFinished] = useState(false);
  const [isContentAnimationFinished, setIsContentAnimationFinished] = useState(false);
  const [isTitleAnimationFinished, setIsTitleAnimationFinished] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skills = document.querySelector('.skills');
      const isSkillsElementVisible = skills.getBoundingClientRect().bottom <= window.innerHeight;

      if(isSkillsElementVisible) {
        setIsSkillsElementVisible(isSkillsElementVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isSkillsElementVisible && isCharacterAnimationFinished && isContentAnimationFinished && isTitleAnimationFinished) {
    onSkillsComplete(true);
  }

  const handleCharacterAnimationStart = () => {
    setIsCharacterAnimationStarted(true);
  }

  const handleCharacterAnimationEnd = () => {
    setIsCharacterAnimationFinished(true);
  };

  const handleContentAnimationEnd = () => {
    setIsContentAnimationFinished(true);
  }

  const handleTitleAnimationEnd = () => {
    setIsTitleAnimationFinished(true);
  }

  return (
    <>
      <section className="skills">
        <div onAnimationEnd={handleContentAnimationEnd} className={`content ${isSkillsElementVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
        </div>
        <div onAnimationEnd={handleTitleAnimationEnd} className={`title ${isSkillsElementVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
          <h2>SKILLS</h2>
        </div>
        <div onAnimationStart={handleCharacterAnimationStart} onAnimationEnd={handleCharacterAnimationEnd} className={`character ${isSkillsElementVisible ? 'animate' : ''}`}>
          <img src={skills_character} alt="" />
          <div className={`${isSkillsElementVisible && isCharacterAnimationStarted ? 'active' : ''}`}></div>
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
  const [isSkillsCompleted, setIsSkillsCompleted] = useState(false);

  const handleSkillsComplete = (completed) => {
    setIsSkillsCompleted(completed);
  };

  return (
    <div className='app'>
      <header>
        <Navigation />
      </header>

      <main>
        <Introduction />
        <Skills onSkillsComplete={handleSkillsComplete} />
        {isSkillsCompleted && <Achievements />}
      </main>

      <footer>

      </footer>

    </div>
  );
}

export default App;
