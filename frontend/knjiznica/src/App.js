import "./App.css";
import { SignUp } from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
