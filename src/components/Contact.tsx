import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Contact: React.FC = () => {
  const { trackEvent } = useAnalytics();

  return (
    <section id="contact" className="section primary-gradient">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white">Get In Touch</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential collaborations?
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 bg-white/20 p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-lg font-semibold mb-1">Email</p>
                <a 
                  href="mailto:vatsalsangani24@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={() => trackEvent('Contact', 'Click', 'Email')}
                >
                  vatsalsangani24@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-white/20 p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-lg font-semibold mb-1">Location</p>
                <p className="text-white/80">
                  London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;