import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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

// --------------------
// HELPER: Get CSRF cookie
// --------------------
export async function getCsrfCookie() {
  return await api.get('/sanctum/csrf-cookie');
}

// --------------------
// LOGIN
// --------------------
export async function login({ email, password }) {
  await getCsrfCookie();

  const response = await api.post('/login', { email, password });

  if (!response.data.success) {
    throw new Error(response.data.message || 'Login failed');
  }

  const user = response.data.data?.user || response.data.user;

  if (user) return user;

  // fallback: fetch user info if not returned in login response
  const userResponse = await api.get('/api/user');
  return userResponse.data;
}

// --------------------
// GET AUTHENTICATED USER
// --------------------
export async function getUser() {
  const response = await api.get('/api/user');
  return response.data;
}

export default api;
