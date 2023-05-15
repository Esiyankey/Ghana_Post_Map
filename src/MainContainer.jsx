import { useState } from "react";
import Details from "./Detail";
import Search from "./Search";
import ShowLocation from "./ShowLocation";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./map.css";

export default function MainContainer() {
  const [location, setLocation] = useState({ lat: 6.6869, lng: -1.5712 });
  const [region,setRegion]=useState("")
  const [street,setStreet]=useState("")
  const handleStreetChange = (newStreet) => {
    setStreet(newStreet);
  };
  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
  };
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  
  return (
    <>
      <div className="  flex overflow-y-auto">
        <div className=" overflow-y-auto sm:static fixed  sm:bg-white    sm:w-[400px] ">
          <Search onLocationChange={handleLocationChange}   onRegionChange={handleRegionChange} onStreetChange={handleStreetChange}/>
          <h5 className="  py-4 font-light hidden sm:block   ">
            Address Info
          </h5>

          <ShowLocation location={location} region={region} street={street}/>

          <Details location={location} region={region} street={street}/>
        </div>

        <LoadScript googleMapsApiKey="AIzaSyBwfcFbeO3aEul99U-XPn0aN8fbH2NUjGw">
          <div className="w-[100%] h-[520px] sm:h-[100%] relative top-16 sm:top-0 map-container  -z-10 sm:z-0 sm:w-full">
            <GoogleMap zoom={15} center={location}>
                <Marker position={{ lat: location.lat, lng: location.lng }}/>
                <Marker position={{ lat: location.lat, lng: location.lng }}/>
            </GoogleMap>
          </div>
        </LoadScript>
      </div>
    </>
  );
}
