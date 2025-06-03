import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { trackEvent } = useAnalytics();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setSelectedId(project.id);
    trackEvent('Project', 'Open', project.title);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedId(null);
    document.body.style.overflow = 'auto';
  };

  const handleDemoClick = (url: string, title: string) => {
    trackEvent('Project', 'Demo Click', title);
    window.open(url, '_blank');
  };

  const handleGithubClick = (url: string, title: string) => {
    trackEvent('Project', 'GitHub Click', title);
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work spanning machine learning, data science,
            and full-stack development projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              className="project-card cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleProjectClick(project)}
            >
              <motion.div 
                layoutId={`project-image-${project.id}`}
                className="relative h-48 overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                  onLoad={() => trackEvent('Image', 'Load', `Project: ${project.title}`)}
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                    Featured
                  </span>
                )}
              </motion.div>
              
              <div className="p-5">
                <motion.h3 
                  layoutId={`project-title-${project.id}`}
                  className="text-xl font-bold text-gray-800 dark:text-white mb-2"
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  layoutId={`project-description-${project.id}`}
                  className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3"
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  layoutId={`project-technologies-${project.id}`}
                  className="flex flex-wrap gap-2 mb-2"
                >
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            >
              <motion.div
                layoutId={`project-container-${selectedId}`}
                className="bg-white dark:bg-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl
                scrollbar-none sm:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 
                scrollbar-track-transparent dark:scrollbar-thumb-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.div 
                    layoutId={`project-image-${selectedId}`}
                    className="w-full h-64 md:h-80 overflow-hidden"
                  >
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <button
                    className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80 rounded-full p-2 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-900 transition-colors"
                    onClick={handleCloseModal}
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 md:p-8">
                  <motion.h3 
                    layoutId={`project-title-${selectedId}`}
                    className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3"
                  >
                    {selectedProject.title}
                  </motion.h3>
                  
                  <motion.div 
                    layoutId={`project-technologies-${selectedId}`}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.demoLink && (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDemoClick(selectedProject.demoLink!, selectedProject.title)}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        View Demo
                      </button>
                    )}
                    
                    {selectedProject.githubLink && (
                      <button
                        className="btn btn-outline"
                        onClick={() => handleGithubClick(selectedProject.githubLink!, selectedProject.title)}
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;