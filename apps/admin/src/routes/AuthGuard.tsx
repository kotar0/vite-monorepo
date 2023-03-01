import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthGuard = ({
  children,
  redirectTo,
}: {
  children: ReactElement;
  redirectTo: string;
}) => {
  const { authState, isMutating } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMutating && authState === 'UNAUTHENTICATED') {
      navigate(redirectTo);
    }
  }, [authState, isMutating, navigate, redirectTo]);

  // TODO FIXME: 返り値は適当に設定しているので見直す
  if (authState === 'AUTHENTICATED') {
    return <>{children}</>;
  } else return <></>;
};
