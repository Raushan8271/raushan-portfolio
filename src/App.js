import './App.css'
import Header from './component/Header';
import Home from './component/Home';
import { Route } from 'react-router-dom'
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/contact" >
        <Contact />
      </Route>

    </>
  );
}

export default App;
