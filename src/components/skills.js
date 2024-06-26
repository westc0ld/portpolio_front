import React from 'react';

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <div className="skill_name">{name}</div>
      <div className="graph_container">
        <div className="graph_background">
          <div className="graph_foreground" style={{ width: `${level}%` }}>
            <div className="graph_percent">{`${level}%`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
