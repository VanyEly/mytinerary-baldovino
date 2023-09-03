import React from "react";


export default function Itinerary({ itinerary }) {

  return (
    <div className="bg-blue-400 rounded-lg m-7">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-xl">{itinerary.name}</h2>
        <figure className="w-24 h-24 rounded-sm">
          <img src={itinerary.photo} alt={itinerary.name} />
        </figure>
      </div>
      <div>
        <div className="flex flex-row justify-around my-4 items-center font-bold">
          <div className="flex flex-row">
            <div className="self-center">
              
            </div>
            <p className=""> {itinerary.price}</p>
          </div>
          <p>Duration: {itinerary.duration} hs</p>
        </div>
      </div>
    </div>
  );
}