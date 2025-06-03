import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experiences';
import { academics} from '../data/academics';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey spans across in software development &
            data science.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 ml-2 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-lg font-semibold text-primary-500 dark:text-primary-400 mb-2">
                  {exp.company}
                </h4>

                <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex text-gray-700 dark:text-gray-300">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            <span className="gradient-text">Academic Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey spans across in software development, Data Science and Machine Learning.
          </p>
        </motion.div>
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {academics.map((acd, index) => (
            <motion.div
              key={acd.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 ml-2 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {acd.degree}
                </h3>
                <h4 className="text-lg font-semibold text-primary-500 dark:text-primary-400 mb-2">
                  {acd.university}
                </h4>

                <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>
                      {acd.startDate} - {acd.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{acd.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {acd.description.map((item, i) => (
                    <li key={i} className="flex text-gray-700 dark:text-gray-300">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-3">
                  {acd.skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;