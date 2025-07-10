import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contacts';
// import other components...

const App = () => {
 

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects/>
      <Contact/>
      {/* other sections */}
    </>
  );
};

export default App;
