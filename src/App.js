import React from 'react';
import './App.module.css';

// Import Components
import { NavBar } from './assests/components/NavBar/NavBar';
import { Home } from './assests/components/Home/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
