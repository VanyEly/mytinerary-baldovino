import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import React, { useEffect, useState } from 'react'

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
     
    <Carousel>
      <Carousel.Item interval={1000}>
      <Image src="holder.js/171x180"   rounded />
      <Image src="holder.js/171x180"   rounded /> 
      <Image src="holder.js/171x180"   rounded />
      <Image src="holder.js/171x180"   rounded />
     </Carousel.Item>
      <Carousel.Item interval={500}>
      <Image src="holder.js/171x180"   rounded />
      <Image src="holder.js/171x180"   rounded />
      <Image src="holder.js/171x180"   rounded />
      <Image src="holder.js/171x180"   rounded />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        <Image src="holder.js/171x180"   rounded />
        <Image src="holder.js/171x180"   rounded />
        <Image src="holder.js/171x180"   rounded />
        <Image src="holder.js/171x180"   rounded />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


  </main>
  </>
  )
  }
export default Main

