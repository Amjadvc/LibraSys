import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true, // VERY IMPORTANT for Laravel cookies
});

//Fetch all books
export async function getBooks() {
  try {
    const { data } = await api.get('/api/books');
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Books could not be loaded');
  }
}

// find one book
export async function getBook(id) {
  try {
    const { data } = await api.get(`/api/books/${id}`);
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Book could not be loaded');
  }
}

//create a book
export async function createBookApi(newBook) {
  try {
    const formData = new FormData();
    Object.entries(newBook).forEach(([key, value]) => {
      if (key === 'authors') {
        value.forEach((authorId) => {
          formData.append('authors[]', authorId);
        });
      } else {
        formData.append(key, value);
      }
    });

    const { data } = await api.post(`/api/books`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    console.log('Full error:', error);
    console.log('Laravel response:', error.response?.data);

    throw new Error(
      error.response?.data?.message || 'Book could not be created',
    );
  }
}
