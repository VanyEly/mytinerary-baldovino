import { getCountry } from "../services/citiesQueries";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
//import CityCard from "../components/CityCard.js";
import Accordion from 'react-bootstrap/Accordion';


export  const DetailCity= () => {
  const [city, setCity] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getCountry(id).then((res) => {
      console.log("fetched details:", res);
      if(res){setCity(res);}
      else{ console.log("city not found")}

    })
     .catch((err) => console.log(err)); 
  },[]);

  const CityCard = ({city}) => {
    const { photo, name, country, description} = city;}
console.log(city);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={`${city.photo}`} alt={`${city.name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${city.country}`}</h2>
        <p>{`${city.description}`}</p>
      </div>
    
      <div>
        <h2 className="text-black text-2xl text-center">
          
        </h2>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Under Construction...</Accordion.Header>
        <Accordion.Body>
     
        </Accordion.Body>
      </Accordion.Item>
   
    </Accordion>
      </div>
    </div>
  );


}

 export default DetailCity;

