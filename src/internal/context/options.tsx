import { createContext, PropsWithChildren, useContext } from 'react';

const OptionsContext = createContext<OptionsProviderProps | undefined>(undefined);

export function OptionsProvider({ children, ...props }: PropsWithChildren<OptionsProviderProps>) {
  return <OptionsContext.Provider value={props}>{children}</OptionsContext.Provider>;
}

export interface OptionsProviderProps {
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
