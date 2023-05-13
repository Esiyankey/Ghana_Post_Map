import { useState } from "react";
import Details from "./Detail";
import Search from './Search'
import ShowLocation from "./ShowLocation";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MainContainer() {
  const {} =   LoadScript({
    googleMapsApiKey:"AIzaSyC6mZayim24ODUwxgUbIOrjl-yHCijClEo" 
  })

  
  return (
    <>
      <div className="  flex flex-1  overflow-y-auto  ">

        <div className="fixed sm:static overflow-y-auto  sm:bg-white  w-[100%]  sm:w-[400px] ">
          <Search />
          <h5 className=" px-0 py-4 font-light invisible sm:visible  ">Address Info </h5>

          <ShowLocation/>
       
          <Details />

        </div>

        <div className="w-[950px]    sm:w-full">
          <GoogleMap zoom={10} center={{lat: 6.6869,lng:-1.5721,}} ></GoogleMap>
          <Marker position={{lat: 6.6869,long:-1.5721}} />
        </div>
      </div>
    </>
  );
}



{/*<iframe className="w-full h-full" id="gmap_canvas"></iframe> src="https://maps.google.com/maps?
q=Kwame%20Nkrumah%20University%20Of%20Science%20and%20Technology&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" */}
