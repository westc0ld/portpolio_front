import React, { useState } from 'react';

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

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (

      <div className="container">
        <div className="project_name">my projects</div>
        <div className="project-container">
          {/* 왼쪽 프로젝트 박스 */}
          <div className={`section-box side-left ${currentProjectIndex === 0 ? 'center' : ''}`}>
            <h2 className="title">
              {projects[(currentProjectIndex - 1 + projects.length) % projects.length].title}
            </h2>
            <p className="text-base">
              {projects[(currentProjectIndex - 1 + projects.length) % projects.length].description}
            </p>
          </div>
          
          {/* 중앙 프로젝트 박스 */}
          <div className="section-box center">
            <h2 className="title">
              {projects[currentProjectIndex].title}
            </h2>
            <p className="text-base">
              {projects[currentProjectIndex].description}
            </p>
          </div>

          {/* 오른쪽 프로젝트 박스 */}
          <div className={`section-box side-right ${currentProjectIndex === projects.length - 1 ? 'center' : ''}`}>
            <h2 className="title">
              {projects[(currentProjectIndex + 1) % projects.length].title}
            </h2>
            <p className="text-base">
              {projects[(currentProjectIndex + 1) % projects.length].description}
            </p>
          </div>
        </div>

        {/* 네비게이션 버튼 */}
        <div className="navigation">
          <button onClick={prevProject}>&lt; Prev</button>
          <button onClick={nextProject}>Next &gt;</button>
        </div>
      </div>

  );
};

export default Contents;
