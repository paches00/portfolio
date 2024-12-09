import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight, 
  faArrowLeft,
  faArrowUpRightFromSquare,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectModal = ({ project, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  if (!project) return null;

  // Combine images and videos into a single media array
  const mediaItems = [
    ...(project.images || []),
    ...(project.videos || []),
  ];

  const hasMedia = mediaItems.length > 0;

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === (mediaItems.length - 1) ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? (mediaItems.length - 1) : prev - 1
    );
  };

  const isVideo = (media) => media.endsWith('.mp4');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-button" onClick={onClose}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
          </button>
          <div className="modal-header-content">
            <h2 className="modal-title">{project.title}</h2>
            <div className="project-actions">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
              {project.codeLink && (
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              {project.pdfLink && (
                <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {hasMedia && (
          <div className="modal-media-banner">
            {isVideo(mediaItems[currentMediaIndex]) ? (
              <video controls src={mediaItems[currentMediaIndex]} />
            ) : (
              <img 
                src={mediaItems[currentMediaIndex]} 
                alt={`${project.title} media ${currentMediaIndex + 1}`} 
              />
            )}
            {mediaItems.length > 1 && (
              <>
                <button className="media-nav prev" onClick={prevMedia}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="media-nav next" onClick={nextMedia}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </>
            )}
          </div>
        )}

        <div className="modal-info">
          <div className="modal-section">
            <h3>Description</h3>
            <div>
              <p className={showFullDescription ? '' : 'truncate-3'}>
                {project.description}
              </p>
              {project.description.length > 200 && (
                <button 
                  className="show-more-btn"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </div>

          <div className="modal-section">
            <h3>Technologies</h3>
            <div className="modal-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="modal-tag">{tech}</span>
                ))}
              </div>
          </div>

          <div className="modal-section">
            <h3>Tags</h3>
            <div className="modal-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="modal-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;