import { useState } from "react";
import {
  FaGlobeAmericas,
  FaDirections,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Details() {


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
          icon: <FaDirections className="text-blue-300 text-2xl" />,
          title: "District",
          value: "Weija",
        },
        {
          icon: <FaDirections className="text-blue-300 text-2xl" />,
          title: "Community",
          value: "Tunga ",
        },
        {
          icon: <FaDirections className="text-blue-300 text-2xl" />,
          title: "Postal Area",
          value: "Dansoman 456",
        },
        {
          icon: <FaDirections className="text-blue-300 text-2xl" />,
          title: "Postal Code",
          value: "GJ453",
        },
        {
          icon: <FaDirections className="text-blue-300 text-2xl" />,
          title: "lattitude,longitude",
          value: "5.550370, -0.276922",
        },
      ];




  return (
    
      <ul className="">
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
