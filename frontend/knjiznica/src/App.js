import './App.css'
import { SignUp } from './pages/SignUp'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/Navbar'
import { AddBook } from './pages/AddBook'
import { BookList } from './pages/BookList'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:userId' element={<UserProfile />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/books' element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
