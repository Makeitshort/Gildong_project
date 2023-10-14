import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '@/constants/config';

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    withCredential: true,
  },
});

apiClient.interceptors.request.use((req) => {
  const token = sessionStorage.getItem('access_token');
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default apiClient;
