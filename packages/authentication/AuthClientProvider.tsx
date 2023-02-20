import React, { createContext, useContext } from 'react';
import { AuthClient } from './authClient';

const AuthClientContext = createContext<AuthClient | undefined>(undefined);

export const useAuthClient = () => {
  const client = useContext(AuthClientContext);
  if (!client) {
    throw new Error('AuthClientContext must be used within AuthClientProvider');
  }

  return client;
};

interface Props {
  client: AuthClient;
  children?: React.ReactNode;
}

export default function AuthClientProvider({ client, children }: Props) {
  return <AuthClientContext.Provider value={client}>{children}</AuthClientContext.Provider>;
}
