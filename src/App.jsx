import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AccessibilityWidget from './components/AccessibilityWidget'; // Novo Widget Flutuante Redondo
import TerminalConsole from './components/TerminalConsole'; // Novo Terminal CLI Hacker
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <AccessibilityWidget /> {/* Widget de Acessibilidade Flutuante Redondo */}
      <TerminalConsole /> {/* Console CLI Hacker de Alta Performance */}
    </Router>
  );
}

export default App;
