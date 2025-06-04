import { createContext, PropsWithChildren, useContext } from 'react';
import { ApplicationInfo } from '../types/application-info';

export const ApplicationContext = createContext<ApplicationInfo | undefined>(undefined);

export function ApplicationProvider({
  application,
  children,
}: PropsWithChildren<ApplicationProviderProps>) {
  return <ApplicationContext.Provider value={application}>{children}</ApplicationContext.Provider>;
}

export interface ApplicationProviderProps {
  application: ApplicationInfo;
}

export function useApplication() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication should be used inside an ApplicationProvider');
  }
  return context;
}
