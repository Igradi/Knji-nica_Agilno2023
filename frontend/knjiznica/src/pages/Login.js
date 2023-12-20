import React, { useState } from 'react'
import markoMarulic from '../images/markoMarulic.jpg'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log('tu sa')
        const { data } = await axios.post('http://localhost:4000/login', { email, password });
  
        console.log(data);
  
        if (data.authenticated) {
            window.location.href = '/';
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="bg-gradient-to-tr from-blue-800 to-blue-900 h-screen w-full flex justify-center items-center">
        <div className="bg-blue-900 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
          <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
            <img
              src={markoMarulic}
              alt="Logo knjiznice"
              className="mb-4 rounded-md"
              style={{ width: '200px', height: '200px' }}
            />
            <p className="text-5xl font-extrabold">Dobrodošli u knjižnicu Marko Marulić</p>
          </div>
          <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">LOGIN</h3>
            <form onSubmit={onSubmit} className="w-full flex flex-col justify-center">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 font-bold text-white focus:outline-none rounded p-3"
                onClick={onSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;