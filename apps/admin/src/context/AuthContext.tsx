import { createContext } from 'react';
import { AuthState, LoginPostParam } from '../types/Auth';

export type AuthContextType = {
  authState: AuthState;
  accessToken: string | null;
  setAuthState: (status: AuthState) => void;
  login: (param: LoginPostParam) => Promise<void>;
  logout: ({ callback }: { callback: any }) => void;
  isMutating: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);
