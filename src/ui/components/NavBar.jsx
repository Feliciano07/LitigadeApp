

export const NavBar = () => {
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Titulo */}
                    <div className="flex items-center w-1/2">
                        <a href="#" className="py-5 px-2 text-gray-700">
                            <span className="font-serif text-2xl">Litigade</span>
                        </a>
                    </div>
                    {/* Opciones de navegacion */}
                    <div className="hidden md:flex items-center justify-center space-x-4 text-sm">
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Home</a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Product</a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Pricing</a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">Contact</a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">
                            Search
                        </a>
                        <a href="#" className="py-5 px-3 text-gray-400 hover:text-gray-900">
                            Carrito
                        </a>
                    </div>
                    {/* Menu pantallas grandes */}
                    <div className="hidden md:flex items-center justify-end text-sm" style={{ width: '10%' }}>
                        <button className="py-5 px-3 text-gray-400 hover:text-gray-900">
                            Menu
                        </button>
                    </div>
                    {/* menu pantallas mobiles */}
                    <div className="md:hidden flex items-center justify-end w-full text-sm">
                        <button>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
