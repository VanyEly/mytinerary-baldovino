import React, { useState } from 'react'
import 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Main() {

let[image,setImage]=  useState("image")
setImage("nuevaimage")

//let image = "image"

const handlerImage = ()=>{
  image ="cambiar image"
}
  


  return (
    <>
  <main >
    <h1>Find the perfect destination</h1>
      <p>Our app will help you find the perfect pathh for your next trip. With an easy-to -use interface and a host of itinerary options, planning your next trip has never been easier.</p> <span></span>
      <button>View More</button>
      
      <div className='container'>
        <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="Bs As" />
        <Carousel.Caption>
     I <mage src="  {https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjFzZvLX7K5RHfOc0QW1WsNz6XWzf6qao6sUxAUw_Dj1r7GwFYFNxOnvY4DZITkBYCeY&usqp=CAU}"rounded /> 
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Cordoba" />
        <Carousel.Caption>
        <Image src="https://www.infobae.com/new-resizer/4lYgDG-DKV_GuzNXy8o2Xb5WIsI=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YVABRSOUERFRNGXG3HV2ZWV66A.jpg" className="d-block w-100" rounded />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Tierra del Fuego" />
        <Carousel.Caption>
        <Image src="https://www.conclusion.com.ar/wp-content/uploads/2022/11/DSC_0224.jpg" className="d-block w-100" rounded />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
      </div>
<button onClick={()=> handlerImage}>
 Siguiente
</button>
  </main>
  </>
  )
}

export default Main

