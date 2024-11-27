import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  lazy,
  Suspense
} from 'react';
import './About.css';
import { Helmet } from 'react-helmet-async';
import photo from '../../assets/images/nie-cropped.jpg';
import { Cursor } from '../../components';

import CursorContext from '../../contexts/CursorContext';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';

const Markdown = lazy(() => import('../../components/Markdown/Markdown'));

function About() {
  const cursorColor = useContext(CursorContext);
  const [markdownContent, setMarkdownContent] = useState('');

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

    fetchMarkdown();
  }, []);

  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <div className="about">
        <h1 className="about__heading">About me</h1>

        <div className="about__main-text">
          <Suspense fallback={<SkeletonLoader />}>
            {markdownContent ? (
              <Markdown markdownContent={markdownContent} />
            ) : (
              <SkeletonLoader />
            )}
          </Suspense>
        </div>
      </div>
      <img className="about__photo" src={photo} alt="Me" />

      <Cursor color={cursorColor} />
    </>
  );
}

export default About;
