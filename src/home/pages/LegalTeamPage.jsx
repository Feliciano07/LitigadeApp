import React from 'react'
import { CardTeam } from '../../ui'

const cardData = [
    {
        name: 'Ashley Fletcher',
        job: 'LAYER & CEO',
        img: 'public/assets/ashley.jpeg'
    },
    {
        name: 'Rodney Stratton',
        job: 'CEO',
        img: 'public/assets/rodney.jpeg'
    },
    {
        name: 'Avie Beaton',
        job: 'LAYER CIVIL LAW',
        img: 'public/assets/avie.jpeg'
    }
]


export const LegalTeamPage = () => {
    return (
        <div className="bg-gray-50 py-12 px-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='text-center'>
                    <h2 className="text-5xl font-medium text-gray-800">Meet Our Attorneys</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">
                        Problems trying to resolve the conflict between
                    </p>
                    <p className="text-lg leading-6 text-gray-400">
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        cardData.map((item, index) => (
                            <CardTeam
                                name={item.name}
                                job={item.job}
                                img={item.img}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
