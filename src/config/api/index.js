import axios from 'axios';

const BASE_URL = '';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export const Sign_IN = 'apiurl';
export const CREATE_SHOP = 'apiurl';
