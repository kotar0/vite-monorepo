import { AxiosResponse } from 'axios';
import { axiosBaseInstance } from 'lib/axios';
import { Auth } from '../../types/Auth';

export const postLoginFetcher = (key: string): Promise<Auth> =>
  axiosBaseInstance.post(key).then((res) => res.data);
