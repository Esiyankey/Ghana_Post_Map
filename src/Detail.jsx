import { useState } from "react";
import {FaGlobeAmericas ,FaDirections,FaGlobe,FaMapMarkerAlt} from "react-icons/fa";


export default function Details() {
    return (
        <div >
                    <ul >
                        <li className="h-20 border-b p-4 ">
                            <div className="flex gap-8">
                                <FaDirections className="text-blue-300 text-2xl"/>
                                <div className="block">
                                    <h1 className="text-[16px] font-semibold">Street Name</h1>
                                    <p className=" text-[#FF7518]    text-[15px] ">
                                        Lante Abraham Street
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="h-20 border-b  p-4">
                            <div className="flex gap-8">
                                <FaGlobe className="text-blue-300  text-2xl"/>
                                <div className="block">
                                    <h1 className="text-[16px] font-semibold">Region</h1>
                                    <p className=" text-[#FF7518]    text-[15px] ">
                                        Greater Accra
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="h-20 border-b  p-4">
                            <div className="flex gap-8 ">
                                <FaGlobeAmericas className="text-blue-300 text-2xl"/>
                                <div className="block">
                                    <h1 className="text-[16px]  font-semibold">District</h1>
                                    <p className=" text-[#FF7518]    text-[15px] ">
                                        Ablekuma West
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="h-20 border-b p-4 ">
                            <div className="flex gap-8">
                                <FaGlobeAmericas className="text-blue-300 text-2xl"/>
                                <div className="block">
                                    <h1 className="text-[16px] font-semibold">Community</h1>
                                    <p className=" text-[#FF7518]    text-[15px] ">
                                        Tunga 
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="h-20 border-b  p-4">
                            <div className="flex gap-8">
                                <FaGlobe className="text-blue-300 text-2xl"/>
                                <div className="block">
                                    <h1 className="text-[16px] font-semibold">Postal Area</h1>
                                    <p className=" text-[#FF7518]    text-[15px] ">
                                        Dansoman Estates 564
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="h-20 border-b p-4 ">
                            <div className="flex gap-8">
                                <FaGlobeAmericas className="text-blue-300 text-2xl"/>
                                <div className="block">
                                    <h1 className="text-[16px] font-semibold">Post Code</h1>
                                    <p className=" text-[#FF7518]  text-[15px] ">
                                        GU564
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="h-20   p-4">
                            <div className="flex gap-8">
                                <FaMapMarkerAlt className="text-blue-300 text-2xl"/>
                                <div className="block">
                                    <h1 className="text-[16px] font-semibold">Lattitude,Longitude</h1>
                                    <p className=" text-[#FF7518]    text-[15px] ">
                                       5.551176,-0.271404
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
    )}   