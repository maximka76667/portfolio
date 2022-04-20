import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css';
import photo from '../../assets/images/photo-about.jpg';

function About() {
  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <div className="about">
        <h1 className="about__heading">About me</h1>
        <div className="about__main-text">
          <img className="about__photo" src={photo} alt="Me" />
          <p className="about__paragraph">
            I am Maxim. Developer mostly specialized in frontend and partly in
            backend.
            I love living my life, trying and creating new things.
          </p>
          <div className="about__paragraph">
            <h2 className="about__list-name">Every day I work on improving my skills</h2>
            <ul className="about__list">
              <li className="about__list-item">
                <p className="about__list-text"> Independent projects on React.js (which I have in my portfolio)</p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">
                  Algorithms tasks on JavaScript on
                  {' '}
                  <a href="https://www.codewars.com">CodeWars</a>
                  .
                  {' '}
                  <a href="https://www.codewars.com/users/maximka76667">Profile</a>
                </p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">
                  Non-standard tasks on CSS on
                  {' '}
                  <a href="https://www.cssbattle.dev">CSSBattle</a>
                  .
                  {' '}
                  <a href="https://cssbattle.dev/player/max76667">Profile</a>
                </p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">TypeScript books and tasks</p>
              </li>
              <li className="about__list-item">
                <p className="about__list-text">Learning new technologies (e.g now it&apos;s Redux)</p>
              </li>
            </ul>
          </div>

          <p className="about__paragraph">
            Graduated school with gold medal of honor, I know several languages.
            Able to achieve goals and overcome obstacles.
          </p>

          <div className="about__paragraph">
            <h2 className="about__list-name">What else do i like?</h2>
            <ul className="about__list">
              <li className="about__list-item"><p className="about__list-text">Electric guitars. When I was 15 I tried to record my music</p></li>
              <li className="about__list-item"><p className="about__list-text">Languages. I speak English and Spanish at an intermediate level (B2)</p></li>
              <li className="about__list-item"><p className="about__list-text">Travels. In the last 3 years, I have visited 4 countries</p></li>
              <li className="about__list-item"><p className="about__list-text">Coca-Cola (not Pepsi)</p></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
