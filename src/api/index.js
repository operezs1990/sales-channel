import axios from 'axios';

import config from '../config';

const instance = axios.create({
    baseURL: config.api.baseURL,
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.jwtToken}`,
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

function createAxiosResponseInterceptor(axiosInstance) {
    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            // Reject promise if usual error
            if (!error.response || error.response.status !== 401) {
                return Promise.reject(error);
            } else if (localStorage.getItem('user')) {
                localStorage.removeItem('user');
                window.location.href = window.location.origin + '/login';
            }
        }
    );
}

createAxiosResponseInterceptor(instance);

export default instance;