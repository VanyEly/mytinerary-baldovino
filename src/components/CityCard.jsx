import React from "react";
import { Link as Anchor } from 'react-router-dom'

const CityCard = ({ciudad}) => {
  const { photo, name, _id} = ciudad;
  return (
    <article className="bg-secondary rounded col-3 h-auto">
      <img src={`${ciudad.photo}`} className="w-100 h-75" />
      <h2 className="text-center text-white py-3">{`${ciudad.name}`}</h2>
      <Anchor className="btn btn-secondary" to={`/city/${ciudad._id}`}>Details </Anchor> 
    </article>
  );
};

export default CityCard;
































