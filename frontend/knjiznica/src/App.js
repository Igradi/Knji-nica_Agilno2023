import "./App.css";
import { SignUp } from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
