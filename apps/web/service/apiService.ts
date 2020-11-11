import axios from 'axios';

const __API__ = 'http://localhost:8080';
export const apiService = axios.create({
  baseURL: __API__,
})