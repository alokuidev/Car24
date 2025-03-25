const NavBar = () => {

    return (
        <nav className="bg-white p-4 shadow-md flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Cars24</div>
            <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-500">Buy used car</a>
                <a href="#" className="text-gray-600 hover:text-blue-500">Sell car</a>
                <a href="#" className="text-gray-600 hover:text-blue-500">Car finance</a>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
            </div>
        </nav>
    )
}

export default NavBar;