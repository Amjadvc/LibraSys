import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  withXSRFToken: true,
});

// Get CSRF cookie
export async function getCsrfCookie() {
  return await api.get('/sanctum/csrf-cookie');
}

// --------------------
// GET ALL BOOKS
// --------------------
export async function getBooks() {
  try {
    const { data } = await api.get('/api/books');
    return data.data;
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
// CREATE BOOK
// --------------------
export async function createBookApi(newBook) {
  try {
    await getCsrfCookie();
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
    await getCsrfCookie();

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
