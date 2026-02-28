import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Agency from './components/Agency';
import Cases from './components/Cases';
import Legacy from './components/Legacy';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Agency />
        <Cases />
        <Legacy />
      </main>
      <Footer />
    </>
  );
}

export default App;
