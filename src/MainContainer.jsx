import { useState } from "react";
import Details from "./Detail";
import Search from './Search'
import ShowLocation from "./ShowLocation";


export default function MainContainer() {
  let callback = () => {
    
  }
  return (
    <>
      <div className="  flex flex-1  overflow-y-auto  ">

        <div className="fixed sm:static overflow-y-auto  sm:bg-white  w-[100%]  sm:w-[400px] ">
          <Search />
          <h5 className=" p-4 font-light invisible sm:visible ">Address Info </h5>

          <ShowLocation/>

          <Details />

        </div>

        <div className="w-[950px]    sm:w-full">
        <iframe className="w-full h-full" id="gmap_canvas" src="https://maps.google.com/maps?q=Kwame%20Nkrumah%20University%20Of%20Science%20and%20Technology&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
    </>
  );
}
