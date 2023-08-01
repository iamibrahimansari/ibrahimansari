import Header from './components/Header';
import Intro from './pages/Intro';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
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
