import { useState } from 'react'
import { FaCrosshairs} from "react-icons/fa";
import Details from './Detail';


export default function Main_container() {
   
    
    return (
        <div className='flex  '>
            <div className='   h-screen bg-white   w-[400px] overflow-y-scroll'>
                <input type="text" placeholder='Search for Address, Places, Cordinates' className=' focus:border-blue-300 outline-none m-4 w-[345px] bg-gray-50 py-2 px-6 shadow-gray-400 border shadow-custom border-gray-300' />

                <h5 className=' p-2 font-light '>Address Info </h5>

                <div className='h-28 shadow-custom bg-zinc-50 shadow-lg p-4 '>
                    <div className='flex gap-8 items-center'>
                        <FaCrosshairs className='text-green-500'/>
                        <h1 className=' text-green-500 text-lg font-semibold '>Geo Location</h1>
                    </div>
                    <div className=' text-uppercase '> 
                        <span className='text-green-500 text-3xl relative left-11 top-3'>GE-323-1583</span>
                    </div>
                    <div className='text-right relative top-2'>
                        <small className=' font-light text-primary text-blue-500' >Address version2</small>
                    </div>
                </div>
                <Details/>
            </div>
            <div className='w-[900px]   bg-gray-600 md:w-[75%]  '>
                
            </div>
          </div>      
    )}   