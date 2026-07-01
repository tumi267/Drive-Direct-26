import VehicleGrid from "../components/(public)/FeaturedListings/VehicleGrid";
import Hero from "../components/(public)/Hero/Hero";
import Banner from "../components/(public)/Promotion/Banner";
import { getAllVehicles } from "../libs/crud/vehicle/vehicle.get";

export default async function Home() {
  const vehicles = await getAllVehicles()
  return (
   <>
   <Hero/>
   search
   brand grid
   <Banner/>
   vehicle type
   <VehicleGrid
   vehicles={vehicles}
   />
   </>
  )
}
