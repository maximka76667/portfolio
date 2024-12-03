import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// eslint-disable-next-line react/prop-types
const Markdown = ({ markdownContent }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeBadges = async () => {
      const elements = containerRef.current.querySelectorAll('img');

      if (elements.length <= 0) {
        return;
      }

      elements.forEach((element) => {
        const currentWidth = element.naturalWidth;

        if (!currentWidth) {
          return;
        }

        const newWidth = currentWidth * 1.5;
        element.style.width = `${newWidth}px`;
      });
    };

    if (markdownContent == '' || !containerRef.current) {
      return;
    }

    resizeBadges();
  }, [markdownContent, containerRef.current]);

  return (
    <div ref={containerRef} className="about__markdown-container">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
