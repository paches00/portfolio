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
      <iframe
        src="http://localhost:3000"
        title="Resume"
        width="100%"
        height="1000px"
        style={{ border: 'none' }}
      />
    </section>
  );
};

export default Resume; 