import React from 'react'
import {items} from './list'


export default function SmallDetails () {
  return (
    <ul className=" fixed w-full  bottom-[60px] bg-gray-100 sm:hidden }">
      <h5 className='p-2 '>
        "Address info: "
        <span className='font-bold uppercase text-lg'>...</span>
        <span className='font-light text-lg'> Address version 2</span>
      </h5>
        {items.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </ul>
  );
}

const ListItem = ({ item }) => {
  return (
    <li className=" border-b py-2 px-6">
      <div className="flex gap-8">
        {item.icon}
        <div className="block">
          <h1 className="text-[16px] font-semibold">{item.title}</h1>
          <p className=" text-[#FF7518]    text-[15px] ">{item.value}</p>
        </div>
      </div>
    </li>
  );
  
}
