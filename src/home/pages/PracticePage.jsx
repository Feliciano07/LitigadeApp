import { CardPractice } from "../../ui";

const cardsData = [
    {
        title: 'Frauds or Mislead',
        description: [
            'The best products start with Figma',
            'Design with real data',
            'Lightning fast prototyping',
            'Fastest way to organize',
            'Work at the speed of thought'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-8 w-8 text-yellow-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
            </svg>
        ),
    },
    {
        title: 'Bailes & Warrants',
        description: [
            'The best products start with Figma',
            'Design with real data',
            'Lightning fast prototyping',
            'Fastest way to organize',
            'Work at the speed of thought'
        ],
        icon: (

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-8 w-8 text-yellow-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>

        ),
    },
    {
        title: 'Federal Drug Crimes',
        description: [
            'The best products start with Figma',
            'Design with real data',
            'Lightning fast prototyping',
            'Fastest way to organize',
            'Work at the speed of thought'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-8 w-8 text-yellow-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>

        ),
    },
];

export const PracticePage = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-8">
                <div className="text-center">
                    <h2 className="text-5xl font-medium text-gray-800">Practice Advice</h2>
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
                        cardsData.map((item, index) => (
                            <CardPractice
                                key={index}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
