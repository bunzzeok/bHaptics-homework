import axios, { AxiosError, AxiosResponse } from 'axios';

const request = axios.create({
    timeout: 10000, // request timeout
});

request.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

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
