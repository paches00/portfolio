import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faDownload} from '@fortawesome/free-solid-svg-icons';
import projectsData from '../data/projects.json';
import ProjectModal from './ProjectModal';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projectsData.projects);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleTagClick = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);

    const filtered = projectsData.projects.filter(project =>
      (project.tags && updatedTags.every(tag => project.tags.includes(tag))) || updatedTags.length === 0
    );

    setFilteredProjects(filtered);
  };

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="tags-container">
        {shuffleArray(Array.from(new Set(projectsData.projects.flatMap(project => project.tags)))).map(tag => (
          <button
            key={tag}
            className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => handleTagClick(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-placeholder" />
              )}
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="truncate-2">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    Code <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                {project.pdfLink && (
                  <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                    PDF <FontAwesomeIcon icon={faDownload} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Projects;
