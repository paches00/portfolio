import React from 'react';

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    // Add more skills
  ];

  return (
    <section className="about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a software developer passionate about creating elegant solutions to complex problems.
            With a background in computer science and a love for learning, I'm constantly exploring
            new technologies and best practices.
          </p>
          <p>
            When I'm not coding, you can find me [your interests/hobbies].
          </p>
        </div>
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 