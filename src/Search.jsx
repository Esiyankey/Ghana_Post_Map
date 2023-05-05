
import { useState } from "react";


export default function MainContainer() {
    return (
        <div className=" bg-gray-100  ">
            <input
            type="text"
            placeholder="Search for Address, Places, Cordinates"
            className=" focus:border-blue-300 outline-none m-4 w-[90%] bg-gray-50 py-2 px-12 shadow-gray-50 border shadow-custom border-gray-300"
            />
        </div>
    )}