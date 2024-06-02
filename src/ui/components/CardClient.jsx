import React from 'react'

export const CardClient = ({ name, job, description, img, stars }) => {
    return (
        <div className="bg-white py-8 pl-10 pr-20 rounded-lg border border-gray-200 flex flex-col">
            <div className="flex items-center mb-6">
                <div className="flex">
                    {[...Array(stars)].map((_, i) => (
                        <svg key={i} className="h-7 w-7 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27l5.18 3.73-1.64-5.81L21 9.24l-5.92-.44L12 3 8.92 8.8 3 9.24l4.46 4.95-1.64 5.81L12 17.27z" />
                        </svg>
                    ))}
                    {[...Array(5 - stars)].map((_, i) => (
                        <svg className="h-7 w-7 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l5.18 3.73-1.64-5.81L21 9.24l-5.92-.44L12 3 8.92 8.8 3 9.24l4.46 4.95-1.64 5.81L12 17.27z" />
                        </svg>
                    ))}
                </div>
            </div>
            <div className='mb-6'>
                <p className="text-gray-400 text-left font-semibold text-lg">
                    {description}
                </p>
            </div>
            <div className="flex items-center">
                <img className="h-14 w-14 rounded-full mr-4" src={img} alt="Regina Miles" />
                <div className="text-left">
                    <p className="text-yellow-500 font-normal text-lg">{name}</p>
                    <p className="text-gray-600 font-semibold text-lg">{job}</p>
                </div>
            </div>
        </div>
    )
}
