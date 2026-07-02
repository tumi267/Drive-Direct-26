'use client'

import useVehicleFilters from '@/app/hooks/useVehicleFilters'

function VehicleFilters() {
  const {make,setMake,bodyType,setBodyType,fuelType,setFuelType,transmission,setTransmission,minPrice,setMinPrice,maxPrice,setMaxPrice,sort,setSort,applyFilters,} = useVehicleFilters()
  return (
    <div className="border rounded-lg p-6 mb-8 grid md:grid-cols-3 gap-4">
      <input
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        className="border rounded p-2"
      />

      <select
        value={bodyType}
        onChange={(e) => setBodyType(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Body Types</option>
        <option value="SEDAN">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="HATCHBACK">Hatchback</option>
        <option value="COUPE">Coupe</option>
        <option value="CONVERTIBLE">Convertible</option>
        <option value="BAKKIE">Bakkie</option>
        <option value="VAN">Van</option>
      </select>

      <select
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Fuel Types</option>
        <option value="PETROL">Petrol</option>
        <option value="DIESEL">Diesel</option>
        <option value="HYBRID">Hybrid</option>
        <option value="ELECTRIC">Electric</option>
      </select>

      <select
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Transmissions</option>
        <option value="MANUAL">Manual</option>
        <option value="AUTOMATIC">Automatic</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border rounded p-2"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border rounded p-2"
      />

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border rounded p-2"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="year">Newest Year</option>
        <option value="mileage">Lowest Mileage</option>
      </select>

      <button
        onClick={applyFilters}
        className="bg-black text-white rounded p-2"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default VehicleFilters