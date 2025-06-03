import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { certifications } from '../data/certifications';
import { Certification } from '../types';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Certifications: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { trackEvent } = useAnalytics();

  const handleCertificationClick = (certification: Certification) => {
    setSelectedCertification(certification);
    setSelectedId(certification.id);
    trackEvent('Certification', 'Open', certification.title);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedCertification(null);
    setSelectedId(null);
    document.body.style.overflow = 'auto';
  };

  const handleVerifyClick = (url: string, title: string) => {
    trackEvent('Certification', 'Verify Click', title);
    window.open(url, '_blank');
  };

  return (
    <section id="certifications" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
            in various technical domains.
          </p>
        </motion.div>

        <div className={`grid gap-6 ${certifications.length === 1 ? 'grid-cols-1 justify-center max-w-md mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              layoutId={`certification-container-${certification.id}`}
              className="project-card cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleCertificationClick(certification)}
            >
              <motion.div 
                layoutId={`certification-image-${certification.id}`}
                className="relative h-48 overflow-hidden"
              >
                <img 
                  src={certification.image} 
                  alt={certification.title} 
                  className="w-full h-full object-cover object-center"
                  onLoad={() => trackEvent('Image', 'Load', `Certification: ${certification.title}`)}
                />
              </motion.div>
              
              <div className="p-5">
                <motion.h3 
                  layoutId={`certification-title-${certification.id}`}
                  className="text-xl font-bold text-gray-800 dark:text-white mb-2"
                >
                  {certification.title}
                </motion.h3>
                
                <motion.p 
                  layoutId={`certification-issuer-${certification.id}`}
                  className="text-primary-500 dark:text-primary-400 font-medium mb-2"
                >
                  {certification.issuer}
                </motion.p>
                
                <motion.p 
                  layoutId={`certification-description-${certification.id}`}
                  className="text-gray-600 dark:text-gray-400 line-clamp-3"
                >
                  {certification.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedCertification && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            >
              <motion.div
                layoutId={`certification-container-${selectedId}`}
                className="bg-white dark:bg-gray-800 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.div 
                    layoutId={`certification-image-${selectedId}`}
                    className="w-full h-64 md:h-80 overflow-hidden"
                  >
                    <img 
                      src={selectedCertification.image} 
                      alt={selectedCertification.title} 
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
                    layoutId={`certification-title-${selectedId}`}
                    className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2"
                  >
                    {selectedCertification.title}
                  </motion.h3>
                  
                  <motion.p 
                    layoutId={`certification-issuer-${selectedId}`}
                    className="text-xl text-primary-500 dark:text-primary-400 font-medium mb-4"
                  >
                    {selectedCertification.issuer}
                  </motion.p>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedCertification.description}
                    </p>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="font-medium mr-2">Issued:</span>
                      {selectedCertification.issueDate}
                    </div>
                    
                    {selectedCertification.expiryDate && (
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="font-medium mr-2">Expires:</span>
                        {selectedCertification.expiryDate}
                      </div>
                    )}
                  </div>
                  
                  {selectedCertification.verificationUrl && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleVerifyClick(
                        selectedCertification.verificationUrl!,
                        selectedCertification.title
                      )}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Verify Certificate
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;