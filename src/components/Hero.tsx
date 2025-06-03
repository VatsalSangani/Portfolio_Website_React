import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Hero: React.FC = () => {
  const { trackEvent } = useAnalytics();

  const handleSocialClick = (platform: string) => {
    trackEvent('Social', 'Click', platform);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] rounded-full bg-primary-300 dark:bg-primary-700 blur-[150px]" />
          <div className="absolute top-[30%] -right-[100px] w-[350px] h-[350px] rounded-full bg-secondary-300 dark:bg-secondary-700 blur-[150px]" />
          <div className="absolute -bottom-[100px] left-[20%] w-[300px] h-[300px] rounded-full bg-accent-300 dark:bg-accent-700 blur-[150px]" />
        </div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="mb-6" 
            variants={itemVariants}
          >
            <span className="gradient-text block leading-tight">Hi, I'm Vatsal  Sangani</span>
            <span className="text-2xl md:text-3xl block mt-3 text-gray-700 dark:text-gray-300">
              Machine Learning Engineer & Data Scientist
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
            variants={itemVariants}
          >
            I transform complex data into meaningful solutions through machine learning, 
            data science, and software development. Passionate about innovation and 
            building intelligent systems that solve real-world problems.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={() => trackEvent('Button', 'Click', 'View Projects')}
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
              onClick={() => trackEvent('Button', 'Click', 'Contact Me')}
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <a 
              href="https://github.com/VatsalSangani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={() => handleSocialClick('GitHub')}
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vats-sangani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={() => handleSocialClick('LinkedIn')}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:vatsalsangani24@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={() => handleSocialClick('Email')}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;