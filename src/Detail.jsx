import { useState } from "react";

import {items} from './list'


export default function Details() {
     

  return (
    
      <ul className=" hidden sm:block ">
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
};
