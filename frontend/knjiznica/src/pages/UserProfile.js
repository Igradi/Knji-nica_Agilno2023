import React from 'react';

const UserProfile = () => {
    return (
        <div className="bg-gray-200 min-h-screen pb-24">
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
                            <div className="mb-6">
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your first name</label>
                                <input type="text" id="first_name" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Your first name" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your last name</label>
                                <input type="text" id="last_name" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Your last name" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="your.email@mail.com" required />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Ažuriraj</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
