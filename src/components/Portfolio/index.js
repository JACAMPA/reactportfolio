import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Day Planner',
      description: 'Plan your day',
      link: "https://jacampa.github.io/Day_Planner/",
      repo: "https://github.com/JACAMPA/Day_Planner"
    },
    {
      name: 'Chordbase',
      description: 'Learn to play like a pro!',
      link: "https://amber-robeck.github.io/project1/",
      repo: "https://github.com/Amber-Robeck/project1"
    },
    {
      name: 'Password Generator',
      description: 'Stay secured!',
      link: "https://jacampa.github.io/HW_PassGen",
      repo: "https://github.com/JACAMPA/HW_PassGen"
    },
    ]);
  

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;