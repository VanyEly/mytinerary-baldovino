import React from "react";
import { Link as Anchor } from 'react-router-dom'

const CityCard = ({city}) => {
  const { photo, name, _id} = city;
  return (
    <article className="bg-secondary rounded col-3 h-auto">
      <img src={`${city.photo}`} className="w-100 h-75" />
      <h2 className="text-center text-white py-3">{`${city.name}`}</h2>
      <Anchor className="btn btn-secondary" to={`/city/${city._id}`}>Details </Anchor> 
    </article>
  );
};

export default CityCard;
































