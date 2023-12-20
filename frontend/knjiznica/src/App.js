import "./App.css";
import { SignUp } from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
