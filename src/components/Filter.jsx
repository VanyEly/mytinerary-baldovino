import React from 'react'
//import Button from './Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import React, { useRef } from 'react';


export default function Filter() {

    const handlerSubmite = (e) => {
        e.preventDefault()
       };

       const formularioCity = ({ setCountry}) => {
        let inputNombreRef = useRef()

  const crearCountry = () => {


    axios.get("/cities/")
    .then(response => 
        
      console.log("Cities: " , response.data.name)
      // setCountry(response.data)
      )
         }    
          }
      // let formulario = document.getElementById('formulario');

       // console.log(formulario);
       
       //formulario.addEventListener('input',() => {
       
       
         //searchedInfo = formulario.value.toLowerCase();
         // console.log(searchedInfo);
        // let filteredCards = data.events.filter((cityName) =>
          //cityName.name.toLowerCase().includes(searchedInfo)|| 
         //cityName.description.toLowerCase().includes(searchedInfo))
         //console.log(filteredCards);
       
         //let newCards = index(filteredCards);
       
         //contenedorCards.innerHTML = newCards
       
       //});
  return (
    <>
      <Form.Label  htmlFor="inputPassword5" onSubmit ={ handlerSubmite}>   <button>
    🔎
      </button></Form.Label>
      <Form.Control className="form"
        type="busqueda"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
     
      />
    
    </>
  )
}
