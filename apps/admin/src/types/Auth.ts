export type AuthState = 'AUTHENTICATED' | 'UNAUTHENTICATED' | 'IDLE';

export type Auth = {
  id: string;
  token: string;
};

export type LoginPostParam = {
  id: string;
  password: string;
};
