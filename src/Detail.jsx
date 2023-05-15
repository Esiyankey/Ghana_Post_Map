import { useState } from "react";
import {
  FaGlobeAmericas,
  FaDirections,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Details(props) {
  const { lat, lng } = props.location; 
  const region = props.region;
  const street = props.street;
 const items = [
  {
    icon: <FaDirections className="text-blue-300 text-xl" />,
    title: "Steet Name",
    value: street,
  },
  {
    icon: <FaGlobe className="text-blue-300 text-xl" />,
    title: "Region",
    value: region,
  },
  {
    icon: <FaGlobeAmericas className="text-blue-300 text-xl" />,
    title: "District",
    value: "Weija",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-300 text-xl" />,
    title: "Community",
    value: "Tunga ",
  },
  {
    icon: <FaGlobeAmericas className="text-blue-300 text-xl" />,
    title: "Postal Area",
    value: "Dansoman 456",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-300 text-xl" />,
    title: "Postal Code",
    value: "GJ453",
  },
  {
    icon: <FaDirections className="text-blue-300 text-xl" />,
    title: "lattitude,longitude",
    value: ` ${lat}, ${lng}`
  },
];

  return (
    
      <ul className=" hidden bg-white sm:block ">
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
