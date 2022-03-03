import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import photo from '../../images/photo.jpg';

function Home() {
  return (
    <>
      <Helmet>
        <title>Maxim Grivennyy</title>
      </Helmet>
      <div className="home">
        <div className="about-me">
          <h1 className="about-me__greetings">
            I‘m
            {' '}
            <span className="about-me__name">Maxim</span>
            . I‘m web developer and I love it!
            {' '}
            <span className="about-me__heart">❤</span>
          </h1>
          <img className="about-me__photo" src={photo} alt="" />
        </div>
        <div className="home__links">
          <Link to="/projects" className="home__link">Look my projects</Link>
          <Link to="/blog" className="home__link">Read my blog</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
