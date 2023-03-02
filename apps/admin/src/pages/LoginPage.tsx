import { FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LoginScreen } from '../screens/LoginScreen';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { authState, login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      id: 'aaaa',
      password: 'ppppp',
    });
  };

  useEffect(() => {
    if (authState === 'AUTHENTICATED') {
      navigate('/');
    }
  }, [authState, navigate]);

  return <LoginScreen handleSubmit={handleSubmit} />;
};
