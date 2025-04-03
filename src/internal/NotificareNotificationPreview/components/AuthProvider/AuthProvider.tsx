import { createContext, ReactNode, useContext } from 'react';
import { NotificareNotificationConfigKeys } from '../../../../components/NotificareNotificationPreview/models/notificare-notification-config';

export function AuthProvider({ configKeys, children }: AuthProviderProps) {
  return <AuthContext.Provider value={{ configKeys }}>{children}</AuthContext.Provider>;
}

interface AuthProviderProps {
  configKeys: NotificareNotificationConfigKeys;
  children: ReactNode;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth should be user inside an AuthProvider');
  }
  return context;
};

const AuthContext = createContext<{ configKeys: NotificareNotificationConfigKeys } | undefined>(
  undefined,
);
