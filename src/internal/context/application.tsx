import { createContext, PropsWithChildren, useContext } from 'react';
import { NotificareApplication } from '../../components/NotificareNotificationPreview/models/notificare-application';

export const ApplicationContext = createContext<NotificareApplication | undefined>(undefined);

export function ApplicationProvider({
  application,
  children,
}: PropsWithChildren<ApplicationProviderProps>) {
  return <ApplicationContext.Provider value={application}>{children}</ApplicationContext.Provider>;
}

export interface ApplicationProviderProps {
  application: NotificareApplication;
}

export function useApplication() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication should be used inside an ApplicationProvider');
  }
  return context;
}
