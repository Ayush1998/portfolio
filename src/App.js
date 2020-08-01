import React from "react";
import "./App.css";
import Particle from "./Particle";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Home from "./components/home/Home";
import Work from "./components/Work/Work";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Home />
        <Work />
        <Skills />
        <About />
        <Contact />
      </div>

      <div className="footer">&copy; 2020 Made by Ayush Mudgal</div>
      <Particle />
    </div>
  );
}

export default App;
