import axios from 'axios';

const { VITE_API_URL, VITE_USER_API_URL } = import.meta.env;

export const apiCoin = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const apiUsers = axios.create({
  baseURL: VITE_USER_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

