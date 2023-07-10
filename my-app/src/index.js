import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// main
import my_profile from './images/main/profile.png';

// vecteezy
import skills_character from './images/vecteezy/img2.png';
import achievements_character from './images/vecteezy/img3.png';

// skills
import my_html from './images/skills/html.png';
import my_css from './images/skills/css.png';
import my_js from './images/skills/javascript.png';
import my_python from './images/skills/python.png';
import my_sql from './images/skills/sql.png';
import my_cpp from './images/skills/cpp.png';
import my_csharp from './images/skills/csharp.png';
import my_bootstrap from './images/skills/bootstrap.png';
import my_jquery from './images/skills/jquery.png';
import my_react from './images/skills/react.png';
import my_django from './images/skills/django.png';
import my_flask from './images/skills/flask.png';
import my_sqlite from './images/skills/sqlite.png';
import my_mysql from './images/skills/mysql.png';

// achievements
import the_great_hackathon from './images/certificate/the_great_hackathon.jpg';
import introduction_to_html from './images/certificate/introduction_to_html.jpg';
import introduction_to_css from './images/certificate/introduction_to_css.jpg';
import introduction_to_javascript from './images/certificate/introduction_to_javascript.jpg';
import javascript_intermediate from './images/certificate/javascript_intermediate.jpg';

export { my_profile, skills_character, achievements_character, my_html, my_css, my_js, my_python, my_sql, my_cpp, my_csharp, my_bootstrap, my_jquery, my_react, my_django, my_flask, my_sqlite, my_mysql, the_great_hackathon, introduction_to_html, introduction_to_css, introduction_to_javascript, javascript_intermediate };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
