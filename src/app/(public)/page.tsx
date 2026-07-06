import BrandGrid from "../components/(public)/BrandGrid/BrandGrid";
import VehicleGrid from "../components/(public)/FeaturedListings/VehicleGrid";
import Hero from "../components/(public)/Hero/Hero";
import Banner from "../components/(public)/Promotion/Banner";
import Search from "../components/(public)/Search/Search";
import VehicleType from "../components/(public)/VehicleType/VehicleType";
import { getAllVehicles } from "../libs/crud/vehicle/vehicle.get";

export default async function Home() {
  const vehicles = await getAllVehicles()
  return (
   <>
   <Hero/>
   <Search/>
   <BrandGrid/>
   <Banner/>
   <VehicleType/>
   <VehicleGrid
   vehicles={vehicles}
   />
   </>
  )
}
