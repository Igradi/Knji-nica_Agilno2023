import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

export function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        { withCredentials: true }
      );
      toast.success("Registrirani ste!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-blue-800 to-blue-900 h-screen w-full flex justify-center items-center">
      <div className="bg-blue-900 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
        <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl">Hello</h1>
          <p className="text-5xl font-extrabold">Welcome!</p>
        </div>
        <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">REGISTER</h3>
          <form action="#" className="w-full flex flex-col justify-center">
            <div className="mb-4">
              <input
                {...register("name")}
                type="name"
                placeholder="Name"
                className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-4">
              <input
                {...register("lastName")}
                type="lastname"
                placeholder="Last name"
                className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-4">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="mb-4">
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-blue-600"
              />
            </div>
            <button
              className="bg-blue-600 font-bold text-white focus:outline-none rounded p-3"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
