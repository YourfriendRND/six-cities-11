import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {Limits, SERVER_URL} from './../const';
import { getToken } from './token';

export const createAPI = (file?: boolean): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: Limits.RequestTimeout,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }

      if (file && config.headers) {
        config.headers = {
          ...config.headers,
          'content-type': 'multipart/form-data',
        };
      }

      return config;
    }
  );

  return api;
};
