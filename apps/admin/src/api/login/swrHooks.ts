import { Key } from 'swr/_internal';
import useSWRMutation from 'swr/mutation';
import { Auth, LoginPostParam } from './../../types/Auth';
import { postLoginFetcher } from './fetcher';

export const useLogin = (endpoint = '/auth') => {
  const { data, error, isMutating, ...props } = useSWRMutation<Auth, any, Key, LoginPostParam>(
    endpoint,
    postLoginFetcher,
  );

  return { data, error, isMutating, ...props };
};
