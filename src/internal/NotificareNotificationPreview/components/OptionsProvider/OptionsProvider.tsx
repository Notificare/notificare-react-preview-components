import { createContext, ReactNode, useContext } from 'react';
import { NotificareNotificationOptions } from '../../../../components/NotificareNotificationPreview/models/notificare-notification-config';

export function OptionsProvider({ options, children }: OptionsProviderProps) {
  return <OptionsContext.Provider value={{ options }}>{children}</OptionsContext.Provider>;
}

interface OptionsProviderProps {
  options: NotificareNotificationOptions;
  children: ReactNode;
}

export const useOptions = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useOptions should be used inside an OptionsProvider');
  }
  return context.options;
};

const OptionsContext = createContext<{ options: NotificareNotificationOptions } | undefined>(
  undefined,
);
