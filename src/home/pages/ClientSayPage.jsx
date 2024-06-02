import React from 'react'
import { CardClient } from '../../ui'

const cardData = [
    {
        name: 'Regina Mile',
        job: 'Designer',
        description: 'Slate helps you see how many more days you need to work to reach your financial goal.',
        img: 'public/assets/client.png',
        start: 4
    },
    {
        name: 'Regina Mile',
        job: 'Designer',
        description: 'Slate helps you see how many more days you need to work to reach your financial goal.',
        img: 'public/assets/client.png',
        start: 5
    },
    {
        name: 'Regina Mile',
        job: 'Designer',
        description: 'Slate helps you see how many more days you need to work to reach your financial goal.',
        img: 'public/assets/client.png',
        start: 3
    }
]


export const ClienteSayPage = () => {
    return (
        <div className="bg-gray-50 py-12 mx-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-5xl font-medium text-gray-800">What Clients Say</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">
                        Problems trying to resolve the conflict between
                    </p>
                    <p className="text-lg leading-6 text-gray-400">
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                {/* Cards */}
                <div className="mt-10 mx-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        cardData.map((item, index) => (
                            <CardClient
                                name={item.name}
                                job={item.job}
                                description={item.description}
                                img={item.img}
                                stars={item.start}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
