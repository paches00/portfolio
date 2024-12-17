import { useState } from 'react';
import './App.css';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      // case 'about':
      //   return <About />;
      case 'projects':
        return <Projects />;
      default:
        return (
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
              Welcome to my website! I'm a computer science graduate with a strong programming background and a passion for innovative tech-based problem solving. Check out some of my projects and feel free to reach out.
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
        );
    }
  };

  return (
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <div className="nav-links">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="nav-name">home</a>
              {/* <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>about</a> */}
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }}>projects</a>
              <a href="https://cv.fheshiki.com" target="_blank" rel="noopener noreferrer">resume</a>
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
              <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
            </button>
          </div>
        </div>
      </nav>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
      </button>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setIsSidebarOpen(false); }}>home</a>
        {/* <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); setIsSidebarOpen(false); }}>about</a> */}
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); setIsSidebarOpen(false); }}>projects</a>
        <a href="https://cv.fheshiki.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsSidebarOpen(false)}>resume</a>
        <div className="sidebar-footer">
          <div className="social-nav-app">
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
        </div>
      </aside>
      <main className="content">
        {renderPage()}
      </main>
      <button className="theme-toggle-app mobile-theme-toggle-app" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
      </button>
    </div>
  );
}

export default App;