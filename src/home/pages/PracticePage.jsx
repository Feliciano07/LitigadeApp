import React from 'react'

export const PracticePage = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Texto */}
                <h2 className="text-3xl font-extrabold text-gray-900">Practice Advice</h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                    Problems trying to resolve the conflict between
                </p>
                <p className="text-lg leading-6 text-gray-500">
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md relative">
                        <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-orange-100 pt-10 pb-14 z-10 relative">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Frauds or Mislead</h3>
                        </div>
                        <div className="text-base text-gray-500 text-left py-10 px-10 border border-blue-200 rounded-lg relative -mt-6 z-20 bg-white">
                            <ul className="pl-5 list-none">
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    The best products start with Figma
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Design with real data
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Lightning fast prototyping
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Fastest way to organize
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Work at the speed of thought
                                </li>
                            </ul>
                            <a href="#" className="mt-4 block text-yellow-600 hover:underline">Learn More</a>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md relative">
                        <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-orange-100 pt-10 pb-14 z-10 relative">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Frauds or Mislead</h3>
                        </div>
                        <div className="text-base text-gray-500 text-left py-10 px-10 border border-blue-200 rounded-lg relative -mt-6 z-20 bg-white">
                            <ul className="pl-5 list-none">
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    The best products start with Figma
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Design with real data
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Lightning fast prototyping
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Fastest way to organize
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Work at the speed of thought
                                </li>
                            </ul>
                            <a href="#" className="mt-4 block text-yellow-600 hover:underline">Learn More</a>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md relative">
                        <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-orange-100 pt-10 pb-14 z-10 relative">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Frauds or Mislead</h3>
                        </div>
                        <div className="text-base text-gray-500 text-left py-10 px-10 border border-blue-200 rounded-lg relative -mt-6 z-20 bg-white">
                            <ul className="pl-5 list-none">
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    The best products start with Figma
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Design with real data
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Lightning fast prototyping
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Fastest way to organize
                                </li>
                                <li className="relative mb-2">
                                    <span className="absolute left-0 top-0 -ml-5">-</span>
                                    Work at the speed of thought
                                </li>
                            </ul>
                            <a href="#" className="mt-4 block text-yellow-600 hover:underline">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
