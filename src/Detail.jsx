import { useState } from "react";
import {FaGlobeAmericas ,FaDirections,FaGlobe,FaMapMarkerAlt} from "react-icons/fa";


export default function Details() {
    return (
        <div >
                    <ul >
                        <li className="h-20 border-b p-4 ">
                            <div className="flex gap-16">
                                <FaDirections className="text-blue-300 text-2xl"/>
                                <h1 className="text-sm font-semibold">Street Name</h1>
                            </div>
                            <p className=" text-red-700 m-2 relative  left-[85px] text-sm ">
                                Lante Abraham Street
                            </p>
                        </li>
                        <li className="h-20 border-b  p-4">
                            <div className="flex gap-16">
                                <FaGlobe className="text-blue-300  text-2xl"/>
                                <h1 className="text-sm font-semibold
                                ">Region</h1>
                            </div>
                            <p className=" text-red-700 m-2 relative  left-[85px] text-sm ">
                                Greater Accra
                            </p>
                        </li>
                        <li className="h-20 border-b  p-4">
                            <div className="flex gap-16">
                                <FaGlobeAmericas className="text-blue-300 text-2xl"/>
                                <h1 className="text-sm  font-semibold">District</h1>
                            </div>
                            <p className=" text-red-700 m-2 relative  left-[85px] text-sm ">
                                Ablekuma West
                            </p>
                        </li>
                        <li className="h-20 border-b p-4 ">
                            <div className="flex gap-16">
                                <FaGlobeAmericas className="text-blue-300 text-2xl"/>
                                <h1 className="text-sm font-semibold">Community</h1>
                            </div>
                            <p className=" text-red-700 m-2 relative  left-[85px] text-sm ">
                                Tunga 
                            </p>
                        </li>
                        <li className="h-20 border-b  p-4">
                            <div className="flex gap-16">
                                <FaGlobe className="text-blue-300 text-2xl"/>
                                <h1 className="text-sm font-semibold">Postal Area</h1>
                            </div>
                            <p className=" text-red-700 m-2 relative  left-[85px] text-sm ">
                               Dansoman Estates 564
                            </p>
                        </li>
                        <li className="h-20 border-b p-4 ">
                            <div className="flex gap-16">
                                <FaGlobeAmericas className="text-blue-300 text-2xl"/>
                                <h1 className="text-sm font-semibold">Post Code</h1>
                            </div>
                            <p className=" text-red-700 m-2 relative left-[85px] text-sm ">
                                GU564
                            </p>
                        </li>
                        <li className="h-20 border-b  p-4">
                            <div className="flex gap-16">
                                <FaMapMarkerAlt className="text-blue-300 text-2xl"/>
                                <h1 className="text-sm font-semibold">Lattitude,Longitude</h1>
                            </div>
                            <p className=" text-red-700 m-2 relative  left-[85px] text-sm ">
                              5.551176,-0.271404
                            </p>
                        </li>
                    </ul>
                </div>
    )}   