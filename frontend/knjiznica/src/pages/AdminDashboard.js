import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get('http://localhost:4000/users');
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) {
            return;
        }

        try {
            await axios.delete(`http://localhost:4000/users/${userId}`);
            setUsers(users.filter((user) => user._id !== userId));
            toast.success('User deleted successfully');
        } catch (error) {
            console.log(error);
            toast.error('Failed to delete user');
        }
    };

    return (
        <div className="container mx-auto my-8 p-24">
            <h1 style={{ fontFamily: "'Pacifico', cursive", textDecoration: "none", backgroundClip: "text", color: "transparent", backgroundImage: "linear-gradient(to right, #34D399, #3B82F6, #8B5CF6)" }} className="text-3xl font-bold mb-4 text-center">Admin Dashboard - All Users</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {users.map((user) => (
                    <div key={user._id} className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-semibold">{user.name} {user.lastName}</h2>
                        <p className="text-gray-500">{user.email}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full focus:outline-none"
                                onClick={() => {
                                    // handle edit logic here
                                }}
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full focus:outline-none"
                                onClick={() => handleDelete(user._id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default AdminDashboard;