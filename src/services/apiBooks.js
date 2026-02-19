import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true, // VERY IMPORTANT for Laravel cookies
});

export async function getBooks() {
  try {
    const { data } = await api.get('/api/books');
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Books could not be loaded');
  }
}
