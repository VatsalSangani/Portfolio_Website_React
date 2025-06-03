import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { skills } from '../data/skills';
import { useAnalytics } from '../contexts/AnalyticsContext';

type Category = 'all' | 'languages' | 'frameworks' | 'data' | 'ml' | 'cloud' | 'tools';

const categoryLabels: Record<Category, string> = {
  all: 'All Skills',
  languages: 'Languages',
  frameworks: 'Frameworks',
  data: 'Data Science',
  ml: 'Machine Learning',
  cloud: 'Cloud & DevOps',
  tools: 'Tools & Others'
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { trackEvent } = useAnalytics();

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    trackEvent('Skills', 'Filter', category);
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical toolbox includes a wide range of languages, frameworks, and tools
            specialized in software development, data science, and machine learning.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {(Object.keys(categoryLabels) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all ${
                activeCategory === category
                  ? 'primary-gradient text-white font-semibold shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredSkills.map((skill, index) => {
            // Dynamic import of the icon from lucide-react
            const IconComponent = (LucideIcons as Record<string, React.FC<{size?: number}>>)[
              skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)
            ] || LucideIcons.Code;

            return (
              <motion.div
                key={skill.id}
                className="bg-white dark:bg-gray-700 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="mb-3 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
                  <IconComponent size={24} className="text-primary-500" />
                </div>
                <h3 className="font-medium text-center text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;