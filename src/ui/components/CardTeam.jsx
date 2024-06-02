import React from 'react'

export const CardTeam = ({ name, job, img }) => {
    return (
        <div className="bg-white border border-b-gray-100">
            <img className="w-full h-64 object-cover" src={img} alt={name} />
            <div className="my-6">
                <div className='text-center'>
                    <p className="text-2xl font-medium text-gray-600">{name}</p>
                    <p className="text-gray-400 font-semibold mt-1">{job}</p>
                </div>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="text-cyan-700">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.675 0h-21.35C.598 0 0 .598 0 1.325v21.351C0 23.403.598 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.463.099 2.796.143v3.24l-1.92.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116c.728 0 1.326-.598 1.326-1.324V1.325C24 .598 23.403 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="#" className="text-cyan-700">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" />
                            <path d="M16 11.37a4 4 0 1 1-7.94 1.36 4 4 0 0 1 7.94-1.36z" stroke="currentColor" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" />
                        </svg>
                    </a>
                    <a href="#" className="text-cyan-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.23 5.924c-.82.36-1.7.6-2.63.7a4.507 4.507 0 0 0 1.98-2.49 9.025 9.025 0 0 1-2.86 1.09 4.48 4.48 0 0 0-7.64 4.09 12.738 12.738 0 0 1-9.26-4.69 4.48 4.48 0 0 0 1.39 5.97 4.45 4.45 0 0 1-2.03-.56v.06c0 2.18 1.56 4 3.63 4.42a4.43 4.43 0 0 1-2.01.08 4.48 4.48 0 0 0 4.18 3.11 9.007 9.007 0 0 1-5.57 1.93c-.36 0-.71-.02-1.06-.06a12.704 12.704 0 0 0 6.88 2.01c8.26 0 12.79-6.84 12.79-12.77 0-.19-.01-.37-.02-.56a9.143 9.143 0 0 0 2.23-2.32" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
