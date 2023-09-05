import {useState} from 'react';

import {Routes, Route, useLocation} from 'react-router-dom';

import Header from './components/Header';
import NavbarForSmallScreen from './components/NavbarForSmallScreen';
import Intro from './pages/Intro';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import LinkTree from './pages/LinkTree';
import HtmlCssProjects from './pages/HtmlCssProjects';
import HtmlCssJsProjects from './pages/HtmlCssJsProjects';
import ReactProjects from './pages/ReactProjects';

const App = () => {
  const [smallScreenClass, setSmallScreenClass] = useState('');
  const [hiddenClass, setHiddenClass] = useState('');
  const location = useLocation();
  return (
    <div className={`App ${hiddenClass}`}>
      {
        location.pathname === '/' ?
        <>
        <Header stateMethod={setSmallScreenClass} setHiddenClass={setHiddenClass} />
        <NavbarForSmallScreen state={smallScreenClass} stateMethod={setSmallScreenClass} setHiddenClass={setHiddenClass} />
        <Intro />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
        </> :
        <Routes>
          <Route path="/linktree" element={<LinkTree />} />
          <Route path="/html-css-projects" element={<HtmlCssProjects />} />
          <Route path="/html-css-js-projects" element={<HtmlCssJsProjects />} />
          <Route path="/react-projects" element={<ReactProjects />} />
        </Routes>
      }
    </div>
  )
}

export default App
