import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const { userId } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/${userId}`);
                const { data } = response;
                setUserData({
                    firstName: data.name,
                    lastName: data.lastName,
                    email: data.email
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/users/${userId}`, {
                name: userData.firstName,
                lastName: userData.lastName,
                email: userData.email
            });
            const updatedUserData = response.data;

            setUserData({
                firstName: updatedUserData.name,
                lastName: updatedUserData.lastName,
                email: updatedUserData.email
            });
        } catch (error) {
            console.log(error);
        }
    };

    const { firstName, lastName, email } = userData;

    return (
        <div className="bg-gray-200 min-h-screen p-24">
            <header className="px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
            </header>
            <div className="container mx-auto max-w-3xl mt-8">
                <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
                    <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
                        <h2 className="font-medium text-md text-gray-700 mb-4 tracking-wide">Informacije o profilu</h2>
                        <p className="text-xs text-gray-500">Ovdje možeš ažurirati informacije o profilu kao što su ime, prezime, email...</p>
                    </div>
                    <div className="md:w-2/3 w-full">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-6">Ažuriranje informacija o profilu</h2>
                            <form onSubmit={handleUpdate}>
                                <div className="mb-6">
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your first name</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                        placeholder="Your first name"
                                        value={firstName}
                                        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your last name</label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                        placeholder="Your last name"
                                        value={lastName}
                                        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                        placeholder="your.email@mail.com"
                                        value={email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="flex justify-end">
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
};

export default UserProfile;
