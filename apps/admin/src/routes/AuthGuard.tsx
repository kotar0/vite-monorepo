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
      console.log('REDIRECT');
      navigate(redirectTo);
    } else if (authState === 'AUTHENTICATED') {
      console.log('NOT REDIRECT');
    }
  }, [authState, isMutating, navigate, redirectTo]);

  if (authState === 'AUTHENTICATED') {
    return <>{children}</>;
  } else return <></>;
};
