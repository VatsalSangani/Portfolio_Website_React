import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Brain, Database, Code } from 'lucide-react';
import { useAnalytics } from '../contexts/AnalyticsContext';

const About: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const codeSnippet = `import pandas as pd
from sklearn.ensemble import RandomForestClassifier

data = pd.read_csv("data.csv")
X = data.drop("target", axis=1)
y = data["target"]

model = RandomForestClassifier()
model.fit(X, y)
print(model.score(X, y))`;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = isTyping ? 0 : codeSnippet.length;

    const animate = () => {
      if (isTyping && currentIndex <= codeSnippet.length) {
        setDisplayText(codeSnippet.substring(0, currentIndex));
        currentIndex++;
        
        if (currentIndex > codeSnippet.length) {
          timeoutId = setTimeout(() => {
            setIsTyping(false);
          }, 1000); // Pause before starting to delete
        } else {
          timeoutId = setTimeout(animate, Math.random() * 50 + 50); // Random typing speed for realism
        }
      } else if (!isTyping && currentIndex >= 0) {
        setDisplayText(codeSnippet.substring(0, currentIndex));
        currentIndex--;
        
        if (currentIndex < 0) {
          timeoutId = setTimeout(() => {
            setIsTyping(true);
          }, 500); // Pause before retyping
        } else {
          timeoutId = setTimeout(animate, 30); // Faster deletion speed
        }
      }
    };

    timeoutId = setTimeout(animate, 500); // Initial delay

    return () => clearTimeout(timeoutId);
  }, [isTyping]);

  const handleResumeClick = () => {
    trackEvent('Resume', 'Download', 'About Section');
  };

  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in technology spans multiple disciplines, combining software development, 
            data science, and machine learning to create comprehensive solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-900 text-white rounded-2xl p-6 shadow-xl font-mono overflow-hidden">
                <div className="text-green-400 mb-2"># Machine Learning Snippet</div>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                  <code>
                    {displayText}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-white ml-1"
                    />
                  </code>
                </pre>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-4 shadow-xl rounded-lg">
                <span className="block text-3xl font-bold gradient-text">2+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Years of Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Combining Technology & Creativity
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With experience across software development, data science, and machine learning,
              I've developed a unique approach to problem-solving that combines technical expertise with
              creative thinking. My goal is to build intelligent systems that are both powerful and intuitive.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="rounded-full w-10 h-10 primary-gradient flex items-center justify-center mb-3">
                  <Database className="text-white" size={20} />
                </div>
                <h4 className="font-semibold mb-1">Data Science</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Analytics & visualization
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="rounded-full w-10 h-10 primary-gradient flex items-center justify-center mb-3">
                  <Brain className="text-white" size={20} />
                </div>
                <h4 className="font-semibold mb-1">Machine Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  AI solutions & modeling
                </p>
              </div>
            </div>
            
            <a
              href="https://drive.google.com/file/d/16tRv2Vi_MXDPYFZABCeGbPpY2cdCW0N_/view?usp=drive_link"
              className="inline-flex items-center px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={handleResumeClick}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;