import React, { useState } from "react";
import { FaCrosshairs, FaCaretDown } from "react-icons/fa";
import { items } from "./list";
import SmallDetails from "./SmallDetails.jsx";
import "./react.css";

export default function ShowLocation(props) {
  const { location } = props;
  const [showDetails, setShowDetails] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleAnimation = () =>{
    setMenuState(!menuState)
  }

  return (
    <>
      <div className="h-24 -z-32 shadow-custom bg-gray-100 my-2 px-6 py-2 fixed w-full bottom-0 sm:static flex  ">
        <div>
          <div className="flex sm:flex-col ">
            <div className="flex sm:gap-8 items-center">
              <FaCrosshairs className="text-green-500 text-2xl" />
              <h1 className=" hidden sm:block text-green-500 text-lg font-semibold ">
                Geo Location
              </h1>
            </div>
            <div className=" text-uppercase ">
              <span className="text-green-500 text-3xl relative left-12 sm:top-1 ">
                GE-323-1583
              </span>
            </div>
          </div>

          <div className="text-right   relative top-2 ">
            <span className="sm:hidden  relative left-8 text-lg">
              {items[0].value}
            </span>
            <small className=" font-light hidden sm:inline text-primary relative left-24 top-[-10px] text-blue-500">
              Address version2
            </small>
          </div>
        </div>
        <div>
          <button
            className=" relative left-28 text-2xl h-[35px] w-[30px] bg-blue-600 sm:hidden text-white flex justify-center items-center"
          onClick={() => {
              handleAnimation();
              handleShowDetails();
            }}
          >
            <FaCaretDown />
          </button>
        </div>
      </div>
      <div
  className={` fixed  w-full -z-20   transition-all duration-1000 ${menuState? 'top-1/2 animateIn': 'top-[320vh] animateOut'}
  `}
      >
        {showDetails && <SmallDetails location={location} />}
      </div>
    </>
  );
}
