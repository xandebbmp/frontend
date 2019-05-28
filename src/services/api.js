import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnia-backend.herokuapp.com',
});

export default api;