import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Authors from './pages/Authors';
import Books from './pages/Books';

import Categories from './pages/Categories';
import PageNotFound from './pages/PageNotFound';
import Users from './pages/Users';
import Login from './pages/Login';
import BookRequests from './pages/BookRequests';
import AppLayout from './components/ui/AppLayout';
import { DarkModeProvider } from './context/DarkModeContext';
import BookDetails from './features/books/BookDetails';
import Inventory from './pages/Inventory';
import BookDelivery from './pages/BookDelivery';
import BookReturns from './pages/BookReturns';
import TerminateBooks from './pages/TerminateBooks';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="books">
              <Route index element={<Books />} />
              <Route path="book/:id" element={<BookDetails />} />
              <Route path="categories" element={<Categories />} />
              <Route path="authors" element={<Authors />} />
            </Route>

            <Route path="/inventory" element={<Inventory />} />

            <Route path="transactions">
              <Route index element={<BookDelivery />} />
              <Route path="returns" element={<BookReturns />} />
              <Route path="terminate" element={<TerminateBooks />} />
            </Route>

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
