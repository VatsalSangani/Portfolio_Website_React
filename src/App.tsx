import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AnalyticsProvider } from './contexts/AnalyticsContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Vatsal Sangani | Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <AnalyticsProvider>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </AnalyticsProvider>
    </ThemeProvider>
  );
}

export default App;