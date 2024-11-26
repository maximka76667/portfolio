import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Helmet } from 'react-helmet-async';
import photo from '../../assets/images/beard3.jpg';
import { Cursor } from '../../components';

function Home() {
  gsap.registerPlugin(useGSAP);
  const nameRef = useRef();
  const photoBackgroundRef = useRef();

  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useGSAP(() => {
    let margin = '+=100';
    if (resolution.width <= 768) {
      margin = '+=150';
    } else if (resolution.width <= 1024) {
      margin = '+=30';
    }
    console.log(resolution, margin);
    gsap.to(nameRef.current, { marginLeft: margin, duration: 3 });
    gsap.to(photoBackgroundRef.current, {
      scale: 0.9,
      rotation: 333,
      repeat: -1,
      repeatDelay: 1,
      duration: 30,
      yoyo: true
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 5000); // Check every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>Maxim Grivennyy</title>
      </Helmet>
      <div className="home">
        <div className="home__figure" />
        <div className="about-me__heart">❤</div>
        <div className="about-me">
          <h1 className="about-me__greetings">
            <p className="about-me__im">I‘m</p>
            <div ref={nameRef} className="about-me__name">
              Maxim
            </div>
            <p className="about-me__love">I‘m web developer and I love it! </p>
          </h1>
          <div className="about-me__photo-wrapper">
            <img className="about-me__photo" src={photo} alt="Me" />
            <p className="about-me__hint">
              Reload page and{' '}
              <span className="about-me__hint_colored">colors</span> will
              change!
            </p>
            <div
              ref={photoBackgroundRef}
              className="about-me__photo-background"
            />
          </div>
        </div>
        <div className="home__links">
          <Link to="/projects" className="home__link">
            My projects
          </Link>
        </div>
      </div>
      <Cursor />
    </div>
  );
}

export default Home;
