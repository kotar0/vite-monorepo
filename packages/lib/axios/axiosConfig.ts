import axios, { AxiosInstance } from 'axios';

const BASE_URL = import.meta.env.VITE_HOST;

const axiosBaseInstance = axios.create({ baseURL: BASE_URL });

const AddBaseInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }

    config.headers = {
      ...config.headers,
      // Header Config here
    };

    return config;
  });
};

AddBaseInterceptors(axiosBaseInstance);
export { axiosBaseInstance };
