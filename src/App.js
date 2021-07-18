import './App.css'
import Header from './component/Header';
import Home from './component/Home';
// import { Route } from 'react-router-dom'
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="contact">
        <Contact />
      </section>



    </>
  );
}

export default App;
