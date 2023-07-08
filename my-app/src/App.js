import './App.css';
import './Test.css';
import { profile, skills_character, achievements_character } from '.';

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

            if (isSkillsElementVisible) {
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
                    <div className={`${isSkillsElementVisible && isCharacterAnimationStarted ? 'active' : ''}`}>{/*SURF BOARD*/}</div>
                </div>
            </section>
        </>
    );
}

function Achievements({ onAchievementsComplete }) {
    const [isAchievementsElementVisible, setIsAchievementsElementVisible] = useState(false);
    const [isCharacterAnimationStarted, setIsCharacterAnimationStarted] = useState(false);
    const [isCharacterAnimationFinished, setIsCharacterAnimationFinished] = useState(false);
    const [isContentAnimationFinished, setIsContentAnimationFinished] = useState(false);
    const [isTitleAnimationFinished, setIsTitleAnimationFinished] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const achievements = document.querySelector('.achievements');
            const isAchievementsElementVisible = achievements.getBoundingClientRect().bottom <= window.innerHeight;

            if (isAchievementsElementVisible) {
                setIsAchievementsElementVisible(isAchievementsElementVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (isAchievementsElementVisible && isCharacterAnimationFinished && isContentAnimationFinished && isTitleAnimationFinished) {
        onAchievementsComplete(true);
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
            <section className="achievements">
                <div onAnimationEnd={handleTitleAnimationEnd} className={`title ${isAchievementsElementVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
                    <h2>ACHIEVEMENTS</h2>
                </div>
                <div onAnimationEnd={handleContentAnimationEnd} className={`content ${isAchievementsElementVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
                </div>
                <div onAnimationStart={handleCharacterAnimationStart} onAnimationEnd={handleCharacterAnimationEnd} className={`character ${isAchievementsElementVisible ? 'animate' : ''}`}>
                    <img src={achievements_character} alt="" />
                    <div className={`${isAchievementsElementVisible && isCharacterAnimationStarted ? 'active' : ''}`}>{/*SURF BOARD*/}</div>
                </div>
            </section>
        </>
    );
}

function Contact() {
    const [isCardAnimationFinished, setIsCardAnimationFinished] = useState(false);
    const [isDetailClicked, setIsDetailClicked] = useState(false);
    const [isMessageClicked, setIsMessageClicked] = useState(false);

    const handleCardAnimationEnd = () => {
        setIsCardAnimationFinished(true);
    }

    const handleDetailClick = () => {
        if (!isDetailClicked) {
            setIsDetailClicked(!isDetailClicked);
        }
    };

    const handleMessageClick = () => {
        setIsMessageClicked(!isMessageClicked);
    };

    const handleMessageCloseClick = () => {
        setIsMessageClicked(!isMessageClicked);
    };

    function Details() {
        const detailsData = [
            { label: 'Name', value: 'John Ebrian S. Manalo' },
            { label: 'Email', value: 'ebrian.cs@gmail.com' },
            { label: 'Phone', value: '+639267067396' },
            { label: 'Gender', value: 'M' },
            { label: 'Birthdate', value: 'January 10, 2001' },
            { label: 'Height', value: '173 cm' },
            { label: 'Weight', value: '60 kg' }
        ];

        return (
            <>
                <div className='details'>
                    <table>
                        {detailsData.map((data, index) => (
                            <tr key={index} className={`${isDetailClicked && isCardAnimationFinished ? 'entrance' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                                <th>{data.label}</th>
                                <td>{data.value}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </>
        )
    }

    function Message() {
        const [formData, setFormData] = useState([
            { name: '', email: '', subject: '', message: '' }
        ]);

        const formFields = [
            { label: 'Name', type: 'text', name: 'name', initial: 'Your name' },
            { label: 'Email', type: 'email', name: 'email', initial: 'Your email' },
            { label: 'Subject', type: 'text', name: 'subject', initial: 'Your subject' },
            { label: 'Message', type: 'textarea', name: 'message', initial: 'Your message' }
        ];

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('formData: ', formData[0].name, formData[0].email, formData[0].subject, formData[0].message);
        };

        return (
            <>
                <div className={`message ${isMessageClicked ? 'entrance' : 'exit'}`}>
                    <button onClick={handleMessageCloseClick} className='close'>&times;</button>
                    <h2>Hi! Let's connect</h2>
                    <form action="" onSubmit={handleSubmit}>
                        {formFields.map((field) => (
                            <div key={field.name}>
                                {field.type === 'textarea' ? (
                                    <textarea name={field.name} id={field.name} value={field.initial} onChange={handleChange} cols="30" rows="10"></textarea>
                                ) : (
                                    <input name={field.name} id={field.name} type={field.type} value={formData[field.name]} onChange={handleChange} />
                                )}
                            </div>
                        ))}
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </>
        );
    }

    return (
        <>
            <section className="contact">
                <div className='contact-top'>
                    <div onAnimationEnd={handleCardAnimationEnd} className='card'>
                        <div className='card-top'>
                            <p>
                                Skilled and motivated computer programmer and developer, knowledgeable in web development and data science, prioritizing to develop high-quality programs and organized codes. A good communicator with excellent problem-solving skills and a passion for continuous learning.
                            </p>
                            <img src={profile} alt="" />
                        </div>
                        <div className='card-bottom'>
                            <h2>JOHN EBRIAN S. MANALO</h2>
                            <h4>BS Computer Science</h4>
                            <ul>
                                <li><a href='https://www.linkedin.com/in/ebriancs/' target='_blank' className='fa fa-linkedin-square'></a>LINKEDIN</li>
                                <li><a href='https://github.com/ebriancs' target='_blank' className='fa fa-github'></a>GITHUB</li>
                                <li><i onClick={handleMessageClick} className='fa fa-comments-o'></i>MESSAGE</li>
                                <li><i onClick={handleDetailClick} className='fa fa-address-card'></i>DETAILS</li>
                            </ul>
                        </div>
                    </div>

                    <Details />
                </div>
                <Message />
                <div className='contact-bottom'>

                </div>
            </section>
        </>
    );
}

function App() {
    const [isSkillsCompleted, setIsSkillsCompleted] = useState(false);
    const [isAchievementsCompleted, setIsAchievementsCompleted] = useState(false);

    const handleSkillsComplete = (completed) => {
        setIsSkillsCompleted(completed);
    };

    const handleAchievementsComplete = (completed) => {
        setIsAchievementsCompleted(true);
    }

    return (
        <div className='app'>
            <header>
                <Navigation />
            </header>

            <main>
                <Introduction />
                <Skills onSkillsComplete={handleSkillsComplete} />
                {isSkillsCompleted && <Achievements onAchievementsComplete={handleAchievementsComplete} />}
            </main>

            <footer>
                {isAchievementsCompleted && <Contact />}
            </footer>

        </div>
    );
}

export default Contact;
