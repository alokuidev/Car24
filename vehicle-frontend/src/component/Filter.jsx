import {useState} from "react";
import {useDispatch} from "react-redux";
import {filterVehicles} from "../Redux/vehicleSlice.js";

const Filter = () => {
    const [showFilters, setShowFilters] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleFilter = (value) => {
        dispatch(filterVehicles(value));
    };

    return (
        <>
            <div className="md:hidden p-4">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="bg-blue-500 text-white w-full py-2 rounded-lg">
                    {showFilters ? "Hide Filters" : "Show Filters"}
                </button>
            </div>
            <div
                className={`w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md ${showFilters ? "block" : "hidden md:block"}`}>
                <h2 className="text-lg font-semibold mb-4">Budget</h2>
                <input type="range" min="200000" max="2500000" className="w-full mb-4"/>
                <p className="text-gray-600">₹2,00,000 - ₹25,00,000</p>

                <h2 className="text-lg font-semibold mt-6 mb-2">Make & Model</h2>
                <input type="text" placeholder="Search brand or model" className="w-full p-2 border rounded mb-4"
                       value={searchTerm}
                       onChange={(e) => {
                           setSearchTerm(e.target.value);
                           handleFilter(e.target.value);
                       }}/>

                <div className="space-y-2">
                    <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 SELTOS</button>
                    <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 NEXON</button>
                    <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 Ecosport</button>
                    <button className="border p-2 rounded-lg w-full text-left hover:bg-gray-200">🚗 Creta</button>
                </div>
            </div>
        </>
    )
}

export default Filter;