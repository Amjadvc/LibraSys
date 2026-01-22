import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Authors from "./pages/AuthorPages/Authors";
import CreateAuthor from "./pages/AuthorPages/CreateAuthor";
import Books from "./pages/BookPages/Books";
import CreateBooks from "./pages/BookPages/CreateBooks";
import Categories from "./pages/CategoryPages/Categories";
import CreateCategory from "./pages/CategoryPages/CreateCategory";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/authors" element={<Authors />}>
            <Route path="new" element={<CreateAuthor />} />
          </Route>

          <Route path="/books" element={<Books />}>
            <Route path="new" element={<CreateBooks />} />
          </Route>

          <Route path="/categories" element={<Categories />}>
            <Route path="new" element={<CreateCategory />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
