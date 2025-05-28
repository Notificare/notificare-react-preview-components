import { createContext, PropsWithChildren, useContext } from 'react';

const OptionsContext = createContext<NotificareNotificationOptions | undefined>(undefined);

export function OptionsProvider({ children, ...props }: OptionsProviderProps) {
  return <OptionsContext.Provider value={{ ...props }}>{children}</OptionsContext.Provider>;
}

export type OptionsProviderProps = PropsWithChildren & NotificareNotificationOptions;

export interface NotificareNotificationOptions {
  serviceKey: string;
  googleMapsAPIKey?: string;
}

export function useOptions() {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useOptions should be used inside an OptionsProvider');
  }
  return context;
}
