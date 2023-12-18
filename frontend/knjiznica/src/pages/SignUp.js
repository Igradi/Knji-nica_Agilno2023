import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="bg-gradient-to-tr from-green-300 to-green-600 h-screen w-full flex justify-center items-center">
      <div class="bg-green-600 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
        <div class="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
          <h1 class="text-3xl">Hello</h1>
          <p class="text-5xl font-extrabold">Welcome!</p>
        </div>
        <div class="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
          <h3 class="text-3xl font-bold text-green-600 mb-4">LOGIN</h3>
          <form action="#" class="w-full flex flex-col justify-center">
            <div class="mb-4">
              <input
                {...register("name")}
                type="name"
                placeholder="Name"
                class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
              />
            </div>
            <div class="mb-4">
              <input
                {...register("lastName")}
                type="lastname"
                placeholder="Last name"
                class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
              />
            </div>
            <div class="mb-4">
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
              />
            </div>
            <div class="mb-4">
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
              />
            </div>
            <button
              class="bg-green-600 font-bold text-white focus:outline-none rounded p-3"
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
