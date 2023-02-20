import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthClient } from './authClient';
import { AppUser } from './model';

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

interface State {
  user: AppUser | undefined;
  loading: boolean;
}

const initialState: State = {
  user: undefined,
  loading: true
};

export default function AuthClientProvider({ client, children }: Props) {
  const [state, setState] = useState(initialState);

  useEffect(() => client.subscribe((user) => setState({ user, loading: false })), [client]);

  return <AuthClientContext.Provider value={client}>{children}</AuthClientContext.Provider>;
}
