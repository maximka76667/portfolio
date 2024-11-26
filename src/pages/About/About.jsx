import React, { useContext, useEffect, useState, useRef } from 'react';
import './About.css';
import { Helmet } from 'react-helmet-async';
import photo from '../../assets/images/nie-cropped.jpg';
import { Cursor } from '../../components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import CursorContext from '../../contexts/CursorContext';

function About() {
  const cursorColor = useContext(CursorContext);

  const [markdownContent, setMarkdownContent] = useState('');

  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/maximka76667/maximka76667/main/README.md'
        );
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error fetching the markdown file:', error);
      }
    }

    // fetchMarkdown();

    const resizeBadges = async () => {
      await fetchMarkdown();

      const elements = await containerRef.current.querySelectorAll('img');

      elements.forEach((element) => {
        const currentWidth = element.offsetWidth;
        const newWidth = currentWidth * 1.5;
        element.style.width = `${newWidth}px`;
      });
    };

    if (!containerRef.current) {
      return null;
    }

    resizeBadges();
  }, [containerRef.current]);

  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <div className="about">
        <h1 className="about__heading">About me</h1>

        <div className="about__main-text">
          <div ref={containerRef} className="about__markdown-container">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <img className="about__photo" src={photo} alt="Me" />

      <Cursor color={cursorColor} />
    </>
  );
}

export default About;
