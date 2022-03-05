import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css';
import photo from '../../images/photo.jpg';

function About() {
  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <div className="about">
        <h1 className="about__heading">About me</h1>
        <div className="about__main-text">
          <div className="about__text-container">
            <p className="about__paragraph">
              I am Maxim. Developer mostly specialized in frontend
              (JavaScript, HTML, CSS, React.js, TypeScript) and
              backend (Node.js, MongoDB, PHP, MySQL).
              I love live my life, try and create new things.
            </p>
            <img className="about__photo" src={photo} alt="" />
          </div>

          <p className="about__paragraph">
            Everyday I work on improving my skills
            <ul className="about__list">
              <li className="about__list-item">
                <p className="about__list-text">- Independent projects on React.js (which I have in my portfolio)</p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">- Algorithms tasks on JavaScript on CodeWars (Profile: https://www.codewars.com/users/maximka76667)</p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">- Non-standard tasks on CSS on CSSBattle (Profile: https://cssbattle.dev/player/max76667)</p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">- TypeScript books and tasks</p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">- Learning new technologies (e.g now it&apos;s Redux)</p>
              </li>
            </ul>
          </p>

          <p className="about__paragraph">
            Graduated school with gold medal of honor, I know several languages.
            Able to achieve goals and overcome obstacles.
          </p>

          <p className="about__paragraph">
            Something else about me?
            <ul className="about__list">
              <li className="about__list-item"><p className="about__list-text">- Electric guitars. When I was 15 I tried to record my own music</p></li>
              <li className="about__list-item"><p className="about__list-text">- Languages. I speak English and Spanish at an intermediate level (B2)</p></li>
              <li className="about__list-item"><p className="about__list-text">- Travels. In last 3 years I have visited 4 countries</p></li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
