import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterVehicles, filterVehiclesByPrice} from "../Redux/vehicleSlice.js";

const Filter = () => {
    const dispatch = useDispatch();
    const [showFilters, setShowFilters] = useState(false);
    const {filteredData} = useSelector((state) => state.vehicles);
    const [searchTerm, setSearchTerm] = useState("");
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [filterPrice, setFilterPrice] = useState(0);
    const [fixedMaxPrice, setFixedMaxPrice] = useState(0);


    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleBrandFilter = (brand) => {
        if (selectedBrand === brand) {
            setSelectedBrand(null); // Reset filter if the same brand is clicked
            dispatch(filterVehicles("")); // Show all vehicles
        } else {
            setSelectedBrand(brand);
            dispatch(filterVehicles(brand));
        }
    };

    const uniqueBrands = [...new Set(filteredData.map(vehicle => vehicle.brand))];
    const handleFilter = (value) => {
        dispatch(filterVehicles(value));
    };
    useEffect(() => {
        if (filteredData.length > 0) {
            const max = Math.max(...filteredData.map((elem) => elem.price));
            const min = Math.min(...filteredData.map((elem) => elem.price));

            setMinPrice(min);
            setMaxPrice(max);
            setFilterPrice(max); // Initialize filter range at max price

            if (fixedMaxPrice === 0) {
                setFixedMaxPrice(max); // Only set this ONCE
            }
        }
    }, [filteredData]);

    const handlePriceChange = (e) => {
        const value = Number(e.target.value);
        setFilterPrice(value);
        dispatch(filterVehiclesByPrice({ searchTerm, minPrice, filterPrice: value }));
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
                <input type="range"
                       min={minPrice}
                       max={fixedMaxPrice}
                       value={filterPrice}
                       onChange={handlePriceChange}
                       className="w-full mb-4"/>
                <p className="text-gray-600"><span>&#8364;</span> {minPrice} - <span>&#8364;</span> {maxPrice}</p>

                <h2 className="text-lg font-semibold mt-6 mb-2">Make & Model</h2>
                <input type="text" placeholder="Search brand or model" className="w-full p-2 border rounded mb-4"
                       value={searchTerm}
                       onChange={(e) => {
                           setSearchTerm(e.target.value);
                           handleFilter(e.target.value);
                       }}/>

                {uniqueBrands.map((brand) => (
                    <button
                        key={brand}
                        className={`border p-2 my-1 rounded-lg w-full text-left hover:bg-gray-200 ${
                            selectedBrand === brand ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={() => handleBrandFilter(brand)}
                    >
                        🚗 {brand}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Filter;