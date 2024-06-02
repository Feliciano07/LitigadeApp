

export const AboutPage = () => {
    return (
        <div className="relative min-h-screen">
            {/* Sección superior blanca */}
            <div className="absolute top-14 left-0 w-full h-3/5 bg-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-medium text-gray-800 text-center">Who We Are</h2>
                <p className="mt-4 text-base md:text-lg leading-6 text-gray-400 text-center">
                    Problems trying to resolve the conflict between
                </p>
                <p className="text-base md:text-lg leading-6 text-gray-400 text-center">
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>

            {/* Sección inferior azul */}
            <div className="absolute bottom-0 left-0 w-full h-2/5 bg-cyan-700">
                {/* Imagen y botón de reproducción */}
                <div className="relative mx-auto -mt-60 sm:-mt-60 md:-mt-60 lg:-mt-60 px-12" style={{ maxWidth: '950px' }}>
                    <div className="relative">
                        <img
                            className="w-full shadow-lg h-120 sm:h-120 md:h-120 lg:h-120 object-cover"
                            src={'/public/assets/about.jpeg'}
                            alt="Who We Are"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-700 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-cyan-700 text-white rounded-full p-6 sm:p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14 sm:h-14 sm:w-14">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
