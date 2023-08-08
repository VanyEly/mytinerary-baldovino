import React, { useState } from 'react'
import 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Main() {

//let[image,setImage]=  useState("image")
//setImage("nuevaimage")

//let image = "image"

//const handlerImage = ()=>{
  //image ="cambiar image"
//}
  


  return (
    <>
  <main >
    <h1>Find the perfect destination</h1>
      <p>Our app will help you find the perfect pathh for your next trip. With an easy-to -use interface and a host of itinerary options, planning your next trip has never been easier.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  

</div>

<Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/hermosa-foto-lago-cristalino-junto-base-montana-nevada-dia-soleado_181624-5459.jpg?size=626&ext=jpg" />
      <Card.Body>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
  </main>
  </>
  )
}

export default Main

