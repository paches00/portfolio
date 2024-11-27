import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <section className="resume-page">
      <div className="resume-header">
        <h1>Resume</h1>
        <a href="/path-to-your-resume.pdf" download className="download-button">
          <FontAwesomeIcon icon={faDownload} /> Download PDF
        </a>
      </div>
      
      <div className="resume-content">
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Your University</h3>
            <p className="date">2019 - 2023</p>
            <p>Bachelor of Science in Computer Science</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-item">
            <h3>Company Name</h3>
            <p className="date">2023 - Present</p>
            <p className="position">Software Developer</p>
            <ul>
              <li>Accomplishment 1</li>
              <li>Accomplishment 2</li>
              <li>Accomplishment 3</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Certifications</h2>
          <div className="resume-item">
            <h3>Certification Name</h3>
            <p className="date">2023</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Resume; 