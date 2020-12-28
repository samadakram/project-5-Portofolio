import React from 'react';
import './App.module.css';

// Import Components
import { NavBar } from './assests/components/NavBar/NavBar';
import { Home } from './assests/components/Home/Home';
import { Services } from './assests/components/Services/Services';
import { Skills } from './assests/components/Skills/Skills';
import { Projects } from './assests/components/Projects/Projects';
import { Contact } from './assests/components/Contact/Contact';
import { Footer } from './assests/components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
