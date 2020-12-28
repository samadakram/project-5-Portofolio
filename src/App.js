import React from 'react';
import './App.module.css';

// Import Components
import { NavBar } from './assests/components/NavBar/NavBar';
import { Home } from './assests/components/Home/Home';
import { Services } from './assests/components/Services/Services';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
