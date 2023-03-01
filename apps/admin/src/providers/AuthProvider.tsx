import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useLogin } from '../api/login';
import { AuthContext } from '../context/AuthContext';
import { useAuthLS } from '../lib/AuthLS';
import { AuthState, LoginPostParam } from '../types/Auth';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setToken, getToken, removeToken } = useAuthLS();
  const accessToken = getToken();

  // TODO トークンがあれば認証状態ではなく、トークンが有効であればに変更する
  const [authState, setAuthState] = useState<AuthState>(() =>
    accessToken ? 'AUTHENTICATED' : 'UNAUTHENTICATED',
  );

  const { data, trigger, error, isMutating } = useLogin('/auth');

  // TODO トークンの有効期限を確認する処理いりそう
  // const refresh;

  const login = useCallback(
    async (param: LoginPostParam) => {
      await trigger(param);

      if (error) {
        console.error('Login FAIL');
        console.error(error);
      }
    },
    [error, trigger],
  );

  useEffect(() => {
    if (data) {
      console.log('Login Success');
      setAuthState('AUTHENTICATED');
      setToken(data.token);
      // return data;
    }
  }, [authState, data, setToken]);

  const logout = useCallback(
    ({ callback }: { callback: () => void }) => {
      removeToken();
      callback();
    },
    [removeToken],
  );

  const AuthValue = useMemo(
    () => ({
      authState,
      setAuthState,
      accessToken,
      login,
      logout,
      isMutating,
    }),
    [accessToken, authState, isMutating, login, logout],
  );

  return <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>;
};
