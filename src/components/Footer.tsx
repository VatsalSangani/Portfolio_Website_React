import React from 'react';
import { ChevronUp, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Footer: React.FC = () => {
  const { trackEvent } = useAnalytics();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackEvent('Navigation', 'Click', 'Back to Top');
  };

  const handleSocialClick = (platform: string) => {
    trackEvent('Social', 'Click', `Footer: ${platform}`);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <button
            onClick={handleBackToTop}
            className="mb-8 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold gradient-text mb-2">Vatsal Sangani</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Combining the art of design with the science of programming to create
              innovative solutions for complex problems.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => handleSocialClick('GitHub')}
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vats-sangani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => handleSocialClick('LinkedIn')}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vatsalsangani24@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => handleSocialClick('Email')}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Vatsal Sangani. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={handleBackToTop}
        className="fixed bottom-8 right-8 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;