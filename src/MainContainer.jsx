import { useState } from "react";
import Details from "./Detail";
import Search from './Search'
import ShowLocation from "./ShowLocation";


export default function MainContainer() {
  return (
    <>
      <div className="flex flex-1 bg-red-400 overflow-y-auto">
        <div className=" overflow-y-auto bg-white  w-[350px]">
          <Search />
          <h5 className=" p-4 font-light ">Address Info </h5>
          <ShowLocation/>
          <Details />
        </div>

        <div className="w-[950px]    md:w-[75%]">
          
        </div>
      </div>
    </>
  );
}
