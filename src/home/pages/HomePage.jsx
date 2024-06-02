import { NavBar } from '../../ui';

export const HomePage = () => {
    return (
        <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/public/assets/fondo.jpeg')" }}>
            {/* navbar */}
            <NavBar />
            {/* container */}
            <div className="flex flex-col md:flex-row justify-between items-center h-full p-4 md:p-8 mx-5">
                {/* Mensaje */}
                <div className="p-12 md:w-1/2 text-justify">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Help to reclaim your life and freedom</h1>
                    <p className="text-md md:text-lg mb-8 text-gray-400">We know how large objects will act, but things on a small scale.</p>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center md:items-start">
                        <button className="bg-yellow-800 text-white py-2 px-6 rounded-full">Get Quote Now</button>
                        <button className="border border-yellow-800 text-yellow-800 py-2 px-6 rounded-full">Learn More</button>
                    </div>
                </div>
                {/* Formulario */}
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-xs mr-14 my-10">
                    <h2 className="text-2xl font-normal mb-10 ml-3">Book Appointment</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Name*</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded bg-gray-50 bg-opacity-75"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Email*</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded bg-gray-50 bg-opacity-75"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Department*</label>
                            <div className="relative">
                                <select className="w-full px-3 py-2 border rounded bg-gray-50 bg-opacity-75 appearance-none pr-10">
                                    <option className="bg-gray-50 bg-opacity-10">Please Select</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M7 10l5 5 5-5H7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-1">Time*</label>
                            <div className="relative">
                                <select className="w-full px-3 py-2 border rounded bg-gray-50 bg-opacity-75 appearance-none pr-10">
                                    <option className="bg-gray-50 bg-opacity-10">4:00 Available</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M7 10l5 5 5-5H7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="my-5">
                            <button type="submit" className="w-full bg-cyan-700 text-white py-4 px-4 rounded">Book Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
