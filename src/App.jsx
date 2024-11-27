import { useState } from 'react';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [theme, setTheme] = useState('dark');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <div className="nav-links">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="nav-name">Heshiki</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>home</a>
              <a href="#about" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}>about</a>
              <a href="#projects" onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}>projects</a>
              <a href="#resume" onClick={(e) => {
                e.preventDefault();
                scrollToSection('resume');
              }}>resume</a>
            </div>
          </div>
          <div className="nav-right">
            <div className="social-nav">
              <a href="mailto:pacoheshiki@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/paches00" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/fheshiki" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>
          </div>
        </div>
      </nav>

      <main className="content">
        <section id="home" className="section home">
          <div className="profile-image">
            <img 
              src="/images/personal/1716378519871.jpg"
              alt="Francisco Heshiki"
              className="avatar-image"
            />
          </div>
          <h1>Francisco Heshiki de las Casas</h1>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-links">
            <a href="mailto:pacoheshiki@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/paches00" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/fheshiki" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>
        
        <div className="section-divider"></div>
        
        <section id="about" className="section">
          <About />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="projects" className="section">
          <Projects />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="resume" className="section">
          <Resume />
        </section>
      </main>
    </div>
  );
}

export default App;
