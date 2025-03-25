import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchVehicles} from "../Redux/vehicleSlice.js";

const VehicleListing = () =>{
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  if (loading) return <p>Loading vehicles...</p>;
  if (error) return <p>Error: {error}</p>;
    return(
        <div className="w-3/4 px-6">
            <h1 className="text-2xl font-bold mb-4">Available Vehicles</h1>

            <div className="grid grid-cols-3 gap-6">
              {/* Car Card */}
              {data.map((vehicle) => (
              <div className="bg-white p-4 rounded-lg shadow-md" key={vehicle.id}>
                <img src="/image/car.png" alt="car name" className="w-full rounded-md"/>
                <h2 className="text-lg font-semibold mt-2">{vehicle.make}</h2>
                <p className="text-gray-500">KM • Type</p>
                <p className="text-lg font-bold mt-2"><span>&#8364;</span>{vehicle.price}</p>
                <p className="text-sm text-gray-600">EMI EMI</p>
              </div>
              ))}
            </div>
          </div>
    )
}

export default VehicleListing;