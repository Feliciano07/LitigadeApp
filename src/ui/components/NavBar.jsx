import { useState } from "react";


export const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="md:bg-transparent bg-white">
            <div className="mx-auto px-24">
                <div className="flex justify-between items-center py-5">
                    {/* Título */}
                    <div className="flex items-center w-3/5">
                        <a href="#" className="py-5 px-2 text-gray-700">
                            <span className="font-serif text-2xl">Litigade</span>
                        </a>
                    </div>
                    {/* Opciones de navegación */}
                    <div className="hidden md:flex items-center justify-center w-3/10 space-x-4 text-sm">
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Home</a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Product</a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Pricing</a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Contact</a>
                    </div>
                    {/* Menú pantallas grandes */}
                    <div className="hidden md:flex items-center justify-end w-1/10">
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                        </a>
                        <button className="py-5 px-3 text-gray-400 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </button>
                    </div>
                    {/* Menú pantallas móviles */}
                    <div className="md:hidden flex items-center justify-end w-full text-sm">
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>

                        </a>
                        <button className="py-5 px-3 text-gray-400 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Menú desplegable para pantallas pequeñas */}
                {isMenuOpen && (
                    <div className="flex flex-col md:hidden justify-center items-center">
                        <a href="#" className="py-2 px-3 text-gray-400 hover:text-gray-900">Home</a>
                        <a href="#" className="py-2 px-3 text-gray-400 hover:text-gray-900">Product</a>
                        <a href="#" className="py-2 px-3 text-gray-400 hover:text-gray-900">Pricing</a>
                        <a href="#" className="py-2 px-3 text-gray-400 hover:text-gray-900">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    )
}
