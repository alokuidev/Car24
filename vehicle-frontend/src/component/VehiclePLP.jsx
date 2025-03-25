import NavBar from "./NavBar.jsx";
import Filter from "./Filter.jsx";
import VehicleListing from "./VehicleListing.jsx";

const VehiclePLP = () => {



  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <NavBar/>
      {/* Main Container */}
      <div className="flex p-6">
        {/* Left Sidebar (Filters) */}
        <Filter/>
        {/* Vehicle Listings */}
        <VehicleListing/>
      </div>
    </div>
  )
}

export default VehiclePLP;