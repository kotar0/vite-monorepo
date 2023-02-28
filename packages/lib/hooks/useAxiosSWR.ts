import { AxiosResponse, AxiosError } from 'axios';
import useSWR, { Key, SWRConfiguration, SWRResponse } from 'swr';
import useSWRMutation, { SWRMutationConfiguration, SWRMutationResponse } from 'swr/mutation';

/* Inspired by SWR Example:
 * https://github.com/vercel/swr/blob/main/examples/axios-typescript/libs/useRequest.ts
 * https://github.com/s1gr1d/example.react-swr-axios/blob/main/src/lib/swr/useSWRAxios.ts
 */

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
  isLoading: boolean;
}

interface ReturnMutation<Data, Error>
  extends Pick<
    SWRMutationResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isMutating' | 'trigger' | 'reset'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'fallbackData'> {
  fallbackData?: Data;
}

export const useSWRAxios = <Data = unknown, Error = unknown>(
  key: string | null /* 'null' to conditionally fetch data */,
  axiosFetcher: (...args: any) => Promise<AxiosResponse<Data>>,
  config: SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>> = {},
): Return<Data, Error> => {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(key, axiosFetcher, config);

  const data = response && response.data;
  const isLoading = !error && !data;

  return {
    data,
    response,
    error,
    isValidating,
    isLoading,
    mutate,
  };
};

// export const useSWRMutationAxios = <
//   Data = unknown,
//   Error = unknown,
//   SWRMutationKey extends Key = Key,
//   ExtraArg = never,
//   SWRData = any,
// >(
//   key: SWRMutationKey,
//   axiosFetcher: (...args: any) => Promise<AxiosResponse<Data>>,
//   options?: SWRMutationConfiguration<
//     AxiosResponse<Data>,
//     AxiosError<Error>,
//     ExtraArg,
//     SWRMutationKey,
//     SWRData
//   >,
// ): ReturnMutation<Data, Error> => {
//   const { data: response, error } = useSWRMutation<AxiosResponse<Data>, AxiosError<Error>>(
//     key,
//     axiosFetcher,
//     options,
//   );

//   const data = response && response.data;
//   const isLoading = !error && !data;

//   return {};
// };
