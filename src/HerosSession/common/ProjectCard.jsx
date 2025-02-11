import React from 'react'

const ProjectCard = ({src ,link , h3 ,p ,alt}) => {
  return (
    <a href={link} target='_balnk'>
      <img className="hover" src={src} alt={alt} />
          <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard
