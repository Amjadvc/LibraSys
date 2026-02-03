import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Authors from './pages/AuthorPages/Authors';
import CreateAuthor from './pages/AuthorPages/CreateAuthor';
import Books from './pages/BookPages/Books';
import CreateBooks from './pages/BookPages/CreateBooks';
import Categories from './pages/CategoryPages/Categories';
import CreateCategory from './pages/CategoryPages/CreateCategory';
import PageNotFound from './pages/PageNotFound';
import Users from './pages/Users';
import Login from './pages/Login';
import BookRequests from './pages/BookRequests';
import AppLayout from './components/ui/AppLayout';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* BOOKS MODULE */}

            <Route path="/authors" element={<Authors />} />
            <Route path="/authors/new" element={<CreateAuthor />} />

            <Route path="/books" element={<Books />} />
            <Route path="/books/new" element={<CreateBooks />} />

            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/new" element={<CreateCategory />} />

            <Route path="/book-requests" element={<BookRequests />} />

            <Route path="/users" element={<Users />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
