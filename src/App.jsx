import {useState} from 'react';

import Header from './components/Header';
import NavbarForSmallScreen from './components/NavbarForSmallScreen';
import Intro from './pages/Intro';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const App = () => {
  const [smallScreenClass, setSmallScreenClass] = useState('');
  const [hiddenClass, setHiddenClass] = useState('');
  return (
    <div className={`App ${hiddenClass}`}>
      <Header stateMethod={setSmallScreenClass} setHiddenClass={setHiddenClass} />
      <NavbarForSmallScreen state={smallScreenClass} stateMethod={setSmallScreenClass} setHiddenClass={setHiddenClass} />
      <Intro />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
