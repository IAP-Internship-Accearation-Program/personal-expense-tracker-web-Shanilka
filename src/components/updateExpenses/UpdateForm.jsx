import React from 'react'
import { useState } from "react";

function UpdateForm({ isOpen, closeModal, formData, setFormData }) {

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-4">New Expense</h2>
                    <form onSubmit={setFormData}>

                        <label className="block mb-4">
                            <span className="text-gray-700">Category</span>
                            <select
                                className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                required
                                onChange={(val) => setFormData({ ...formData, category: val.target.value })}
                            >
                                <option value="" disabled selected>
                                    Select category
                                </option>
                                <option value="Foods">Foods</option>
                                <option value="education">Education</option>
                                <option value="transport">Transport</option>
                                <option value="shoping">Shoping</option>
                                <option value="other">Other</option>
                                {/* Add more options as needed */}
                            </select>
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Amount</span>
                            <input
                                type="number"
                                className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                placeholder="Enter amount"
                                required
                                onChange={(val) => setFormData({ ...formData, price: val.target.value })}
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Date</span>
                            <input
                                type="date"
                                className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                required
                                onChange={(val) => setFormData({ ...formData, date: val.target.value })}
                            />
                        </label>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out">
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="mt-4 ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}

export default UpdateForm