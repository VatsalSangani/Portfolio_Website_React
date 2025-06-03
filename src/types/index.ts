export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  issueDate: string;
  expiryDate?: string;
  verificationUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'tools' | 'data' | 'ml' | 'cloud';
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface AnalyticsContextType {
  trackEvent: (category: string, action: string, label?: string) => void;
}