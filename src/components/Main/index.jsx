import 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
//import Carousel from './Carousel'

function Main() {

//let[image,setImage]=  useState("image")
//setImage("nuevaimage")

//let image = "image"

//const handlerImage = ()=>{
  //image ="cambiar image"
//}
  let data = [
    {src:"https://img.freepik.com/foto-gratis/hermosa-foto-lago-cristalino-junto-base-montana-nevada-dia-soleado_181624-5459.jpg?size=626&ext=jpg&ga=GA1.2.654731816.1691520754&semt=ais"},
    {src:"https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.654731816.1691520754&semt=ais"},
    {src:"https://img.freepik.com/fotos-premium/paisaje-cascada-lagos-plitvice-croacia_31965-5308.jpg?size=626&ext=jpg&ga=GA1.2.654731816.1691520754&semt=ais"},
    {src:"https://img.freepik.com/foto-gratis/foto-fascinante-hermosa-cascada-montana-rhodopes_181624-44272.jpg?size=626&ext=jpg&ga=GA1.2.654731816.1691520754&semt=ais"},
    
]


  return (
    <>
  <main >
    <h1>Find the perfect destination</h1>
      <p>Our app will help you find the perfect pathh for your next trip. With an easy-to -use interface and a host of itinerary options, planning your next trip has never been easier.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/hermosa-foto-lago-cristalino-junto-base-montana-nevada-dia-soleado_181624-5459.jpg?size=626&ext=jpg" />
      <Card.Body>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
</div>

   {data.map(each =><Carousel src={each.src}/>)}
   
  </main>
  </>
  )
  }
export default Main

