const Filter = () => {

    return (
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Budget</h2>
            <input type="range" min="200000" max="2500000" className="w-full mb-4"/>
            <p className="text-gray-600">₹2,00,000 - ₹25,00,000</p>

            <h2 className="text-lg font-semibold mt-6 mb-2">Make & Model</h2>
            <input type="text" placeholder="Search brand or model" className="w-full p-2 border rounded mb-4"/>

            <div className="space-y-2">
                <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 SELTOS</button>
                <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 NEXON</button>
                <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 Ecosport</button>
                <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 Creta</button>
            </div>
        </div>
    )
}

export default Filter;