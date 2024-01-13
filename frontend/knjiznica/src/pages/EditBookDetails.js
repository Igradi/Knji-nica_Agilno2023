import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditBookDetails() {
  const params = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    authorName: "",
    authorLastName: "",
    genre: "",
    description: "",
    image: "",
  });
  const getBook = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/editbookdetails/${params.id}`
      );
      setBookData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:4000/editbookdetails/${params.id}`,
        { ...bookData }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-200 min-h-screen pb-24">
      <header className="px-6 bg-white flex flex-wrap items-center lg:py-0 py-2"></header>
      <div className="container mx-auto max-w-3xl mt-40 flex justify-center items-center ">
        <div className=" w-full bg-white rounded-lg mx-auto mt-45 flex justify-center items-center overflow-hidden rounded-b-none">
          <div className="md:w-2/3 w-full">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Uredi detalje knjige</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Title"
                    onChange={(e) =>
                      setBookData({ ...bookData, title: e.target.value })
                    }
                    required
                    defaultValue={bookData.title}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="author_name"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Author name
                  </label>
                  <input
                    type="text"
                    id="author_name"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Author name"
                    onChange={(e) =>
                      setBookData({ ...bookData, authorName: e.target.value })
                    }
                    required
                    defaultValue={bookData.authorName}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="author_last_name"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Author last name
                  </label>
                  <input
                    type="text"
                    id="author_last_name"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Author last name"
                    onChange={(e) =>
                      setBookData({
                        ...bookData,
                        authorLastName: e.target.value,
                      })
                    }
                    required
                    defaultValue={bookData.authorLastName}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="genre"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Genre
                  </label>
                  <input
                    type="text"
                    id="genre"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Genre"
                    onChange={(e) =>
                      setBookData({ ...bookData, genre: e.target.value })
                    }
                    required
                    defaultValue={bookData.genre}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="Description"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Description"
                    onChange={(e) =>
                      setBookData({ ...bookData, description: e.target.value })
                    }
                    required
                    defaultValue={bookData.description}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Link of image
                  </label>
                  <input
                    type="text"
                    id="image"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Link of image"
                    onChange={(e) =>
                      setBookData({ ...bookData, image: e.target.value })
                    }
                    required
                    defaultValue={bookData.image}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Ažuriraj
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
