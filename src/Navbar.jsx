import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import './App.css';



export default function Navbar() {
    return (
                <div className="bg-blue-700  h-14  px-6 flex items-center justify-between text-center Navbar" >
                    <div className='w-52  flex justify-between items-center '>
                        <img src="logo.png" alt="logo-here" className='w-28 object-cover' />
                        <button className= " btn h-9 w-9 flex justify-center items-center hover:bg-blue-600"><FaBars className=' text-gray-300'/></button>
                    </div>
                    <div>
                        <button className="  w-36 h-8 bg-green-600 border-black flex justify-between px-2 py-5 text-center text-white items-center " >
                        <FaGlobe className='text-2xl'/>
                        District Codes
                        </button>
                    </div>
                </div>
    )}   