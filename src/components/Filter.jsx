import React from 'react'
//import Button from './Button'
import Form from 'react-bootstrap/Form'



export default function Filter() {

    const handlerSubmit = (e) => {
        e.preventDefault()
       };

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
      <Form.Label  htmlFor="inputPassword5" onSubmit ={ handlerSubmit}>   <button>
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
