import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Home />
      <div className='outer-container center'>
        <div className='container'>
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
      
      <div className="author center">
        <p>Made by Bhumit Patel</p>
      </div>
    </>
  );
}

export default App;
