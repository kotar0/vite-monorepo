import { axiosBaseInstance } from 'lib/axios';
import { Auth } from '../../types/Auth';
import { LoginPostParam } from './../../types/Auth';

export const postLoginFetcher = (key: string, { arg }: { arg: LoginPostParam }): Promise<Auth> =>
  axiosBaseInstance.post(key, { arg }).then((res) => res.data);
