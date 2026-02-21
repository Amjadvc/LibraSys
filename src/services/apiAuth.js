import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

api.defaults.xsrfCookieName = 'XSRF-TOKEN';
api.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

// Get CSRF cookie
export async function getCsrfCookie() {
  return await api.get('/sanctum/csrf-cookie');
}

export async function login({ email, password }) {
  await getCsrfCookie();

  const response = await api.post('/login', { email, password });

  if (!response.data.success) {
    throw new Error(response.data.message || 'Login failed');
  }

  const user = response.data.data?.user || response.data.user;

  if (user) return user;

  // fallback if user not returned
  const userResponse = await api.get('/api/user');
  return userResponse.data;
}

export async function getUser() {
  const response = await api.get('/api/user');
  return response.data;
}

export default api;