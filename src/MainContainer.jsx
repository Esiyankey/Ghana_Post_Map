import { useState } from "react";
import Details from "./Detail";
import Search from "./Search";
import ShowLocation from "./ShowLocation";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./map.css";

export default function MainContainer() {
  const [location, setLocation] = useState({ lat: 6.6869, lng: -1.5712 });
  const [region,setRegion]=useState("")

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
  };
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  
  return (
    <>
      <div className="  flex overflow-y-auto">
        <div className="fixed overflow-y-auto sm:static  sm:bg-white  w-[100%]  sm:w-[400px] ">
          <Search onLocationChange={handleLocationChange}   onRegionChange={handleRegionChange}/>
          <h5 className=" px-0 py-4 font-light invisible sm:visible   ">
            Address Info
          </h5>

          <ShowLocation location={location} region={region} />

          <Details location={location} region={region}/>
        </div>

        <LoadScript googleMapsApiKey="AIzaSyBwfcFbeO3aEul99U-XPn0aN8fbH2NUjGw">
          <div className="w-[950px] h-[520px] sm:h-[100%] relative top-16 sm:top-0 map-container  -z-10 sm:z-0 sm:w-full">
            <GoogleMap zoom={15} center={location}>
              
              {/* {location.lat !== null && ( */}
                <Marker position={{ lat: location.lat, lng: location.lng }}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  scaledSize: { width: 150, height: 150 },
                }}
                 />
              {/* )} */}
          
            </GoogleMap>
          </div>
        </LoadScript>
      </div>
    </>
  );
}
