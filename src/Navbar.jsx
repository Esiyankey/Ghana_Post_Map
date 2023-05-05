import { useState } from 'react'
import { FaBars,FaGlobe,FaLink } from "react-icons/fa";





export default function Navbar() {
    return (
                <div className="bg-blue-700  h-14  px-6 flex items-center justify-between text-center " >
                    <div className='w-52  flex justify-between items-center '>
                        <img src="/logo.png" alt="logo-here" className='w-28 object-cover' />
                        <button className= " hidden sm:flex h-9 w-9  justify-center items-center hover:bg-blue-600"><FaBars className=' text-gray-300'/></button>
                    </div>
                    <div>

                        <button className="sm:hidden flex  w-36 h-8 bg-blue-600 border-black justify-between px-2 py-5 text-center text-white items-center " >
                        <FaLink className='text-2xl '/>
                         Open in App
                        </button>

                        <button className=" sm:flex hidden  w-36 h-8 bg-green-600 border-black  justify-between px-2 py-5 text-center text-white items-center " >
                        <FaGlobe className='text-2xl '/>
                        District Codes
                        </button>
                    </div>
                </div>
    )}   