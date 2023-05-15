import React from 'react'
import {
  FaGlobeAmericas,
  FaDirections,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function SmallDetails (props) {
  const { lat, lng } = props.location;
 const items = [
  {
    icon: <FaDirections className="text-blue-300 text-2xl" />,
    title: "Steet Name",
    value: "Lante Abraham Street",
  },
  {
    icon: <FaGlobe className="text-blue-300 text-2xl" />,
    title: "Region",
    value: "Greater Accra",
  },
  {
    icon: <FaGlobeAmericas className="text-blue-300 text-2xl" />,
    title: "District",
    value: "Weija",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-300 text-2xl" />,
    title: "Community",
    value: "Tunga ",
  },
  {
    icon: <FaGlobeAmericas className="text-blue-300 text-2xl" />,
    title: "Postal Area",
    value: "Dansoman 456",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-300 text-2xl" />,
    title: "Postal Code",
    value: "GJ453",
  },
  {
    icon: <FaDirections className="text-blue-300 text-2xl" />,
    title: "lattitude,longitude",
    value: ` ${lat}, ${lng}`
  },
];
  return (
    <ul className=" fixed w-full left-0 bottom-[100px] bg-gray-100 sm:hidden }">
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
    <li className=" border-b py-[4px] px-6">
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
