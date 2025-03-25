function App() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
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

      {/* Main Container */}
      <div className="flex p-6">
        
        {/* Left Sidebar (Filters) */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Budget</h2>
          <input type="range" min="200000" max="2500000" className="w-full mb-4" />
          <p className="text-gray-600">₹2,00,000 - ₹25,00,000</p>

          <h2 className="text-lg font-semibold mt-6 mb-2">Make & Model</h2>
          <input type="text" placeholder="Search brand or model" className="w-full p-2 border rounded mb-4" />
          
          <div className="space-y-2">
            <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 SELTOS</button>
            <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 NEXON</button>
            <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 Ecosport</button>
            <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 Creta</button>
          </div>
        </div>

        {/* Vehicle Listings */}
        <div className="w-3/4 px-6">
          <h1 className="text-2xl font-bold mb-4">Available Vehicles</h1>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Car Card */}
              <div  className="bg-white p-4 rounded-lg shadow-md">
                <img src="/image/car.png" alt="car name" className="w-full rounded-md" />
                <h2 className="text-lg font-semibold mt-2">Car Name</h2>
                <p className="text-gray-500">KM • Type</p>
                <p className="text-lg font-bold mt-2">Price</p>
                <p className="text-sm text-gray-600">EMI EMI</p>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
