import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    title: "Home",
    description: "A chatbot project",
    link: "/",
  },
  {
    title: "About",
    description: "Information about the project",
    link: "/about",
  },
  {
    title: "Skills",
    description: "Information about skills",
    link: "/skills",
  },
  {
    title: "Blog",
    description: "Content about the blog",
    link: "/blog",
  },
  {
    title: "Contact",
    description: "Contact information",
    link: "/contact",
  },
];

const Contents = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(''); // left or right

  const nextProject = () => {
    if (animating) return;

    setDirection('right');
    setAnimating(true);
  };

  const prevProject = () => {
    if (animating) return;

    setDirection('left');
    setAnimating(true);
  };

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);

        if (direction === 'right') {
          const nextProjectIndex = (currentProjectIndex + 1) % projects.length;
          setCurrentProjectIndex(nextProjectIndex);
        } else if (direction === 'left') {
          const prevProjectIndex = (currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1);
          setCurrentProjectIndex(prevProjectIndex);
        }
      }, 800); // Adjust according to animation time

      return () => clearTimeout(timer);
    }
  }, [animating, direction, currentProjectIndex, projects.length]);

  return (
    <div className="container">
      <div className="project_name">My Projects</div>
      <div className={`project-container ${animating ? `animating-${direction}` : ''}`}>
        {/* Exiting left project box */}
        <div className={`section-box side-left ${direction === 'left' ? 'exiting-left' : ''}`} onClick={prevProject}>
          <h2 className="title">
            {projects[(currentProjectIndex - 1 + projects.length) % projects.length].title}
          </h2>
          <p className="text-base">
            {projects[(currentProjectIndex - 1 + projects.length) % projects.length].description}
          </p>
        </div>

        {/* Exiting right project box */}
        <div className={`section-box side-right ${direction === 'right' ? 'exiting-right' : ''}`} onClick={nextProject}>
          <h2 className="title">
            {projects[(currentProjectIndex + 1) % projects.length].title}
          </h2>
          <p className="text-base">
            {projects[(currentProjectIndex + 1) % projects.length].description}
          </p>
        </div>

        {/* Center project box */}
        <div className="section-box center" onClick={() => console.log("Center box clicked!")}>
          <h2 className="title">
            {projects[currentProjectIndex].title}
          </h2>
          <p className="text-base">
            {projects[currentProjectIndex].description}
          </p>
        </div>

        {/* Entering new left project box */}
        <div className={`section-box new-side new-side-left ${animating && direction === 'left' ? 'animating' : ''}`} onClick={prevProject}>
          <h2 className="title">
            {direction === 'left'
              ? projects[(currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1)].title
              : projects[(currentProjectIndex + 1) % projects.length].title
            }
          </h2>
          <p className="text-base">
            {direction === 'left'
              ? projects[(currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1)].description
              : projects[(currentProjectIndex + 1) % projects.length].description
            }
          </p>
        </div>

        {/* Entering new right project box */}
        <div className={`section-box new-side new-side-right ${animating && direction === 'right' ? 'animating' : ''}`} onClick={nextProject}>
          <h2 className="title">
            {direction === 'right'
              ? projects[(currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1)].title
              : projects[(currentProjectIndex + 1) % projects.length].title
            }
          </h2>
          <p className="text-base">
            {direction === 'right'
              ? projects[(currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1)].description
              : projects[(currentProjectIndex + 1) % projects.length].description
            }
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="navigation">
        <button className="arrow-button" onClick={prevProject}>
          <FaChevronLeft />
        </button>
        <button className="arrow-button" onClick={nextProject}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Contents;
