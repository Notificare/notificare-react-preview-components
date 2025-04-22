import { createContext, ReactNode, useContext } from 'react';
import { NotificareNotificationOptions } from '../../../../components/NotificareNotificationPreview/models/notificare-notification-config';

export function OptionsProvider({ options, children }: AuthProviderProps) {
  return <OptionsContext.Provider value={{ options }}>{children}</OptionsContext.Provider>;
}

interface AuthProviderProps {
  options: NotificareNotificationOptions;
  children: ReactNode;
}

export const useAuth = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useAuth should be used inside an AuthProvider');
  }
  return context;
};

const OptionsContext = createContext<{ options: NotificareNotificationOptions } | undefined>(
  undefined,
);
