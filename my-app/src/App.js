import './App.css';
import './Test.css';
import { my_profile, skills_character, achievements_character, my_html, my_css, my_js, my_python, my_sql, my_cpp, my_csharp, my_bootstrap, my_jquery, my_react, my_django, my_flask, my_sqlite, my_mysql, the_great_hackathon, introduction_to_html, introduction_to_css, introduction_to_javascript, javascript_intermediate } from '.';

import React, { useState, useEffect, useRef } from 'react';
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
    const [isSkillsVisible, setIsSkillsVisible] = useState(false);
    const [isCharacterAnimationStarted, setIsCharacterAnimationStarted] = useState(false);
    const [isCharacterAnimationFinished, setIsCharacterAnimationFinished] = useState(false);
    const [isContentAnimationFinished, setIsContentAnimationFinished] = useState(false);
    const [isTitleAnimationFinished, setIsTitleAnimationFinished] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const skills = document.querySelector('.skills');
            const isSkillsVisible = skills.getBoundingClientRect().bottom <= window.innerHeight;

            if (isSkillsVisible) {
                setIsSkillsVisible(isSkillsVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (isSkillsVisible && isCharacterAnimationFinished && isContentAnimationFinished && isTitleAnimationFinished) {
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
                <div onAnimationEnd={handleContentAnimationEnd} className={`content ${isSkillsVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
                    <div className={`list ${isContentAnimationFinished ? 'animate' : ''}`}>
                        <div>
                            <h3>MORE</h3>
                            <ul>
                                <li>Linux, Windows</li>
                                <li>Git, Github</li>
                                <li>Machine Learning</li>
                                <li>Data Analysis</li>
                                <li>Pandas, Numpy, Matplotlib, Plotly</li>
                            </ul>
                        </div>
                        <div>
                            <h3>BASIC KNOWLEDGE</h3>
                            <ul>
                                <li>C++&nbsp;<img src={my_cpp} alt="cpp" /></li>
                                <li>C#&nbsp;<img src={my_csharp} alt="csharp" /></li>
                                <li>Bootstrap&nbsp;<img src={my_bootstrap} alt="bootstrap" /></li>
                                <li>JQuery&nbsp;<img src={my_jquery} alt="jquery" /></li>
                                <li>React&nbsp;<img src={my_react} alt="react" /></li>
                                <li>Flask&nbsp;<img src={my_flask} alt="flask" /></li>
                            </ul>
                        </div>
                        <div>
                            <h3>ADVANCED KNOWLEDGE</h3>
                            <ul>
                                <li>HTML&nbsp;<img src={my_html} alt="html" /></li>
                                <li>CSS&nbsp;<img src={my_css} alt="css" /></li>
                                <li>JavaScript&nbsp;<img src={my_js} alt="javascript" /></li>
                                <li>Python&nbsp;<img src={my_python} alt="python" /></li>
                                <li>SQL&nbsp;<img src={my_sql} alt="sql" /></li>
                                <li>Django&nbsp;<img src={my_django} alt="django" /></li>
                                <li>Sqlite3&nbsp;<img src={my_sqlite} alt="sqlite3" />, MySQL&nbsp;<img src={my_mysql} alt="mysql" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div onAnimationEnd={handleTitleAnimationEnd} className={`title ${isSkillsVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
                    <h2>SKILLS</h2>
                </div>
                <div onAnimationStart={handleCharacterAnimationStart} onAnimationEnd={handleCharacterAnimationEnd} className={`character ${isSkillsVisible ? 'animate' : ''}`}>
                    <img src={skills_character} alt="" />
                    <div className={`${isSkillsVisible && isCharacterAnimationStarted ? 'animate' : ''}`}></div>
                </div>
            </section>
        </>
    );
}

function Achievements({ /*onAchievementsComplete*/ }) {
    const [isAchievementsVisible, setIsAchievementsVisible] = useState(true);
    const [isCharacterAnimationStarted, setIsCharacterAnimationStarted] = useState(false);
    const [isCharacterAnimationFinished, setIsCharacterAnimationFinished] = useState(false);
    const [isContentAnimationFinished, setIsContentAnimationFinished] = useState(false);
    const [isTitleAnimationFinished, setIsTitleAnimationFinished] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const achievements = document.querySelector('.achievements');
            const isAchievementsVisible = achievements.getBoundingClientRect().bottom <= window.innerHeight;

            if (isAchievementsVisible) {
                setIsAchievementsVisible(isAchievementsVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /*
    if (isAchievementsVisible && isCharacterAnimationFinished && isContentAnimationFinished && isTitleAnimationFinished) {
        onAchievementsComplete(true);
    }
    */

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


    function Slider() {
        const sliderItems = [
            { img: introduction_to_html, name: 'Introduction to HTML Certificate' },
            { img: introduction_to_css, name: 'Introduction to CSS Certificate' },
            { img: introduction_to_javascript, name: 'Introduction to JavaScript Certificate' },
            { img: javascript_intermediate, name: 'JavaScript Intermediate Certificate' },
            { img: the_great_hackathon, name: 'The Great Hackathon Certificate' },
        ]

        let currentIndex = 0;

        const handleNext = () => {
            currentIndex = (currentIndex + 1) % sliderItems.length;
        };

        const handlePrev = () => {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        };

        return (
            <div className="list">
                <button className="prev" onClick={handlePrev} >
                    <i className="fa fa-angle-double-left"></i>
                </button>
                <div className="items">
                    <img src={sliderItems[currentIndex].img} alt={sliderItems[currentIndex].name} />
                </div>
                <button className="next" onClick={handleNext}>
                    <i className="fa fa-angle-double-right"></i>
                </button>
            </div>
        );
    }


    return (
        <>
            <section className="achievements">
                <div onAnimationEnd={handleTitleAnimationEnd} className={`title ${isAchievementsVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
                    <h2>ACHIEVEMENTS</h2>
                </div>
                <div onAnimationEnd={handleContentAnimationEnd} className={`content ${isAchievementsVisible && isCharacterAnimationFinished ? 'animate' : ''}`}>
                    <Slider />
                </div>
                <div onAnimationStart={handleCharacterAnimationStart} onAnimationEnd={handleCharacterAnimationEnd} className={`character ${isAchievementsVisible ? 'animate' : ''}`}>
                    <img src={achievements_character} alt="" />
                    <div className={`${isAchievementsVisible && isCharacterAnimationStarted ? 'animate' : ''}`}></div>
                </div>
            </section>
        </>
    );
}

function Contact() {
    const [isContactVisible, setIsContactVisible] = useState(false);
    const [isCardAnimationFinished, setIsCardAnimationFinished] = useState(false);
    const [isDetailClicked, setIsDetailClicked] = useState(false);
    const [isMessageClicked, setIsMessageClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const contact = document.querySelector('.contact');
            const isContactVisible = contact.getBoundingClientRect().bottom <= window.innerHeight;

            if (isContactVisible) {
                setIsContactVisible(isContactVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCardAnimationEnd = () => {
        setIsCardAnimationFinished(true);
    }

    const handleDetailClick = () => {
        if (!isDetailClicked) {
            setIsDetailClicked(!isDetailClicked);
            setIsMessageClicked(false);
        }
    };

    const handleMessageClick = () => {
        if (!isMessageClicked) {
            setIsMessageClicked(!isMessageClicked);
            setIsDetailClicked(false);
        }
    };

    const handleMessageClose = () => {
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
            { name: 'Your name', email: '', subject: '', message: '' }
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
                <div className={`message ${isMessageClicked && isCardAnimationFinished ? 'entrance' : 'exit'}`}>
                    <button onClick={handleMessageClose} className='close'>&times;</button>
                    <h2>Hi! Let's connect</h2>
                    <form action="" onSubmit={handleSubmit}>
                        {formFields.map((field) => (
                            <div key={field.name}>
                                {field.type === 'textarea' ? (
                                    <textarea name={field.name} id={field.name} placeholder={field.initial} onChange={handleChange} cols="30" rows="10" required></textarea>
                                ) : (
                                    <input name={field.name} id={field.name} type={field.type} placeholder={field.initial} onChange={handleChange} required />
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
                    <div onAnimationEnd={handleCardAnimationEnd} className={`card ${isContactVisible ? 'animate' : ''}`}>
                        <div className='card-top'>
                            <p>
                                Skilled and motivated computer programmer and developer, knowledgeable in web development and data science, prioritizing to develop high-quality programs and organized codes. A good communicator with excellent problem-solving skills and a passion for continuous learning.
                            </p>
                            <img src={my_profile} alt="" />
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
                    <Message />
                </div>
                <div className='contact-bottom'>
                    <div className='referrence'>
                        <div className='left'>
                            <h4>REFERRENCE</h4>
                            <ul>
                                <li><a href="https://www.vecteezy.com/free-png/cartoon" target='_blank'>Cartoon PNGs by Vecteezy</a></li>
                            </ul>
                        </div>
                        <div className='middle'>
                            <h4>CONTACT</h4>
                            <ul>
                                <li>Email: ebrian.cs@gmail.com</li>
                                <li>Phone: +639267067396</li>
                            </ul>
                        </div>
                        <div className='right'>
                            <h4>DEVELOPMENT TOOLS</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>JSX</li>
                            </ul>
                            <ul>
                                <li>Linux</li>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Vscode</li>
                            </ul>
                        </div>
                        <div className='end'>
                            <p>Developed by John Ebrian S. Manalo</p>
                        </div>
                    </div>
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
        setIsAchievementsCompleted(completed);
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

export default Achievements;
