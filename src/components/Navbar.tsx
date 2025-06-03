import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useAnalytics } from '../contexts/AnalyticsContext';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { trackEvent } = useAnalytics();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    trackEvent('Theme', 'Toggle', isDarkMode ? 'Light Mode' : 'Dark Mode');
  };

  const handleNavClick = (item: NavItem) => {
    trackEvent('Navigation', 'Click', item.label);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between py-4 px-4">
        <a 
          href="#home" 
          className="text-2xl font-bold gradient-text"
          onClick={() => trackEvent('Logo', 'Click', 'Header')}
        >
          Vatsal Sangani
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center md:hidden">
          <button
            onClick={handleThemeToggle}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link py-3 px-8 ${
                  activeSection === item.href.replace('#', '') ? 'active' : ''
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;