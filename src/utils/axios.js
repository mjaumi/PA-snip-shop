import axios from 'axios';

// creating axios base URL instance here
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export default axiosInstance;