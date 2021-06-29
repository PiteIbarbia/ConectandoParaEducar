import React from 'react';
import './App.css';
import Footer from '../src/components/Utilities/Footer/Footer';
import Routes from '../src/Routes';

function App() {
  return (
    <div className="bg">
      <Routes />
      <Footer />
    </div>
  )
}

export default App;