// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8071/api/v1', // Your backend URL
});

export default api;
