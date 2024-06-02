import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-blue_footer-bf text-gray-300 py-12 px-10">
            <div className="max-w-full mx-auto px-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-semibold text-white">Litigade</h2>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-blue-500">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.325v21.351C0 23.403.598 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.463.099 2.796.143v3.24l-1.92.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116c.728 0 1.326-.598 1.326-1.324V1.325C24 .598 23.403 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="#" className="text-pink-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path
                                        d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z"
                                    />
                                    <path
                                        d="M17.5 6.5h.01"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-blue-400">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.43 6v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.48 4.48 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-red-600">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M21.8 8.001a3.425 3.425 0 00-2.415-2.415C17.83 5 12 5 12 5s-5.83 0-7.385.585a3.425 3.425 0 00-2.415 2.415C2 9.565 2 12 2 12s0 2.435.585 3.999a3.425 3.425 0 002.415 2.415C6.17 19 12 19 12 19s5.83 0 7.385-.586a3.425 3.425 0 002.415-2.415C22 14.435 22 12 22 12s0-2.435-.585-3.999zM10 15.5v-7l6 3.5-6 3.5z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-700 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-300 mb-4">Company Info</h4>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Carrier</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">We are hiring</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-300 mb-4">Legal</h4>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Carrier</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">We are hiring</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-300 mb-4">Features</h4>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Business Marketing</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">User Analytic</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Live Chat</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Unlimited Support</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-300 mb-4">Resources</h4>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">IOS & Android</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Watch a Demo</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">Customers</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400">API</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
