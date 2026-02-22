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
// HELPER: Build FormData
// --------------------
function buildFormData(book) {
  const formData = new FormData();

  Object.entries(book).forEach(([key, value]) => {
    if (key === 'authors') {
      value.forEach((authorId) => {
        formData.append('authors[]', authorId);
      });
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  return formData;
}

// --------------------
// GET ALL BOOKS
// --------------------
export async function getBooks(page = 1) {
  try {
    const { data } = await api.get(`/api/books?page=${page}`);
    return {
      books: data.data.data, // array of books
      pagination: data.data.pagination, // pagination info
    };
  } catch (error) {
    console.error(error);
    throw new Error('Books could not be loaded');
  }
}

// --------------------
// GET SINGLE BOOK
// --------------------
export async function getBook(id) {
  try {
    const { data } = await api.get(`/api/books/${id}`);
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Book could not be loaded');
  }
}

// --------------------
// CREATE BOOK
// --------------------
export async function createBookApi(newBook) {
  try {
    const formData = buildFormData(newBook);
    const { data } = await api.post(`/api/dashboard/books`, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Book could not be created',
    );
  }
}

// --------------------
// UPDATE BOOK
// --------------------
export async function updateBookApi(id, updatedBook) {
  try {
    const formData = buildFormData(updatedBook);

    const { data } = await api.post(`/api/dashboard/books/${id}`, formData, {
      headers: {
        'X-HTTP-Method-Override': 'PUT',
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Book could not be updated',
    );
  }
}

// --------------------
// DELETE BOOK
// --------------------
export async function deleteBookApi(id) {
  try {
    const { data } = await api.delete(`/api/dashboard/books/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Book could not be deleted',
    );
  }
}
