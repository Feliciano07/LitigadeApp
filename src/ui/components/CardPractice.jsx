
export const CardPractice = ({ title, icon, description = [] }) => {
    return (
        <div className="bg-white rounded-lg shadow-md relative">
            <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-orange-100 pt-10 pb-14 z-10 relative">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white">
                    {icon}
                </div>
                <h6 className="text-xl leading-6 font-medium text-gray-600">{title}</h6>
            </div>
            <div className="text-base text-gray-400 text-left py-10 px-10 border border-blue-200 rounded-lg relative -mt-6 z-20 bg-white">
                <ul className="pl-5 list-none font-semibold">
                    {
                        description.map((item, index) => (
                            <li className="relative mb-2" key={index}>
                                <span className="absolute left-0 top-0 -ml-5">-</span>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <a href="#" className="mt-4 block text-yellow-500 hover:underline font-normal text-lg">Learn More</a>
            </div>
        </div>
    )
}
