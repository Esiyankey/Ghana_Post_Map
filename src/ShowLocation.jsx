import React from 'react'
import { FaCrosshairs } from "react-icons/fa";
import './App.css';


export default function ShowLocation() {
  return (
    <div className="h-28 shadow-custom bg-zinc-50 shadow-lg p-4 ">
            <div className="flex gap-8 items-center">
              <FaCrosshairs className="text-green-500" />
              <h1 className=" text-green-500 text-lg font-semibold ">
                Geo Location
              </h1>
            </div>
            <div className=" text-uppercase ">
              <span className="text-green-500 text-3xl relative left-11 top-3">
                GE-323-1583
              </span>
            </div>
            <div className="text-right relative top-2">
              <small className=" font-light text-primary text-blue-500">
                Address version2
              </small>
            </div>
          </div> 
  )
}
