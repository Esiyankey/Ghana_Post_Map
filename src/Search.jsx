import { useState } from "react";

export default function Search(props) {
  const [typedText, setTypedText] = useState("");
 

  const handleInputChange = (e) => {
    setTypedText(e.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${typedText}&key=AIzaSyBwfcFbeO3aEul99U-XPn0aN8fbH2NUjGw`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const currentParameterData = data.results[0];
          console.log(currentParameterData)
          const region = currentParameterData.address_components.find(
            (component) =>
              component.types.includes("administrative_area_level_1")
          ).long_name;
          props.onRegionChange(region);
          const { lat, lng } = currentParameterData.geometry.location;
          props.onLocationChange({ lat, lng });


        } else {
          alert("Cant find this location");
        }

        setTypedText("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className=" bg-gray-50 ">
      <input
        type="text"
        placeholder="Search for Address, Places, Cordinates"
        className=" focus:border-blue-300 outline-none m-4 w-[90%] bg-gray-50 py-2 px-12 shadow-custom border  border-gray-300"
        onChange={handleInputChange}
        value={typedText}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
