import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import ReactGA from 'react-ga4';
import { AnalyticsContextType } from '../types';

// Replace with your Google Analytics measurement ID
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const AnalyticsContext = createContext<AnalyticsContextType>({
  trackEvent: () => {},
});

export const useAnalytics = () => useContext(AnalyticsContext);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(MEASUREMENT_ID);
    
    // Track page view on initial load
    ReactGA.send('pageview');
    
    // Track page views when URL changes
    const handleRouteChange = () => {
      ReactGA.send('pageview');
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const trackEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};