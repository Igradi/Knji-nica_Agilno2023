import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast, ToastContainer, Bounce } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function BookList() {
  const [books, setBooks] = useState([])
  const navigate = useNavigate()
  const [value, setValue] = useState()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/books')
        setBooks(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBooks()
  }, [])

  //   const handleDelete = async (userId) => {
  //     const confirmDelete = window.confirm('Are you sure you want to delete this book?');
  //     if (!confirmDelete) {
  //         return;
  //     }

  //     try {
  //         await axios.delete(`http://localhost:4000/users/${userId}`);
  //         setUsers(users.filter((user) => user._id !== userId));
  //         toast.success('User deleted successfully');
  //     } catch (error) {
  //         console.log(error);
  //         toast.error('Failed to delete user');
  //     }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:4000/books', {
        value,
      })
      setBooks(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnClick = async (userId, bookId) => {
    try {
      const bookUserData = {
        idUser: userId,
        idBook: bookId,
      }
      const response = await axios.post(
        'http://localhost:4000/addbookanduser/',
        bookUserData
      )

      toast.success('Uspjepno ste iznajmili knjigu!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })

      console.log('Uspješno poslano:', response.data)
    } catch (error) {
      console.error('Greška prilikom slanja podataka:', error.message)
    }
  }
  return (
    <div className='container mx-auto my-8 p-24'>
      <h1
        style={{
          fontFamily: "'Pacifico', cursive",
          textDecoration: 'none',
          backgroundClip: 'text',
          color: 'transparent',
          backgroundImage:
            'linear-gradient(to right, #34D399, #3B82F6, #8B5CF6)',
        }}
        className="text-3xl font-bold mb-4 text-center h-[50px]"
      >
        Pregled svih knjiga
      </h1>
      <div className='mb-3 '>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            type='text'
            id='title'
            className=' border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
            placeholder='Search'
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 mx-4">
            Search
          </button>
        </form>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {books.map((book) => (
          <div key={book.id} className='bg-white p-4 rounded shadow-md'>
            <h2 className='text-lg font-semibold'>{book.title} </h2>
            <p className='text-gray-500'>
              {book.authorName} {book.authorLastName}
            </p>
            <p className='text-gray-500'>{book.genre}</p>
            <img src={book.image} style={{ width: '40vh', height: '50vh' }} />
            <div className='mt-4 flex justify-between'>
              {/* za detalje knjige  */}
              <button
                className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full focus:outline-none'
                onClick={() => navigate(`/bookdetails/${book._id}`)}
              >
                Detalji
              </button>

              <button
                className='bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full focus:outline-none'
                onClick={() => handleOnClick(localStorage.userId, book._id)}
              >
                Iznajmi
              </button>

              {/* samo za rolu knjiznicar */}
              {/* <button
                className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full focus:outline-none'
                // onClick={() => handleDelete(book._id)}
              >
                <FaTrash />
              </button>  */}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}
