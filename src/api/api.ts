import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const api =  axios.create({
  baseURL: "https://api.github.com",
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptors
api.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

api.interceptors.response.use(function (response: AxiosResponse) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default api;