import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true,
});

// --------------------
// Axios interceptor to get CSRF cookie automatically
// --------------------
api.interceptors.request.use(async (config) => {
  if (['post', 'put', 'patch', 'delete'].includes(config.method)) {
    await api.get('/sanctum/csrf-cookie');
  }
  return config;
});

// --------------------
// GET ALL CATEGORIES
// --------------------
export async function getCategories() {
  try {
    const { data } = await api.get('/api/categories');
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Categories could not be loaded');
  }
}

// --------------------
// CREATE CATEGORY
// --------------------
export async function createCategoryApi(newCategory) {
  try {
    const { data } = await api.post('/api/dashboard/categories', newCategory, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Category could not be created',
    );
  }
}

// --------------------
// UPDATE CATEGORY
// --------------------
export async function updateCategoryApi(id, updatedCategory) {
  try {
    const { data } = await api.put(
      `/api/dashboard/categories/${id}`,
      updatedCategory,
      {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      },
    );
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Category could not be updated',
    );
  }
}

// --------------------
// DELETE CATEGORY
// --------------------
export async function deleteCategoryApi(id) {
  try {
    const { data } = await api.delete(`/api/dashboard/categories/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Category could not be deleted',
    );
  }
}
