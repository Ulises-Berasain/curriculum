import './App.css';
import Menu from "components/Menu";
import Curriculum from "components/Curriculum";
import AboutMe from "components/AboutMe";
import Experience from "components/Experience";
import Studies from "components/Studies";
import Portfolio from "components/Portfolio";
import Aptitudes from "components/Aptitudes";
import Contact from "components/Contact";
import Logo from "components/Logo";

function App() {
  return (
    <div className="App">
      <div className="lead-content">
        <header className="header">
          <Menu/>
        </header>

        <div className="container-cv">
          <Curriculum/>
        </div>
      </div>

      <div className="container-am">
        <AboutMe/>
      </div>

      <div className="container-experience">
        <Experience/>
      </div>

      <div className="container-studies">
        <Studies/>
      </div>

      <div className="container-portfolio">
        <Portfolio/>
      </div>

      <div className="container-aptitudes">
        <Aptitudes/>
      </div>

      <div className="container-contact">
        <Contact/>
      </div>

      <div className="container-logo">
        <Logo/>
      </div>
    </div>
  );
};

export default App;
