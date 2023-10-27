import { Game } from '@/interface/interface';
import axios, { AxiosError, AxiosResponse } from 'axios';

const request = axios.create({
    timeout: 5000, // request timeout
});
// request interceptor
request.interceptors.request.use(
    (config: any) => {
        // do something before request is sent
        return config;
    },
    (error: AxiosError) => {
        // do something with request error
        return Promise.reject(error);
    }
);

// response interceptor
request.interceptors.response.use(
    (response: AxiosResponse) => {
        const sRes = response.data;
        return sRes;
    },
    async (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default request;
