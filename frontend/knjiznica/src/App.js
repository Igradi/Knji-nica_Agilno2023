import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./App.css";
import { SignUp } from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import { AddBook } from "./pages/AddBook";
import { BookList } from "./pages/BookList";
import { BookDetails } from "./pages/BookDetails";
import { EditBookDetails } from "./pages/EditBookDetails";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/bookdetails/:id" element={<BookDetails />} />
          <Route path="/editbookdetails/:id" element={<EditBookDetails />} />
        </Routes>
        <ProtectedRoutes />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

function ProtectedRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (!token && !['/', '/register', '/login'].includes(location.pathname)) {
      navigate('/login');
    } else if (location.pathname === '/admin' && role !== 'admin') {
      navigate('/');
    } else if (location.pathname === '/addbook' && !['admin', 'knjižničar'].includes(role)) {
      navigate('/');
    }
  }, [location]);

  return null;
}

export default App;
