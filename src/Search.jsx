
import {useState} from "react";



export default function Search(props) {
    const [typedText, setTypedText]=useState("")
    
    const handleInputChange =(e)=>{
        setTypedText(e.target.value)
    }
    

  const handleKeyDown = async (event) => {
        if (event.key === "Enter") {

            try {
                const response = await fetch(
                  `https://maps.googleapis.com/maps/api/geocode/json?address=${typedText}&key=AIzaSyBwfcFbeO3aEul99U-XPn0aN8fbH2NUjGw`
                );
                const data = await response.json();
                const { lat, lng } = data.results[0].geometry.location;
                props.onLocationChange({ lat, lng });
                setTypedText("");
              } catch (error) {
                console.log(error);
              }
            setTypedText("")
        }
      }


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
    )}