import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthGuard = ({
  children,
  redirectTo,
}: {
  children: ReactElement;
  redirectTo: string;
}) => {
  const { authState } = useAuth();

  switch (authState) {
    case 'AUTHENTICATED': {
      return children;
    }
    case 'UNAUTHENTICATED': {
      return <Navigate to={redirectTo} replace />;
    }
  }
};
