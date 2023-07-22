import axios from 'axios';

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

const api = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'X-CoinAPI-Key': VITE_API_KEY
  },
});

export default api;