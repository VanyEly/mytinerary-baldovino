import 'react-bootstrap';
//import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Image, Carousel } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
//import { Carousel } from 'react-bootstrap';
//import Carousel from './Carousel'

function Main({src,contenido}) {
  <Image src={src}>{contenido}</Image>
   
  
  
    let[carousel,setCarousel] = useState(1)
    let [test,setTest] = useState(0)
  
  
   let handlearBack = () => {
     if(carousel != 1){
           setCarousel( carousel -1)
     }
    
   }
  
  let handlearUp = () => {
     if(carousel != 3){
         setCarousel(carousel + 1)
  }
  }
  
  let handlerTest = () => {
    setTest(test+1)
    console.log(test);
  }
  
  useEffect(()=> {
  console.log("efecto");
  },[carousel])

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

        



<div>
  
  { (carousel == 1  || carousel == 2 || carousel == 3 || carousel == Image3) ? <>
{carousel == 1 &&  < Image src="https://www.universidades.com.ar/img/article/paisaje-de-argentina" />}
{carousel == 2 &&  <Image src= "https://www.infobae.com/new-resizer/4lYgDG-DKV_GuzNXy8o2Xb5WIsI=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YVABRSOUERFRNGXG3HV2ZWV66A.jpg" className="d-block w-100" />}
{carousel == 3 &&  <Image src="https://www.conclusion.com.ar/wp-content/uploads/2022/11/DSC_0224.jpg" className="d-block w-100" />}
</>
: 
<>
<p>No existe ese paso</p>
</>


}

<button onClick={()=>handlearBack()}> Back </button>
<button onClick={()=>handlearUp()}>  Next </button>

</div>
<Carousel>

<Carousel.Item interval={1000}>
<Image src={src}rounded />
</Carousel.Item>

<Carousel.Item interval={500}>  
<Image src={src} rounded />
</Carousel.Item>

<Carousel.Item interval={500}>  
<Image src={src} rounded />
</Carousel.Item>


<Carousel.Item interval={500}>  
<Image src={src} rounded />
</Carousel.Item>
</Carousel>
   

  </>
  )
}  
export default Main

