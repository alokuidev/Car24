import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, PhoneCall } from "lucide-react";

const VehiclePDP = () => {
  const vehicle = {
    name: "Tesla Model S",
    price: "$79,990",
    year: 2024,
    fuel: "Electric",
    mileage: "0 km",
    engine: "Dual Motor AWD",
    image: "https://via.placeholder.com/600x400",
    description: "Experience the future with Tesla Model S - the ultimate electric performance sedan."
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={vehicle.image} alt={vehicle.name} className="rounded-lg shadow-md" />
            <div>
              <h1 className="text-3xl font-bold">{vehicle.name}</h1>
              <p className="text-xl text-gray-600">{vehicle.price}</p>
              <p className="mt-2 text-gray-700">{vehicle.description}</p>
              <div className="mt-4">
                <p><strong>Year:</strong> {vehicle.year}</p>
                <p><strong>Fuel:</strong> {vehicle.fuel}</p>
                <p><strong>Mileage:</strong> {vehicle.mileage}</p>
                <p><strong>Engine:</strong> {vehicle.engine}</p>
              </div>
              <Button className="mt-4 w-full flex items-center gap-2">
                <PhoneCall size={18} /> Contact Seller
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Similar Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="p-4">
              <img src="https://via.placeholder.com/300x200" alt="Similar Vehicle" className="rounded-md" />
              <p className="mt-2 font-semibold">Vehicle {index + 1}</p>
              <p className="text-gray-600">$XX,XXX</p>
              <Button className="mt-2 w-full">View Details</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehiclePDP;
