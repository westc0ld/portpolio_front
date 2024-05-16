// Skill.js

import React from 'react';

const Skill = ({ name, level }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-32">{name}</div>
      <div className="h-4 bg-gray-200 rounded-full flex-grow">
        <div className={`h-full bg-indigo-500 rounded-full w-${level}`} />
      </div>
      <div className="ml-2">{level}%</div>
    </div>
  );
};

export default Skill;

