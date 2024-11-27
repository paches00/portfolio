import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import projectsData from '../data/projects.json';
import Tags from './Tags';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projectsData.projects;
    return projectsData.projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const handleTagClick = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-page">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        <div className="projects-content">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => handleProjectClick(project)}>
                <div className="project-image">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                    />
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
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      Code <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tags-sidebar">
          <h1 className="section-title">Tags</h1>
          <Tags 
            tags={allTags}
            selectedTags={selectedTags}
            onTagClick={handleTagClick}
          />
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default Projects;
