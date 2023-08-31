import React, { useEffect, useState, useRef } from 'react';
//import '../Cities/cities.css';
//import Form from 'react-bootstrap/Form'
import { getAllCountry } from '../services/citiesQueries';
import CityCard from '../components/CityCard';
import axios from 'axios';
//import CompCities from '../components/CompCities';


const CityMain = () => {
const [country, setCountry] = useState([]);
const [allCountry, setAllCountry] = useState([]);
const input = useRef(null);

useEffect(() => {
  getAllCountry()
   .then(data=>{
    setCountry(data.cities);
    setAllCountry(data);
   })
   .catch((err) => console.log(err));

  },[]);
//console.log(country);
const handleSubmit = (e) => {
  e.preventDefault();
 // if (input.current.value){
   // const queryParams = "?name=" + input.current.value;
    //getAllCountry(queryParams)
    //.then((response) => setCountry(response))
    //.catch((err)=> console.log(err));
  //}else {
    //setCountry(allCountry);
  //}





  //const formularioCity = ({ setCountry}) => {
    ///let inputNombreRef = useRef()

const crearCountry = () => {


axios.get("/cities/")
.then(response => 
    
  console.log("Cities: " , response.data.name)
  // setCountry(response.data)
  )
     }    
//      }
};
  
return (
<>
 <section className="container d-flex flex-wrap gap-5 justify-content-center align-item-center justify-content-md-between">
 
      <h2 className="text-center w-100 text-primary">Cities</h2>
       
</section>

 

   {country.map((cities)=> <CityCard key={cities._id} ciudad={cities} />)}



</>

  );

};

export default CityMain