import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Business Analyst and Operations Associate',
    company: 'Sangani & Sons',
    location: 'Mumbai, India',
    startDate: 'November 2022',
    endDate: 'July 2023',
    description: [
      'Analysed sales trends & market performance to drive data-informed decision-making.',
      'Developed Power BI dashboards for financial tracking and inventory optimisation.',
      'Automated data entry & reporting, reducing manual workload by 30% using Excel.',
      'Optimised pricing strategies & market research, collaborating with stakeholders to increase revenue by 15%.'
    ],
    technologies: ['Python', 'Excel', 'PowerBI', 'SQL']
  },
  {
    id: '2',
    title: 'Junior Front End Web Developer',
    company: 'Unteched Pvt Ltd.',
    location: 'Mumbai, India',
    startDate: 'October 2021',
    endDate: 'November 2022',
    description: [
      'Developed and deployed 5+ responsive client websites using HTML, CSS, and JavaScript, optimizing UI/UX and improving user engagement by 20%.',
      'Improved website load times by 30%, reducing bounce rates by 15% and increasing user retention by 25% through performance optimization.',
      'Integrated Google Analytics 4 and A/B testing, identifying drop-off points and boosting conversion rates by 12% with data-driven UX improvements.',
      'Automated web analytics reporting, cutting manual processing time by 40%, enabling faster data-driven decision-making.',
      'Collaborated with senior developers in an agile environment, ensuring clean, maintainable code and adapting to evolving project requirements.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google-Analytics', 'A/B Testing']
  }
];