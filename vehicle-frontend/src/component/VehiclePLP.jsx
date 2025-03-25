import NavBar from "./NavBar.jsx";
import Filter from "./Filter.jsx";
import VehicleListing from "./VehicleListing.jsx";

const VehiclePLP = () => {



  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <NavBar/>
      {/* Main Container */}
      <div className="flex p-6">
        <div className="flex flex-col md:flex-row p-4 md:p-6 gap-4">
        {/* Left Sidebar (Filters) */}
        <Filter/>
        {/* Vehicle Listings */}
        <VehicleListing/>
        </div>
      </div>
    </div>
  )
}

export default VehiclePLP;