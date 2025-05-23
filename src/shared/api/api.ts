import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

// const baseURL = __IS_DEV__ ? 'http://localhost:8000/' : 'https://production-server.ru/';

export const $api = axios.create({
    baseURL: __API__,
    // headers: {
    //     authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    // }
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization =
        localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';

    return config;
});
