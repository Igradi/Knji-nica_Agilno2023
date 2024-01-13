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
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
