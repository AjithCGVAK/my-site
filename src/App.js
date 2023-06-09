import React from 'react';
import { BrowserRouter, Routes, Link , Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

import TestComponent from './Components/TestComponent';
import Counter from './Components/Counter';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
      <div class="header"><Header/></div>
        <div class="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
      <TestComponent name="Ajith" />
      <Counter/>
    </div>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="about" element={<About/>}/>
        <Route exact path="contact" element={<Contact/>}/>
      </Routes>
      <div class="footer"><Footer/></div>
      </BrowserRouter>
    );
  }
}
export default App;
