import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true,
});

api.interceptors.request.use(async (config) => {
  if (['post', 'put', 'patch', 'delete'].includes(config.method)) {
    await api.get('/sanctum/csrf-cookie');
  }
  return config;
});

// GET ALL AUTHORS
export async function getAuthors() {
  try {
    const { data } = await api.get('/api/authors');
    return data.data;
  } catch (error) {
    throw new Error('Authors could not be loaded');
  }
}

// CREATE AUTHOR
export async function createAuthorApi(newAuthor) {
  try {
    const { data } = await api.post('/api/dashboard/authors', newAuthor, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Author could not be created',
    );
  }
}

// UPDATE AUTHOR
export async function updateAuthorApi(id, updatedAuthor) {
  try {
    const { data } = await api.put(
      `/api/dashboard/authors/${id}`,
      updatedAuthor,
      { headers: { 'X-Requested-With': 'XMLHttpRequest' } },
    );
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Author could not be updated',
    );
  }
}

// DELETE AUTHOR
export async function deleteAuthorApi(id) {
  try {
    const { data } = await api.delete(`/api/dashboard/authors/${id}`);
      return data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Author could not be deleted',
    );
  }
}
