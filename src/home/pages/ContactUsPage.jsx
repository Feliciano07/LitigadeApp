import React from 'react'

export const ContactUsPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Sección superior */}
            <div
                className="flex-grow h-4/5 flex items-center px-4 sm:px-6 lg:px-8"
                style={{ backgroundImage: "url('/public/assets/contact.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Contenido centrado */}
                <div className="w-full p-8 rounded-lg">
                    {/* Encabezado */}
                    <div className="text-left mb-12">
                        <h2 className="text-2xl font-medium text-gray-800">Contact Us</h2>
                        <p className="text-5xl font-normal text-gray-900">Make an Appointment</p>
                    </div>
                    {/* Formulario */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:col-span-1">
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-4 border border-gray-300 rounded-md"
                                    />
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="w-full px-4 py-4 border border-gray-300 rounded-md"
                                    />
                                    <div className="relative">
                                        <select className="w-full px-4 py-4 border border-gray-300 rounded-md appearance-none" >
                                            <option className="bg-gray-50 bg-opacity-10">Please Select</option>
                                            {/* Add your department options here */}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M7 10l5 5 5-5H7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <select className="w-full px-4 py-4 border border-gray-300 rounded-md appearance-none">
                                            <option className="bg-gray-50 bg-opacity-10">4:00 Available</option>
                                            {/* Add your time options here */}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M7 10l5 5 5-5H7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <textarea
                                    placeholder="Message"
                                    className="w-full px-4 py-4 border border-gray-300 rounded-md mb-6"
                                    rows="5"
                                ></textarea>
                                <button className="w-full lg:w-64 md:w-64  bg-brown-500 text-white py-5 rounded-md text-lg">Book Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sección inferior */}
            <div className="h-1/5 py-8 p-8">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row  md:items-start justify-between">
                    <div className="flex flex-col text-left">
                        <div className="flex flex-row">
                            <h3 className="text-3xl font-medium text-gray-800">Request A Free Consultation</h3>
                        </div>
                        <div className="flex flex-row">
                            <p className="mt-4 text-lg leading-6 text-gray-400">the quick fox jumps over the lazy dog</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-6 md:mt-0">
                        <button className="bg-brown-500 text-white py-5 px-10 rounded-md text-lg">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
