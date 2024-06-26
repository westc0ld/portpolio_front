// Skills.js

import React from 'react';
import Skill from './skills';


const skillsData = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 80 },
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


const Skills_info = () => {
  return (
    <div className="myskills">
      <h2 className="skill_name">Main Skills</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills_info;

