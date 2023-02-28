import { useEffect } from 'react';
import useSWRMutation from 'swr/mutation';
import { Auth } from './../../types/Auth';
import { postLoginFetcher } from './fetcher';

export const useLogin = () => {
  const { data, error, isMutating, ...props } = useSWRMutation<Auth>('/auth', postLoginFetcher);

  //  useAuthに移植
  useEffect(() => {
    if (!error) {
      console.log(data);
      data?.token && localStorage.setItem('auth-token', data.token);
    }
  }, [data, error]);

  return { data, error, isMutating, ...props };
};
