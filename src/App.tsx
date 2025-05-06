import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResearchAssistant from './pages/ResearchAssistant';
import FinanceAnalyzer from './pages/FinanceAnalyzer';
import GreenLedger from './pages/GreenLedger';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Blog />
                <Contact />
              </main>
            } />
            <Route path="/projects/research-assistant" element={<ResearchAssistant />} />
            <Route path="/projects/finance-analyzer" element={<FinanceAnalyzer />} />
            <Route path="/projects/green-ledger" element={<GreenLedger />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;