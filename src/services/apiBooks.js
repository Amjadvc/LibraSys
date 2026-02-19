import axios from 'axios';

export async function getBooks() {
  try {
    // If you are using auth, include token from localStorage
    // const token = localStorage.getItem('jwt');
    const response = await axios.get('http://127.0.0.1:8000/api/books', {
      //   headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    return response.data;
  } catch (error) {
    console.log('Error fetching books:', error);
    throw new Error('Books could not be loaded');
  }
}
