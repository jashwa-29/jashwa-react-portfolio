// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
// import AOS from 'aos'
import 'aos/dist/aos.css'
// import $ from "jquery";
import React from 'react';
// import Typed from 'typed.js';




function App() {

  return (
  <div>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  </div>
    
   



  );
}

export default App;
