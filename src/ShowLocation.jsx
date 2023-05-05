import React, { useState } from 'react'
import { FaCrosshairs,FaCaretDown } from "react-icons/fa";
import {items} from './list'
import Details from './Detail.jsx'


export default function ShowLocation() {
  const [show,setShow] = useState(false)
  const onclick= ()=>{
    setShow(true)
  }
  return (
    <div className="h-28 shadow-custom bg-zinc-50 shadow-lg p-4 fixed w-full bottom-0 sm:static flex   ">
      <div>
            <div className='flex sm:flex-col '>
              <div className="flex sm:gap-8 items-center">
                <FaCrosshairs className="text-green-500 text-2xl" />
                <h1 className=" hidden sm:block text-green-500 text-lg font-semibold ">
                  Geo Location
                </h1>
              </div>
              <div className=" text-uppercase ">
                <span className="text-green-500 text-3xl relative left-12 sm:top-3 ">
                  GE-323-1583
                </span>
              </div>
            </div>

            <div className="text-right   relative top-2 ">
              <span className='sm:hidden  relative left-8 text-2xl'>{items[0].value}</span>
              <small className=" font-light invisible sm:visible text-primary relative left-32 text-blue-500">
                Address version2
              </small>
            </div>
      </div>
            <div>
              <button className=' text-2xl h-[40px] w-[40px] bg-blue-600 sm:hidden text-white flex justify-center items-center'onClick={onclick}><FaCaretDown/>
              {show?<Details/>:null}
              </button>

            </div>
    </div> 
  )
}

