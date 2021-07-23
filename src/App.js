import './App.css'
import Header from './component/Header';
import Home from './component/Home';
// import { Route } from 'react-router-dom'
import Contact from './component/Contact';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <section id="footer">
        <Footer />
      </section> */}
    </>
  );
}

export default App;
