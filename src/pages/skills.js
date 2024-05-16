// Skills.js

import React from 'react';
import Skill from '../components/skills';
import Layout from "../components/layout";


const skillsData = [
    { name: 'HTML5', level: 80 },
    { name: 'CSS3', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 30 },
    { name: 'MySQL', level: 30 },
    { name: 'Github', level: 40 },
    { name: 'Python', level: 40 },
    { name: 'Node.js', level: 40 },
    { name: 'AWS', level: 40 },
    { name: 'Flask', level: 40 },
  ];


const Skills = () => {
  return (
    <Layout>
    <div className="max-w-xs mx-auto">
      <h2 className="text-xl font-bold mb-4">Main Skills</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
    </Layout>
  );
};

export default Skills;

